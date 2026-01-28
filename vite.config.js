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
      // ✅ 正确的入口路径应指向组件库源码
      entry: path.resolve(__dirname, "packages/index.js"),
      name: "TeamemoryComponent",
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === "es") return "index.esm.js";
        if (format === "cjs") return "index.cjs.js";
        if (format === "umd") return "index.umd.js";
        return `index.js`;
      },
    },
    // 修改：将输出目录改为根目录下的 dist
    outDir: path.resolve(__dirname, "dist"),
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
