import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    plugins: [react()],
    base: './',
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-router-dom', 'react-dom'],
          },
        },
        plugins: [
          mode === 'analyze' &&
            visualizer({
              open: true,
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true,
            }),
        ],
      },
    },
  }
})
