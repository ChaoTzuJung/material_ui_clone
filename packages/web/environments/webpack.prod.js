const path = require('path');
// const glob = require('glob');
const { merge } = require('webpack-merge');
// const threadLoader = require('thread-loader');
const TerserPlugin = require('terser-webpack-plugin'); // 代碼壓縮工具
// const PurgeCSSPlugin = require('purgecss-webpack-plugin'); // 清除沒用到的 css
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清理打包目錄
// const MiniCSSExtractPlugin = require('mini-css-extract-plugin'); // 分離 css 而不是使用 style-loader 直接插入
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // webpack 5 推薦使用的 css 壓縮工具

// 效率工具
// const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 生成圖片直觀顯示打包訊息
// const DashboardPlugin = require('webpack-dashboard/plugin'); // 圖形化命畫打包輸出
// const Bundlesize = require('bundlesize'); // 自動化監控工具
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // 分析構建過程中在各個 loader 和 plugin 上花費的時間

const baseConfig = require('./webpack.base');

// const cssWorkerPool = {
//   workerParallelJobs: 2,
//   poolTimeout: 2000
// };

// threadLoader.warmup(cssWorkerPool, ['css-loader', 'postcss-loader']);

const PATHS = {
  root: path.join(__dirname, '../')
};

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(`${PATHS.root}`, 'dist'),
    filename: '[name].[hash:8].bundle.js',
    publicPath: '/guideline/'
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // MiniCSSExtractPlugin.loader,
          // {
          //   loader: 'thread-loader', // 將後面的 loader 放置在一個 worker 池裡面運行，已達到多現成建構
          //   options: cssWorkerPool
          // },
          'style-loader',
          {
            loader: 'css-loader',
            options: {
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
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  cache: {
    type: 'memory'
  },
  plugins: [
    new CleanWebpackPlugin() // 清理打包目录
    // new MiniCSSExtractPlugin({
    //   filename: '[name]_[contenthash:8].css',
    //   chunkFilename: '[name].[contenthash].css'
    // })
    // new PurgeCSSPlugin({
    // paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    // safelist: ['html', 'body']
    // })
    // new BundleAnalyzer(),
    // new DashboardPlugin()
    // new SpeedMeasurePlugin(),
    // new Bundlesize(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        parallel: true,
        extractComments: false
      }),
      new CssMinimizerPlugin({
        parallel: true
      })
    ]
  }
};

module.exports = merge(baseConfig, prodConfig);
