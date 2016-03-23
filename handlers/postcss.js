"use strict";

const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');

function postcss () {
  return [cssnext]
}

module.exports = postcss;
