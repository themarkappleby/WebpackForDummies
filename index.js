"use strict";

const colors = require('colors');
const fieldHandlers = require('./field-handlers');

function generateConfig(options) {
  try {
    return handleFields(options);
  } catch (error) {
    showError(error)
  }
}

function handleFields (options) {
  let config = {}
  for (var handlerName in fieldHandlers) {
    config[handlerName] = fieldHandlers[handlerName](options);
  }
  return config;
}

function showError (error) {
  console.error(colors.red(`ERROR: webpack-for-dummies: ${error}`));
}

module.exports = {
  generateConfig: generateConfig
};
