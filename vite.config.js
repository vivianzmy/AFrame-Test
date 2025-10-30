import { defineConfig } from 'vite'

export default defineConfig({
  // Ensure correct paths when deploying to GitHub Pages at /AFrame-Test/
  base: '/AFrame-Test/',
  server: {
    host: true,
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
