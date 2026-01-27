import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

const extensions = ['.js', '.jsx'];

export default [
  // ES/CJS
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/teamemory-components.es.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/teamemory-components.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external: [
      'vue',
      'element-plus',
      '@emotion/css'
    ],
    plugins: [
      nodeResolve({
        extensions,
      }),
      commonjs(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**',
      }),
      postcss({
        extract: false,
        modules: false,
        autoModules: false,
        minimize: true,
        sourceMap: true,
      }),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
    ],
  },
  // UMD
  {
    input: 'src/index.js',
    output: {
      file: 'dist/teamemory-components.umd.js',
      format: 'umd',
      name: 'TeamemoryComponents',
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus',
        '@emotion/css': 'EmotionCSS',
      },
    },
    external: [
      'vue',
      'element-plus',
      '@emotion/css'
    ],
    plugins: [
      nodeResolve({
        extensions,
      }),
      commonjs(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**',
      }),
      postcss({
        extract: false,
        modules: false,
        autoModules: false,
        minimize: true,
        sourceMap: true,
      }),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production'),
        },
      }),
    ],
  },
  // Type declarations
  {
    input: 'src/index.js',
    output: {
      file: 'dist/teamemory-components.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];