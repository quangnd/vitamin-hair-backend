'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chalkProcessing = exports.chalkWarning = exports.chalkSuccess = exports.chalkError = undefined;

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chalkError = exports.chalkError = _chalk2.default.red; // Centralized configuration for chalk, which is used to add color to console.log statements.
var chalkSuccess = exports.chalkSuccess = _chalk2.default.green;
var chalkWarning = exports.chalkWarning = _chalk2.default.yellow;
var chalkProcessing = exports.chalkProcessing = _chalk2.default.blue;