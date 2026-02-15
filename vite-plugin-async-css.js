/**
 * Vite plugin to load CSS asynchronously for non-critical styles
 * and inject early preloads to shorten the critical request chain (LCP).
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Main bundle CSS (from Vite build) – make async to avoid render-blocking (saves ~160ms LCP).
const MAIN_CSS_HREF_RE = /href=["'](\/assets\/[^"']+\.css)["']/;

// Match <link rel="stylesheet" ... href="*.css" ...> with attributes in any order (Vite may inject crossorigin etc.).
const STYLESHEET_LINK_RE = /<link\s+[^>]*?rel=["']stylesheet["'][^>]*?href=["']([^"']+\.css)["'][^>]*>|<link\s+[^>]*?href=["']([^"']+\.css)["'][^>]*?rel=["']stylesheet["'][^>]*>/gi;

// Transform ALL stylesheet links to async (including main bundle) to move CSS off the critical path.
// Anti-FOUC: hide content until main CSS loads via .await-main-css class.
function transformCssLinks(html, mainCssHref) {
  return html.replace(STYLESHEET_LINK_RE, (match, href1, href2) => {
    if (match.includes('preload') || match.includes('onload')) return match;
    const href = href1 || href2;
    const isMainCss = mainCssHref && href === mainCssHref;
    const onload = isMainCss
      ? `this.onload=null;this.rel='stylesheet';document.documentElement.classList.remove('await-main-css')`
      : `this.onload=null;this.rel='stylesheet'`;
    return `<link rel="preload" href="${href}" as="style" onload="${onload}">
    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
  });
}

// Inject at the very start of <head>: anti-FOUC (hide until main CSS loads) + preloads
// so the browser discovers critical resources in the first bytes (shorter critical path).
function injectCriticalPreloads(html, mainCssHref) {
  const jsMatch = html.match(/<script[^>]+type=["']module["'][^>]+src=["']([^"']+)["']/);
  const parts = [];
  // Prevent flash of unstyled content: hide body until main CSS has loaded
  parts.push('<style>html.await-main-css{visibility:hidden}</style>');
  parts.push('<script>document.documentElement.classList.add("await-main-css");'
    + 'setTimeout(function(){document.documentElement.classList.remove("await-main-css");},5000);</script>');
  // Start main CSS download immediately (first bytes) to shorten critical path
  if (mainCssHref) parts.push(`<link rel="preload" href="${mainCssHref}" as="style">`);
  if (jsMatch) parts.push(`<link rel="modulepreload" href="${jsMatch[1]}">`);
  return html.replace(/(<head[^>]*>)/i, `$1\n    ${parts.join('\n    ')}`);
}

export function asyncCss() {
  return {
    name: 'async-css',
    apply: 'build',
    enforce: 'post', // run after Vite so HTML already has injected assets
    generateBundle(options, bundle) {
      const processHtml = (html) => {
        const mainCssMatch = html.match(MAIN_CSS_HREF_RE);
        const mainCssHref = mainCssMatch ? mainCssMatch[1] : null;
        html = injectCriticalPreloads(html, mainCssHref);
        html = transformCssLinks(html, mainCssHref);
        return html;
      };

      let patched = false;
      for (const key of Object.keys(bundle)) {
        const chunk = bundle[key];
        if (chunk?.type !== 'asset' || typeof chunk.source !== 'string') continue;
        const name = chunk.fileName ?? key;
        if (!name.endsWith('.html')) continue;
        chunk.source = processHtml(chunk.source);
        patched = true;
        break;
      }
      if (!patched) this.__asyncCssProcess = processHtml;
    },
    writeBundle(options) {
      const processHtml = this.__asyncCssProcess;
      if (!processHtml) return;
      const outputDir = options.dir || resolve(process.cwd(), 'dist');
      const htmlPath = resolve(outputDir, 'index.html');
      try {
        const html = readFileSync(htmlPath, 'utf-8');
        writeFileSync(htmlPath, processHtml(html), 'utf-8');
      } catch (err) {
        console.warn('Could not patch HTML file:', err.message);
      }
    },
  };
}

