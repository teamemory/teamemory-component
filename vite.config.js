import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    lib: {
      entry: './src/index.js',
      name: 'TeamemoryComponents',
      fileName: (format) => `teamemory-components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@emotion/css'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@emotion/css': 'EmotionCSS',
        },
      },
    },
  },
});