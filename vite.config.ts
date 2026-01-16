import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@teamemory/components': path.resolve(__dirname, './packages')
    }
  },
  server: {
    port: 3000,
    open: true
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    transformMode: {
      web: [/.[tj]sx$/]
    }
  }
})