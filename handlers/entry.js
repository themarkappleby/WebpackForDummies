"use strict";

function entry (options) {
  if (!options.input) throw 'input required';

  const inputs = [];

  if (options.clientPort) {
    inputs.push('webpack-dev-server/client?http://localhost:' + options.clientPort)
  }

  if (options.hotReload) {
    inputs.push('webpack/hot/only-dev-server');
  }

  inputs.push(options.input);

  return inputs;
}

module.exports = entry;
