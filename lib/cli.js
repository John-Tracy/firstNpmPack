#!/usr/bin/env node
'use strict';
var commandLineArgs = require('command-line-args')
var inquirer = require('inquirer');
var chalk = require('chalk');

var optionDefinitions = [
  { name: 'create', multiple: true, type: String},
  { name: 'options', type: Boolean},
  { name: 'help', type: Boolean},
  { name: 'helloworld', type: Boolean}
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
	console.log(chalk.cyan('   =========================\n'));
	console.log(chalk.underline.green('tab options\n'));
	console.log(chalk.green('   --create    ')+chalk.underline('appName')+chalk.yellow('  starts app scaffold process'));
	console.log(chalk.green('   --help    ')+chalk.yellow('shows app help block'));
	console.log(chalk.green('   --options    '));
	console.log(chalk.green('   --helloworld    ')+chalk.yellow('scaffolds simple hello world app to start learning'));
	console.log(chalk.cyan('\n   ========================='));
}

if(options.help){
	console.log('show help')
}

if(options.helloworld){
	console.log('scaffolds quick app')
}

if(!options.help && !options.options && !options.create){
	console.log(chalk.cyan('    __                              '));
	console.log(chalk.cyan('   / /   ____ ___  __________  ____ '));
	console.log(chalk.cyan('  / /   / __ `/ / / / ___/ _ \\/ __ \\ '));
	console.log(chalk.cyan(' / /___/ /_/ / /_/ / /  /  __/ / / /'));
	console.log(chalk.cyan('/_____/\\__,_/\\__,_/_/   \\___/_/ /_/ '));
	console.log(chalk.cyan('                                    '));
	console.log(chalk.cyan('   ========================='));
	console.log(chalk.cyan('     Claudia\'s Best Friend '));
	console.log(chalk.cyan('   ========================='));
	console.log(chalk.green('Quickly and intuitively Scaffolds\nAWS Serverless API applications(LAMBDA)\n based on Claudia API Builder'));
	console.log(chalk.cyan('   =========================\n'));
	console.log(chalk.underline.green('Example Use\n'));
	console.log(chalk.green('   $ lauren --create [app name]'));
	console.log(chalk.green('   $ lauren --options'));
	console.log(chalk.green('   $ lauren --help'));
	console.log(chalk.green('   $ lauren --helloworld'));
	console.log(chalk.cyan('\n   ========================='));

};