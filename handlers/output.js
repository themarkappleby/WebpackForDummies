"use strict";

const path = require('path');

function output (options) {
  if (!options.output) throw 'output required';

  const outputParams = {
    path: path.dirname(options.output),
    filename: path.basename(options.output),
    publicPath: '/'
  };

  if (options.clientPort) {
    outputParams.publicPath = 'http://localhost:' + options.clientPort + '/';
  }

  return outputParams;
}

module.exports = output;
