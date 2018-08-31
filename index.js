#! /usr/bin/env node

const Sequelize = require('sequelize');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');
const MysqlParser = require('./src/parsers/mysql').default;
const Multispinner = require('multispinner');
const chalk = require('chalk');
// const icons = require('cli-spinners');
// const ora = require('ora');

if (typeof process.argv[2] === 'undefined') {
	console.log(`${chalk.blue('Usage:')} apigen [${chalk.green('PROJECT_PATH')}]`);
	process.exit(1);
}

const rootPath = process.argv[2];
const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

function runNpmInstall() {
	return new Promise((resolve) => {
		shell.exec(`npm install --prefix ${rootPath}`, { silent: true }, () => {
			resolve();
		});
	});
}

function load() {
	const spinner = new Multispinner(['1'], {
		preText: `${chalk.green('Running \`')}${chalk.gray('npm install')}${chalk.green('\`')}`,
		frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
		indent: 0,
		color: {
			incomplete: 'cyan',
			success: 'green',
			error: 'red'
		}
	});

	runNpmInstall().then(() => {
		spinner.success('1');
		process.exit(0);
	}).catch(() => {
		spinner.error('1');
		process.exit(1);
	});

	return;
}

/**
*
* @todo criar uma pasta /utils e colocar funções utilizados em ambos arquivos como capitalize()
*/
async function generate(answers) {
	try {
		const { dbName, dbUser, dbPassword, dbHost } = answers;
		const sequelize = new Sequelize(dbName, dbUser, dbPassword, {	host: dbHost, dialect: 'mysql', logging: false });
		const parser = new MysqlParser(rootPath, modelPath, controllersPath, routesPath, testPath, sequelize, dbName);

		await parser.createFoldersAndHelperFiles();
		await parser.parseDatabase();
	} catch (error) {
		console.log(error); // eslint-disable-line
	}
}

async function start() {
	const questions = [
		{ name: 'appName', message: 'Application Name?', default: 'API'	},
		{ name: 'dbName', message: 'Database Name?', default: 'isp_1' },
		{ name: 'dbHost', message: 'Database Host?', default: 'localhost' },
		{ name: 'dbUser', message: 'Database User?', default: 'root' },
		{ name: 'dbPassword', message: 'Database Password?', default: 'root' }
	];
	const npmQuestions = [{ name: 'runNpm', message: 'Run npm install now?', type: 'confirm' }];

	const answers = await inquirer.prompt(questions, (answer) => answer);
	await generate(answers);

	const npmAnswers = await inquirer.prompt(npmQuestions, (answer) => answer);
	return npmAnswers;
}

start().then((npmAnswers) => {
	if (npmAnswers) {
		load();
	}
});
