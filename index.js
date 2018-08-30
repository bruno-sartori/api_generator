#! /usr/bin/env node

const Sequelize = require('sequelize');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');
const MysqlParser = require('./src/parsers/mysql').default;
const icons = require('cli-spinners');
const ora = require('ora');

if (typeof process.argv[2] === 'undefined') {
	console.log('Usage: apigen [PROJECT_PATH]');
	process.exit(1);
}

const rootPath = process.argv[2];
const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

/**
*
* @todo criar uma pasta /utils e colocar funções utilizados em ambos arquivos como capitalize()
*/
async function generate(answers) {
	try {
		const { dbName, dbUser, dbPassword, dbHost } = answers;
		const sequelize = new Sequelize(dbName, dbUser, dbPassword, {	host: dbHost, dialect: 'mysql' });
		const parser = new MysqlParser(rootPath, modelPath, controllersPath, routesPath, testPath, sequelize, dbName);

		await parser.createFoldersAndHelperFiles();
		await parser.parseDatabase();

		const dots = icons.dots;
		const spinner = ora({ spinner: 'dots', stream: console.log, text: 'Running npm install' }); // eslint-disable-line

		spinner.start();

		await shell.exec(`npm install --prefix ${rootPath}`, { silent: true });

		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
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
	const answers = await inquirer.prompt(questions, (answer) => answer);

	await generate(answers);
}

start();
