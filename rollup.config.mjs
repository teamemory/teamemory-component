import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import vue from 'rollup-plugin-vue';
import { defineConfig } from 'rollup';

export default defineConfig([
  // ESM 格式
  {
    input: 'src/index.js',
    output: {
      format: 'es',
      file: 'dist/teamemory-components.es.js',
      sourcemap: true
    },
    external: ['vue', 'element-plus', '@emotion/css'],
    plugins: [
      vue({
        target: 'browser',
        exposeFilename: false
      }),
      resolve(),
      commonjs(),
      postcss()
    ]
  },
  // CJS 格式
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'dist/teamemory-components.cjs.js',
      sourcemap: true
    },
    external: ['vue', 'element-plus', '@emotion/css'],
    plugins: [
      vue({
        target: 'browser',
        exposeFilename: false
      }),
      resolve(),
      commonjs(),
      postcss()
    ]
  },
  // UMD 格式
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'TeamemoryComponents',
      file: 'dist/teamemory-components.umd.js',
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus',
        '@emotion/css': 'emotionCss'
      },
      sourcemap: true
    },
    external: ['vue', 'element-plus', '@emotion/css'],
    plugins: [
      vue({
        target: 'browser',
        exposeFilename: false
      }),
      resolve(),
      commonjs(),
      postcss(),
      terser()
    ]
  }
]);