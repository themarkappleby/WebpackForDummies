"use strict";

function entry () {
  if (!this.input) throw 'input required';

  const inputs = [];

  if (this.clientPort) {
    inputs.push('webpack-dev-server/client?http://localhost:' + this.clientPort)
  }

  if (this.hotReload) {
    inputs.push('webpack/hot/only-dev-server');
  }

  inputs.push(this.input);

  return inputs;
}

module.exports = entry;
