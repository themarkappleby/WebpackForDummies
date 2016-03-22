"use strict";

// named moduleHandler to avoid naming conflict with node's module
function moduleHandler (options) {
  return {
    loaders: [jsLoader(options)]
  }
}

function jsLoader (options) {
  const loader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel?presets[]=react,presets[]=es2015']
  }

  if (options.hotReload) {
    loader.loaders.unshift('react-hot');
  }

  return loader;
}

module.exports = moduleHandler;
