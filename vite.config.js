import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "packages"),
    },
  },
  root: "examples", // 指定examples为根目录，这样开发服务器会以examples中的index.html为入口
  build: {
    lib: {
      entry: "./packages/index.ts",
      name: "TeamemoryComponents",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "element-plus", "@emotion/css"],
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
          "@emotion/css": "emotionCss",
        },
      },
    },
  },
});
