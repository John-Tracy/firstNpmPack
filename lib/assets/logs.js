var chalk = require('chalk');

var logs = {
	init: [
		chalk.cyan('    __                              '),
		chalk.cyan('   / /   ____ ___  __________  ____ '),
		chalk.cyan('  / /   / __ `/ / / / ___/ _ \\/ __ \\ '),
		chalk.cyan(' / /___/ /_/ / /_/ / /  /  __/ / / /'),
		chalk.cyan('/_____/\\__,_/\\__,_/_/   \\___/_/ /_/ '),
		chalk.cyan('                                    '),
		chalk.cyan('   ========================='),
		chalk.cyan('     Claudia\'s Best Friend '),
		chalk.cyan('   ========================='),
		chalk.green('Quickly and intuitively Scaffolds\nAWS Serverless API applications(LAMBDA)\n based on Claudia API Builder'),
		chalk.cyan('   =========================\n'),
		chalk.underline.green('Example Use\n'),
		chalk.green('   $ lauren --create [app name]'),
		chalk.green('   $ lauren --options'),
		chalk.green('   $ lauren --help'),
		chalk.green('   $ lauren --helloworld'),
		chalk.cyan('\n   =========================')
	],
	options: [
		chalk.cyan('   =========================\n'),
		chalk.underline.green('tab options\n'),
		chalk.green('   --create    ')+chalk.underline('appName')+chalk.yellow('  starts app scaffold process'),
		chalk.green('   --help    ')+chalk.yellow('shows app help block'),
		chalk.green('   --options    '),
		chalk.green('   --helloworld    ')+chalk.yellow('scaffolds simple hello world app to start learning'),
		chalk.cyan('\n   =========================')
	]
};

module.exports = logs;