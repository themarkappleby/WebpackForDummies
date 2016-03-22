"use strict";

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function plugins (options) {
  const pluginCollection = [
    new CleanWebpackPlugin(path.dirname(options.output))
  ];

  if (options.hotReload) {
    pluginCollection.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  return pluginCollection;
}

module.exports = plugins;
