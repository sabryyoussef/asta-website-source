/**
 * Vite plugin to load CSS asynchronously for non-critical styles
 * and inject early preloads to shorten the critical request chain (LCP).
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Main bundle CSS (from Vite build) – keep render-blocking for LCP; do not async.
const MAIN_CSS_HREF_RE = /href=["'](\/assets\/[^"']+\.css)["']/;

// Transform only non-critical CSS to async (skip main bundle CSS)
function transformCssLinks(html, mainCssHref) {
  return html.replace(
    /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"[^>]*>/g,
    (match, href) => {
      if (match.includes('preload') || match.includes('onload')) return match;
      // Keep main bundle CSS render-blocking so LCP is styled
      if (mainCssHref && href === mainCssHref) return match;
      return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
  );
}

// Inject at the very start of <head> so the browser discovers critical CSS/JS in the first bytes
// and can fetch them in parallel with the rest of the HTML (shorter critical path).
function injectCriticalPreloads(html) {
  const cssMatch = html.match(MAIN_CSS_HREF_RE);
  const jsMatch = html.match(/<script[^>]+type=["']module["'][^>]+src=["']([^"']+)["']/);
  const preloads = [];
  if (cssMatch) preloads.push(`<link rel="preload" href="${cssMatch[1]}" as="style">`);
  if (jsMatch) preloads.push(`<link rel="modulepreload" href="${jsMatch[1]}">`);
  if (preloads.length === 0) return html;
  return html.replace(/(<head[^>]*>)/i, `$1\n    ${preloads.join('\n    ')}`);
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
        html = injectCriticalPreloads(html);
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

