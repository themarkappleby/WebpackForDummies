"use strict";

const fs = require('fs');
const consoleColors = require('colors');

function generateConfig() {
  try {
    return handleFields.call(this);
  } catch (error) {
    showError(error);
  }
}

function handleFields() {
  const self = this;
  const config = {}
  const handlers = fs.readdirSync(__dirname + '/handlers');
  handlers.forEach(function (handlerName) {
    let fieldValues = require('./handlers/' + handlerName).call(self);
    combineFieldsWithConfig(fieldValues, config);
  });
  return config;
}

function combineFieldsWithConfig (fieldValues, config) {
  if (fieldValues) {
    for (var fieldValue in fieldValues) {
      config[fieldValue] = fieldValues[fieldValue];
    }
  }
}

function showError (error) {
  console.error(consoleColors.red(`ERROR: webpack-for-dummies: ${error}`));
}

module.exports = generateConfig;
