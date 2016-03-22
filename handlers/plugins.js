"use strict";

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function plugins (options) {
  return [
    new CleanWebpackPlugin(path.dirname(options.output))
  ];
}

module.exports = plugins;
