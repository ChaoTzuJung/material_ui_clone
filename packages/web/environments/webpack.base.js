const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const threadLoader = require('thread-loader');
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const workspaceRoot = path.join(__dirname, '../');

const jsWorkerPool = {
  poolTimeout: 2000
};

threadLoader.warmup(jsWorkerPool, ['babel-loader']);

module.exports = {
  target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist',
  entry: [`${workspaceRoot}` + './src/index.tsx'],
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
    alias: {
      '@chips/web': path.join(workspaceRoot, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: [
          {
            loader: 'thread-loader', // 將後面的 loader 放置在一個 worker 池裡面運行，已達到多現成建構
            options: jsWorkerPool
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        type: 'asset/inline',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]'
        }
      }
    ]
  },
  plugins: [
    // new StyleLintPlugin({
    //   context: path.join(__dirname, '../src'),
    //   files: ['**/*.{html,vue,css,sass,scss}'],
    //   fix: false,
    //   cache: true,
    //   emitErrors: true,
    //   failOnError: false
    // }),

    new HtmlWebpackPlugin({
      title: 'Chips',
      template: path.resolve(`${workspaceRoot}`, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(
        `${workspaceRoot}`,
        'src/assets/images/new_asus_ico_256x256.png'
      )
    })
  ],
  performance: {
    hints: 'warning',
    //Maximum volume at the beginning of the entrance
    maxEntrypointSize: 10000,
    //Maximum size of generated file
    maxAssetSize: 250000,
    //Only give performance tips for js files
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js', '.css');
    }
  }
  // optimization: {
  //   // 代码分割
  //   splitChunks: {
  //     chunks: 'all',
  //     minSize: 30000,
  //     minRemainingSize: 0,
  //     minChunks: 2,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     usedExports: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         minChunks: 2,
  //         priority: -10,
  //         reuseExistingChunk: true
  //       },
  //       common: {
  //         minChunks: 2,
  //         priority: -20,
  //         name: 'common',
  //         reuseExistingChunk: true,
  //         minSize: 0
  //       }
  //     }
  //   }
  // }
};
