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

var baseQuestions = [
	{
		type: 'input',
		name: 'appName',
		message: 'What is your app\'s name?',
		validate: function(value){
			if(value != ""){
				return true;
			}
			return 'Enter a name'; 
		}
	}
];

if(options.create){
	if(options.create.length > 0){
		// parses array of args and inquires about missing args to complete scaffolding plan
	}else{
		// askes all questions.
		inquirer.prompt(baseQuestions).then(function (answers) {
		  console.log(answers);
		});
	}
}

if(options.options){
	console.log('show options list and use cases')
}

if(options.help){
	console.log('show help')
}

if(!options.help && !options.options && !options.create){
	console.log('show cool console log here')
}