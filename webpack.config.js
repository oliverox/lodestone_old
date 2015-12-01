'use strict';

const path = require('path');
const webpack = require('webpack');
const appConfig = require('./config.js');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + appConfig.port || 3000,
    'webpack/hot/only-dev-server',
    './app/scripts/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'), // directory will be created in memory filesystem
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: [
      path.join(__dirname, './app'),
      path.join(__dirname, './app/scripts')
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss!sass'
    }]
  },
  postcss: [
    require('autoprefixer')
  ]
};
