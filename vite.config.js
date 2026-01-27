import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@teamemory/components': '/src'
    }
  },
  server: {
    port: 3000,
    open: true
  }
});