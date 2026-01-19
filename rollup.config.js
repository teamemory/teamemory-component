import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';

const packageJson = require('./package.json');

const format = process.env.FORMAT || 'esm';

const extensions = ['.js', '.jsx'];

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
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
  })
];

const config = [
  // ESM bundle
  {
    input: 'packages/index.js',
    output: {
      file: packageJson.module.replace('.d.ts', ''),
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
    input: 'packages/index.js',
    output: {
      file: packageJson.main.replace('.d.ts', ''),
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
    input: 'packages/index.js',
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
];

export default config;