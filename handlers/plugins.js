"use strict";

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function plugins () {

  const pluginCollection = [];

  if (this.clean !== false) {
    pluginCollection.push(
      new CleanWebpackPlugin(path.dirname(this.output), {
        root: path.dirname(this.output) + '/..'
      })
    );
  }

  return pluginCollection;
}

module.exports = plugins;
