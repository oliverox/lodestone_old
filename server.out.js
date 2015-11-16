/* eslint no-console: 0 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
var port = isDeveloping ? 3000 : process.env.PORT;
var app = (0, _express2['default'])();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(_express2['default']['static'](__dirname + '/dist'));

if (isDeveloping) {
  var compiler = (0, _webpack2['default'])(_webpackConfigJs2['default']);

  app.use((0, _webpackDevMiddleware2['default'])(compiler, {
    publicPath: _webpackConfigJs2['default'].output.publicPath,
    contentBase: 'src',
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

app.get('/', function response(req, res) {
  console.log('req:', req);
  res.render('index', {
    env: process.env.NODE_ENV,
    title: 'Lodestone App'
  });
});

// app.get('*', function response(req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
