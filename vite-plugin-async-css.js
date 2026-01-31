/**
 * Vite plugin to load CSS asynchronously to prevent render blocking
 */
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

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
          html = this.transformCssLinks(html);
          writeFileSync(htmlPath, html, 'utf-8');
        } catch (err) {
          console.warn('Could not modify HTML file:', err.message);
        }
      } else {
        // Modify HTML files in the bundle
        htmlFiles.forEach(htmlKey => {
          const htmlChunk = bundle[htmlKey];
          if (htmlChunk.type === 'asset' && htmlChunk.source) {
            htmlChunk.source = this.transformCssLinks(htmlChunk.source.toString());
          }
        });
      }
    },
    transformCssLinks(html) {
      // Replace blocking CSS links with async loading
      // Pattern: <link rel="stylesheet" href="/assets/index-xxx.css">
      return html.replace(
        /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"[^>]*>/g,
        (match, href) => {
          // Skip if already has async/preload attributes
          if (match.includes('preload') || match.includes('onload')) {
            return match;
          }
          
          // Convert to async loading with preload
          return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
        }
      );
    },
  };
}

