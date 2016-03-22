"use strict";

function WebpackForDummies (options) {
  for (var optionName in options) {
    this[optionName] = options[optionName];
  }
}

WebpackForDummies.prototype.generateConfig = require('./generateConfig');
WebpackForDummies.prototype.startDevServer = require('./startDevServer');

module.exports = WebpackForDummies;
