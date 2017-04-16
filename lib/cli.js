#!/usr/bin/env node
'use strict';
console.log('this just happened...');
var path = require('path');
var test = require('./routes/test');

var log = test.testMethod();

console.log(log);
console.log('current directory ' + process.cwd()); 