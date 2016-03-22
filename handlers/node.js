"use strict";

function node (options) {
  if (options.target === 'node') {
    return {
      __filename: true,
      __dirname: true
    }
  }
}

module.exports = node;
