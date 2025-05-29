import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  assetsInclude: ['**/*.wasm'], 
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
  build: {
    target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
    rollupOptions: {
      output: {
        manualChunks: undefined,  
      },
    

    },
  },
})
