"use strict";

function entry () {
  if (!this.input) throw 'input required';
  return {
    entry: [this.input]
  };
}

module.exports = entry;
