/* eslint no-console: 0 */
import 'colors';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';
import appConfig from './config.js';

const PORT = appConfig.port || 3333;
const COLOR = appConfig.color;

new WebpackDevServer(webpack(webpackConfig), {
  contentBase: 'app/html',
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(PORT, 'localhost', function listen(err) {
  if (err) {
    console.log(err);
  }
  console.info('Starting server: ' + 'http://localhost:%s'[COLOR] + '\n' +
  '██╗      ██████╗ ██████╗ ███████╗███████╗████████╗ ██████╗ ███╗   ██╗███████╗\n'[COLOR] +
  '██║     ██╔═══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝\n'[COLOR] +
  '██║     ██║   ██║██║  ██║█████╗  ███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗  \n'[COLOR] +
  '██║     ██║   ██║██║  ██║██╔══╝  ╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  \n'[COLOR] +
  '███████╗╚██████╔╝██████╔╝███████╗███████║   ██║   ╚██████╔╝██║ ╚████║███████╗\n'[COLOR] +
  '╚══════╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝\n'[COLOR], PORT.toString()[COLOR]);
});
