#! /usr/bin/env node

const Sequelize = require('sequelize');
const path = require('path');
const shell = require('shelljs');
const inquirer = require('inquirer');
const MysqlParser = require('./src/parsers/mysql').default;
const Multispinner = require('multispinner');
const addUsersTable = require('./src/util/addUsersTable').default;
const chalk = require('chalk');
// const icons = require('cli-spinners');
// const ora = require('ora');

let sequelize;

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

	return runNpmInstall().then(() => {
		spinner.success('1');
	}).catch(() => {
		spinner.error('1');
		process.exit(1);
	});
}

/**
*
* @todo criar uma pasta /utils e colocar funções utilizados em ambos arquivos como capitalize()
*/
async function generate(answers) {
	try {
		const { dbName, dbUser, dbPassword, dbHost, excludeTables } = answers;
		sequelize = new Sequelize(dbName, dbUser, dbPassword, {	host: dbHost, dialect: 'mysql', logging: false });
		const parser = new MysqlParser(rootPath, modelPath, controllersPath, routesPath, testPath, sequelize, dbName, excludeTables);

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
		{ name: 'dbPassword', message: 'Database Password?', default: 'root' },
		{
			name: 'excludeTables',
			message: 'Exclude tables? Ex: table1|table2|..',
			default: 'knex_migrations|knex_migrations_lock|federated_clientes|federated_base_banco|federated_base_operadora_boleto|federated_base_operadora_cartao|federated_isp_fabricante|federated_notifications'
		}
	];

	const npmQuestions = [{ name: 'runNpm', message: 'Run npm install now?', type: 'confirm' }];

	const answers = await inquirer.prompt(questions, (answer) => answer);
	await generate(answers);

	const npmAnswers = await inquirer.prompt(npmQuestions, (answer) => answer);
	return npmAnswers;
}

start().then((npmAnswers) => {
	if (npmAnswers.runNpm === true) {
		return load().then(() => true);
	}
	return true;
}).then(async () => {
	console.log(`${chalk.blue('Adding table')} ${chalk.green('users')} ${chalk.blue('in your database')}`);
	try {
		await addUsersTable(sequelize, Sequelize);
	} catch (error) {
		console.log(`${chalk.red('ERROR:')} ${chalk.green(error.message)}`);
		console.log(error);
	}
	process.exit(0);
});
