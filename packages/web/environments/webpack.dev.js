const webpack = require('webpack');
const { merge } = require('webpack-merge');
const threadLoader = require('thread-loader');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.base');

const cssWorkerPool = {
  workerParallelJobs: 2,
  poolTimeout: 2000
};

threadLoader.warmup(cssWorkerPool, ['css-loader', 'postcss-loader']);

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 9527,
    hot: true,
    open: false,
    historyApiFallback: true
    // stats: 'errors-warnings'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'thread-loader', // 將後面的 loader 放置在一個 worker 池裡面運行，已達到多現成建構
            options: cssWorkerPool
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                auto: true,
                localIdentName: '[local]'
              },
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new ForkTsCheckerWebpackPlugin({
    //   async: false
    // })
  ]
};

module.exports = merge(baseConfig, devConfig);
