"use strict";

function node () {
  if (this.target === 'node') {
    return {
      __filename: true,
      __dirname: true
    }
  }
}

module.exports = node;
