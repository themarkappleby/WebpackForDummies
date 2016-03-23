"use strict";

const path = require('path');

function output () {
  if (!this.output) throw 'output required';
  return {
    path: path.dirname(this.output),
    filename: path.basename(this.output),
    publicPath: '/'
  };
}

module.exports = output;
