"use strict";

const path = require('path');

function output (options) {
  if (!options.output) throw 'output required';
  return {
    path: path.resolve('./public'),
    filename: 'bundle.js',
    publicPath: '/'
  };
}

module.exports = output;
