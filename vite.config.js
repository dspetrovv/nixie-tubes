import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: false,
  },
  base: '/nixie-tubes/',
});
