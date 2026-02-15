import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { asyncCss } from './vite-plugin-async-css.js'
import { analyzer } from 'vite-bundle-analyzer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), asyncCss(), analyzer({ open: true })], // opens report after build
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk: React + router (stable, cacheable)
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
          // Swiper in its own chunk so it can load with the Home chunk and be cached
          if (id.includes('node_modules/swiper')) {
            return 'vendor-swiper';
          }
          // i18n used on every page, keep with main or small vendor
          if (id.includes('node_modules/i18next') || id.includes('node_modules/react-i18next')) {
            return 'vendor-i18n';
          }
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
    
  },
  preview: {
    port: 10000,
    host: true, // Accept connections from any hostname
    cors: true,
    strictPort: false,
    allowedHosts: [
      'asta.edu.sa',
      '.asta.edu.sa', // Allow subdomains
    ],
  },
})
