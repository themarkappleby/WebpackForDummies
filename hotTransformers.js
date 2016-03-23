const webpack = require('webpack');
const hotTransformers = {};

hotTransformers.entry = function (config) {
  config.entry.unshift('webpack/hot/only-dev-server');
  config.entry.unshift('webpack-dev-server/client?http://localhost:' + this.port)
}

hotTransformers.output = function (config) {
  config.output.publicPath = 'http://localhost:' + this.port + '/';
}

hotTransformers.loaders = function (config) {
  config.module.loaders.forEach(function(loader) {
    if (loader.name === 'jsLoader') {
      loader.loaders.unshift('react-hot');
    }
  });
}

hotTransformers.plugins = function (config) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = hotTransformers;
