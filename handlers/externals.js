"use strict";

const nodeExternals = require('webpack-node-externals');

function externals (options) {
  if (options.target === 'node') {
    return [nodeExternals()]
  }
}

module.exports = externals;
