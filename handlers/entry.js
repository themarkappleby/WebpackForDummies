"use strict";

function entry () {
  if (!this.input) throw 'input required';
  return [this.input];
}

module.exports = entry;
