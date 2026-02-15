/**
 * Vite plugin to load CSS asynchronously to prevent render blocking
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Helper function to transform CSS links
function transformCssLinks(html) {
  return html.replace(
    /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"[^>]*>/g,
    (match, href) => {
      if (match.includes('preload') || match.includes('onload')) {
        return match;
      }
      return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
  );
}

// Inject modulepreload for main entry so the browser starts fetching it during head parse (shorter critical path)
function injectModulePreload(html) {
  const match = html.match(/<script[^>]+type=["']module["'][^>]+src=["']([^"']+)["']/);
  if (!match) return html;
  const entryHref = match[1];
  const preload = `<link rel="modulepreload" href="${entryHref}">`;
  return html.replace(/(<head[^>]*>)/i, `$1\n    ${preload}`);
}

export function asyncCss() {
  return {
    name: 'async-css',
    apply: 'build',
    writeBundle(options, bundle) {
      // Find HTML files in the bundle
      const htmlFiles = Object.keys(bundle).filter(key => key.endsWith('.html'));
      
      if (htmlFiles.length === 0) {
        // If no HTML in bundle, try to find it in the output directory
        const outputDir = options.dir || resolve(process.cwd(), 'dist');
        const htmlPath = resolve(outputDir, 'index.html');
        
        try {
          let html = readFileSync(htmlPath, 'utf-8');
          html = transformCssLinks(html);
          html = injectModulePreload(html);
          writeFileSync(htmlPath, html, 'utf-8');
        } catch (err) {
          console.warn('Could not modify HTML file:', err.message);
        }
      } else {
        // Modify HTML files in the bundle
        htmlFiles.forEach(htmlKey => {
          const htmlChunk = bundle[htmlKey];
          if (htmlChunk.type === 'asset' && htmlChunk.source) {
            let src = htmlChunk.source.toString();
            src = transformCssLinks(src);
            src = injectModulePreload(src);
            htmlChunk.source = src;
          }
        });
      }
    },
  };
}

