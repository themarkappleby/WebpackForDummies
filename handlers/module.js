"use strict";

// named moduleHandler to avoid naming conflict with node's module
function moduleHandler (options) {
  return {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015']
      }
    ]
  }
}

module.exports = moduleHandler;
