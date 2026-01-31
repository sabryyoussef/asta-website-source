import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
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
