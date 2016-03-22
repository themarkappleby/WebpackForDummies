"use strict";

const path = require('path');

function output (options) {
  if (!options.output) throw 'output required';
  return {
    path: path.dirname(options.output),
    filename: path.basename(options.output),
    publicPath: '/'
  };
}

module.exports = output;
