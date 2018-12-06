
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('babel-polyfill');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=fonts/'
          },
          {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: ['file-loader?name=[name].[ext]']
          },
          {
            test: /newRelicBrowser\.js$/,
            use: ['file-loader?name=[name].[ext]']
          }
        ]
      },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=[name].[ext]&outputPath=fonts/&publicPath=fonts/'
          },
          {
            test: /\.(png|svg|jpg|gif|ico)$/,
            use: ['file-loader?name=[name].[ext]']
          },
          {
            test: /newRelicBrowser\.js$/,
            use: ['file-loader?name=[name].[ext]']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFileName: '[id].css'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
  };