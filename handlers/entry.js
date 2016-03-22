"use strict";

function entry (options) {
  if (!options.input) throw 'input required';
  return options.input;
}

module.exports = entry;
