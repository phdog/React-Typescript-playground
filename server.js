const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const HTML_FILE = path.join(__dirname, 'index.html');
const PORT = process.env.PORT || 8080;

const app = express();
const compiler = webpack(config);
const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

app.use(devMiddleware);

app.get('*', (req, res) => {
  return res.sendFile(HTML_FILE);
});

app.listen(PORT, () => {
  console.log(`Dev server listening on ${PORT}...`)
});
