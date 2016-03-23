"use strict";

const cssnext = require('postcss-cssnext');

function loaders () {
  return {
    module: {
      loaders: [jsLoader(), styleLoader()]
    },
    postcss: [cssnext]
  }
}

function jsLoader () {
  return {
    name: 'jsLoader',
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel?presets[]=react,presets[]=es2015']
  };
}

function styleLoader () {
  return {
    name: 'styleLoader',
    test: /\.css$/,
    exclude: /node_modules/,
    loaders: ['style', 'css?modules', 'postcss']
  };
}

module.exports = loaders;
