"use strict";

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const consoleColors = require('colors');

function startDevServer () {
  const devServer = generateDevServer.call(this);
  devServer.listen(this.clientPort, 'localhost', consoleMessages.bind(this));
}

function generateDevServer () {
  const config = this.generateConfig();
  const devServer = new WebpackDevServer(webpack(config), {
    publicPath: this.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  });
  return devServer;
}

function consoleMessages(error) {
  if (error) { return console.log(consoleColors.red(error)); }
  return console.log(consoleColors.green(`Running at http://localhost:${this.clientPort}`));
}

module.exports = startDevServer;
