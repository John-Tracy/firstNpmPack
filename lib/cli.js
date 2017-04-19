#!/usr/bin/env node
'use strict';
var commandLineArgs = require('command-line-args')
var inquirer = require('inquirer');

var optionDefinitions = [
  { name: 'create', multiple: true, type: String},
  { name: 'options'},
  { name: 'help'}
];

var options = commandLineArgs(optionDefinitions);

console.log(options);
