"use strict";

const nodeExternals = require('webpack-node-externals');

function externals () {
  if (this.target === 'node') {
    return [nodeExternals()]
  }
}

module.exports = externals;
