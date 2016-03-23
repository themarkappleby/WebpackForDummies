"use strict";

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const consoleColors = require('colors');

function startDevServer () {
  establishPort.call(this);
  const devServer = generateDevServer.call(this);
  devServer.listen(this.port, 'localhost', consoleMessages.bind(this));
}

function establishPort() {
  this.port = this.port || 4000;
}

function generateDevServer () {
  const config = generateConfig.call(this);
  const devServer = new WebpackDevServer(webpack(config), {
    publicPath: this.output.publicPath,
    hot: this.hot || true,
    noInfo: true,
    historyApiFallback: true
  });
  return devServer;
}

function generateConfig () {
  const config = this.generateConfig();
  if (this.hot !== false) {
    addHotEntry.call(this, config);
    addHotOutput.call(this, config);
    addHotLoader.call(this, config);
    addHotPlugin.call(this, config);
  }
  console.log(config.output)
  return config;
}

function addHotEntry(config) {
  config.entry.unshift('webpack/hot/only-dev-server');
  config.entry.unshift('webpack-dev-server/client?http://localhost:' + this.port)
}

function addHotOutput(config) {
  config.output.publicPath = 'http://localhost:' + this.port + '/';
}

function addHotLoader(config) {
  config.module.loaders.forEach(function(loader) {
    if (loader.loaders[0].indexOf('babel') > -1) {
      loader.loaders.unshift('react-hot');
    }
  });
}

function addHotPlugin(config) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

function consoleMessages(error) {
  if (error) { return console.log(consoleColors.red(error)); }
  return console.log(consoleColors.green(`Running at http://localhost:${this.port}`));
}

module.exports = startDevServer;
