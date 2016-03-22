"use strict";

// named moduleHandler to avoid naming conflict with node's module
function moduleHandler () {
  return {
    loaders: [jsLoader.call(this)]
  }
}

function jsLoader () {
  const loader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loaders: ['babel?presets[]=react,presets[]=es2015']
  }

  if (this.hotReload) {
    loader.loaders.unshift('react-hot');
  }

  return loader;
}

module.exports = moduleHandler;
