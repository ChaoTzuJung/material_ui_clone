import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

import packageJson from './package.json';

const ENV = process.env.NODE_ENV;

const input = 'src/index.ts';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

const external = [
  'react',
  'react-dom',
  'react-router-dom',
  'lodash',
  'react-transition-group',
  'classnames'
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  lodash: 'lodash',
  'react-transition-group': 'ReactTransitionGroup',
  '@babel/runtime-corejs3/core-js-stable/instance/find':
    '_findInstanceProperty',
  '@babel/runtime-corejs3/core-js-stable/instance/sort':
    '_sortInstanceProperty',
  '@babel/runtime-corejs3/core-js-stable/instance/splice':
    '_spliceInstanceProperty',
  '@babel/runtime-corejs3/core-js-stable/instance/for-each':
    '_forEachInstanceProperty',
  '@babel/runtime-corejs3/core-js-stable/instance/map': '_mapInstanceProperty',
  classnames: 'classNames'
};

const footer = `
if(typeof window !== 'undefined') {
  window._Dry_VERSION_ = '${packageJson.version}'
}`;

const fileNames = {
  development: 'chips.development.js',
  production: 'chips.production.min.js'
};

const fileName = fileNames[ENV];

const plugins = [
  ENV !== 'production' &&
    cleaner({
      targets: ['./cjs', './esm']
    }),
  replace({
    preventAssignment: true,
    exclude: 'node_modules/**',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  resolve({ extensions }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    rootMode: 'upward',
    extensions
  }),
  commonjs({
    include: /node_modules/,
    sourceMap: false
  }),
  peerDepsExternal(),
  typescript(),
  postcss({
    plugins: [autoprefixer()],
    modules: { generateScopedName: '[local]' },
    minimize: ENV === 'production' ? true : false
  }),
  ENV === 'production' && terser()
];

const umdPlugins = [
  ENV !== 'production' &&
    cleaner({
      targets: ['./umd']
    }),
  replace({
    preventAssignment: true,
    exclude: 'node_modules/**',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  resolve({ extensions }),
  babel({
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    rootMode: 'upward',
    extensions
  }),
  commonjs({
    include: /node_modules/,
    sourceMap: false
  }),
  peerDepsExternal(),
  typescript(),
  postcss({
    plugins: [autoprefixer()],
    extract: true,
    modules: { generateScopedName: '[local]' },
    minimize: ENV === 'production' ? true : false
  }),
  ENV === 'production' && terser()
];

const developmentEnv = [
  {
    input,
    // Specify top-level `this` value
    context: 'window',
    output: [
      {
        file: `esm/${fileName}`,
        format: 'esm',
        footer
      },
      {
        file: `cjs/${fileName}`,
        format: 'cjs',
        footer
      }
    ],
    // 告訴 rollup 哪些檔案不需要一起被打包
    external: [...external, /@babel\/runtime/],
    plugins
  },
  {
    input,
    context: 'window',
    output: [
      {
        file: `umd/${fileName}`,
        format: 'umd',
        name: 'Chips',
        globals,
        footer
      }
    ],
    // 告訴 rollup 哪些檔案不需要一起被打包
    external,
    plugins: umdPlugins
  }
];

const productionEnv = [
  {
    input,
    context: 'window',
    output: [
      {
        file: `esm/${fileName}`,
        format: 'esm',
        footer
      },
      {
        file: `cjs/${fileName}`,
        format: 'cjs',
        footer
      }
    ],
    // 告訴 rollup 哪些檔案不需要一起被打包
    external: [...external, /@babel\/runtime/],
    plugins
  },
  {
    input,
    context: 'window',
    output: [
      {
        file: `umd/${fileName}`,
        format: 'umd',
        name: 'Chips',
        globals,
        footer
      }
    ],
    // 告訴 rollup 哪些檔案不需要一起被打包
    external,
    plugins: umdPlugins
  }
];

export default ENV === 'production' ? productionEnv : developmentEnv;
