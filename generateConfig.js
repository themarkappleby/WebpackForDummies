"use strict";

const fs = require('fs');
const consoleColors = require('colors');

function generateConfig () {
  try {
    return handleFields.call(this);
  } catch (error) {
    showError(error)
  }
}

function handleFields () {
  let self = this;
  let config = {}
  const handlers = fs.readdirSync(__dirname + '/handlers');
  handlers.forEach(function (handlerName) {
    handlerName = handlerName.split('.')[0];
    let fieldValue = require('./handlers/' + handlerName).call(self);
    if (fieldValue) config[handlerName] = fieldValue;
  });
  return config;
}

function showError (error) {
  console.error(consoleColors.red(`ERROR: webpack-for-dummies: ${error}`));
}

module.exports = generateConfig;
