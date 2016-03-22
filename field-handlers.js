"use strict";

const fs = require('fs');
const fieldHandlers = {};
const handlers = fs.readdirSync(__dirname + '/handlers');

handlers.forEach(function (handler) {
  handler = handler.replace('.js', '');
  fieldHandlers[handler] = require('./handlers/' + handler);
});

module.exports = fieldHandlers;
