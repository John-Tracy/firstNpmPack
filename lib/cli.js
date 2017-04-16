#!/usr/bin/env node
'use strict';
console.log('this just happened...');
var test = require('./routes/test');

var log = test.testMethod();

console.log(log);