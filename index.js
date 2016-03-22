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
    let fieldValue = fieldHandlers[handlerName](options);
    if (fieldValue) config[handlerName] = fieldValue;
  }
  return config;
}

function showError (error) {
  console.error(colors.red(`ERROR: webpack-for-dummies: ${error}`));
}

module.exports = {
  generateConfig: generateConfig
};
