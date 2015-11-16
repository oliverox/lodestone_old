/* eslint no-console: 0 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('colors');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfigJs = require('./webpack.config.js');

var _webpackConfigJs2 = _interopRequireDefault(_webpackConfigJs);

var isDeveloping = process.env.NODE_ENV !== 'production';
var port = undefined;
var app = (0, _express2['default'])();
var outputColor = isDeveloping ? 'yellow' : 'green';
if (isDeveloping) {
  port = 3000;
} else {
  if (process.env.PORT) {
    port = process.env.PORT;
  } else {
    port = 8888;
  }
}

app.use(_express2['default']['static'](__dirname + '/dist'));

if (isDeveloping) {
  var compiler = (0, _webpack2['default'])(_webpackConfigJs2['default']);
  app.use((0, _webpackDevMiddleware2['default'])(compiler, {
    publicPath: _webpackConfigJs2['default'].output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  app.use((0, _webpackHotMiddleware2['default'])(compiler));
}

if (!isDeveloping) {
  app.get('/*', function response(req, res) {
    res.sendFile(_path2['default'].join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Starting ' + (isDeveloping ? 'development'[outputColor] : 'production'[outputColor]) + ' server on port %s...\n' + '██╗      ██████╗ ██████╗ ███████╗███████╗████████╗ ██████╗ ███╗   ██╗███████╗\n'[outputColor] + '██║     ██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝\n'[outputColor] + '██║     ██║   ██║██║  ██║█████╗  ███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗  \n'[outputColor] + '██║     ██║   ██║██║  ██║██╔══╝  ╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  \n'[outputColor] + '███████╗╚██████╔╝██████╔╝███████╗███████║   ██║   ╚██████╔╝██║ ╚████║███████╗\n'[outputColor] + '╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝\n'[outputColor], port.toString()[outputColor]);
});
