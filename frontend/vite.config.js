import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/items': {
        target: 'http://10.93.26.31:42001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/items/, '/items')
      },
      '/interactions': {
        target: 'http://10.93.26.31:42001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/interactions/, '/interactions')
      }
    }
  }
})
