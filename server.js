/* eslint no-console: 0 */
import 'colors';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
let  port;
const app = express();
const outputColor = isDeveloping ? 'yellow' : 'green';
if (isDeveloping) {
  port = 3000;
} else {
  if (process.env.PORT) {
    port = process.env.PORT;
  } else {
    port = 8888;
  }
}

app.use(express.static(__dirname + '/dist'));

if (isDeveloping) {
  const compiler = webpack(config);
  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

if (!isDeveloping) {
  app.get('/*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Starting ' + (isDeveloping ? 'development'[outputColor] : 'production'[outputColor]) + ' server on port %s...\n' +
'██╗      ██████╗ ██████╗ ███████╗███████╗████████╗ ██████╗ ███╗   ██╗███████╗\n'[outputColor] +
'██║     ██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝\n'[outputColor] +
'██║     ██║   ██║██║  ██║█████╗  ███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗  \n'[outputColor] +
'██║     ██║   ██║██║  ██║██╔══╝  ╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  \n'[outputColor] +
'███████╗╚██████╔╝██████╔╝███████╗███████║   ██║   ╚██████╔╝██║ ╚████║███████╗\n'[outputColor] +
'╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝\n'[outputColor], port.toString()[outputColor]);
});
