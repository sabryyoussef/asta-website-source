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
        // Optimize CSS chunking
        manualChunks: undefined,
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
