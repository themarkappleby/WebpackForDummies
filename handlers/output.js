"use strict";

const path = require('path');

function output () {
  if (!this.output) throw 'output required';

  const outputParams = {
    path: path.dirname(this.output),
    filename: path.basename(this.output),
    publicPath: '/'
  };

  if (this.clientPort) {
    outputParams.publicPath = 'http://localhost:' + this.clientPort + '/';
  }

  return outputParams;
}

module.exports = output;
