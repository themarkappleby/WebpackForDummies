"use strict";

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const consoleColors = require('colors');
const hotTransformers = require('./hotTransformers');

function startDevServer (options) {
  options || (options = {});
  establishPort.call(this, options);
  const devServer = generateDevServer.call(this, options);
  devServer.listen(this.port, 'localhost', consoleMessages.bind(this));
}

function establishPort(options) {
  if (!options.immutableConfig) {
    this.port = this.port || 4000;
  }
}

function generateDevServer (options) {
  const config = generateConfig.call(this, options);
  const serverConfig = generateServerConfig.call(this);
  const devServer = new WebpackDevServer(webpack(config), serverConfig);
  return devServer;
}

function generateConfig (options) {
  const config = this.generateConfig();
  if (!options.immutableConfig && this.hot !== false) {
    for (var transformerName in hotTransformers) {
      hotTransformers[transformerName].call(this, config);
    }
  }
  return config;
}

function generateServerConfig() {
  return {
    publicPath: this.output.publicPath,
    hot: this.hot || true,
    noInfo: true,
    historyApiFallback: true
  };
}

function consoleMessages(error) {
  if (error) { return console.log(consoleColors.red(error)); }
  return console.log(consoleColors.green(`Running at http://localhost:${this.port}`));
}

module.exports = startDevServer;
