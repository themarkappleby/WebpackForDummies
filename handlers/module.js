"use strict";

// named moduleHandler to avoid naming conflict with node's module
function moduleHandler () {
  return {
    loaders: [
      jsLoader.call(this),
      styleLoader.call(this)
    ]
  }
}

function jsLoader () {
  return {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel?presets[]=react,presets[]=es2015']
  };
}

function styleLoader () {
  return {
    test: /\.css$/,
    exclude: /node_modules/,
    loaders: ['style', 'css?modules', 'postcss']
  };
}

module.exports = moduleHandler;
