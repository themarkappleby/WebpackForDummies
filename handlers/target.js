"use strict";

function target () {
  if (this.target) {
    return this.target;
  }
}

module.exports = target;
