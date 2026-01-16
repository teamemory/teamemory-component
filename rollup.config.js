import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json');

const format = process.env.FORMAT || 'esm';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const sharedPlugins = [
  peerDepsExternal(),
  resolve({
    extensions,
    browser: true,
  }),
  commonjs(),
  postcss({
    extract: false,
    minimize: true,
    sourceMap: true,
  }),
  typescript({
    tsconfig: './tsconfig.json',
    clean: true,
  }),
];

const config = [
  // ESM bundle
  {
    input: 'packages/index.ts',
    output: {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...sharedPlugins,
      replace({
        preventAssignment: true,
        values: {
          __VERSION__: packageJson.version,
        },
      }),
    ],
  },

  // CJS bundle
  {
    input: 'packages/index.ts',
    output: {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...sharedPlugins,
      replace({
        preventAssignment: true,
        values: {
          __VERSION__: packageJson.version,
        },
      }),
    ],
  },

  // UMD bundle
  {
    input: 'packages/index.ts',
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'TeamemoryComponents',
      globals: {
        vue: 'Vue',
        '@emotion/css': 'emotionCss',
      },
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...sharedPlugins,
      replace({
        preventAssignment: true,
        values: {
          __VERSION__: packageJson.version,
        },
      }),
      terser(),
    ],
  },

  // Type definitions
  {
    input: 'dist/types/packages/index.d.ts',
    output: [{ file: 'dist/types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config;