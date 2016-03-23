"use strict";

function target () {
  if (this.target) {
    return {
      target: this.target
    };
  }
}

module.exports = target;
