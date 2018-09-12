#! /usr/bin/env node

const util = require('util');
const path = require('path');
const chalk = require('chalk');
const ApiGenerator = require('./src/apigen').default;

if (typeof process.argv[2] === 'undefined') {
	console.log(`${chalk.blue('Usage:')} apigen [${chalk.green('PROJECT_PATH')}]`);
	process.exit(1);
}

const rootPath = process.argv[2];
const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

async function start() {
	try {
		const apigen = new ApiGenerator(rootPath, modelPath, controllersPath, routesPath, testPath);

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

		const answers = await apigen.askQuestion(questions);
		await apigen.generate(answers);

		const spinner1 = await apigen.load(`${chalk.blue('Adding table')} ${chalk.green('users')} ${chalk.blue('in your database')}`, ['1']);
		await apigen.addUsersTable(spinner1);

		const spinner2 = await apigen.load(`${chalk.green('Running \`')}${chalk.gray('npm install')}${chalk.green('\`')}`, ['2']);
		await apigen.runNpmInstall(spinner2);

		console.log("DONE");
		return true;
	} catch (error) {
		throw error;
	}
}

start().then(() => {
	process.exit(0);
}).catch((error) => {
	console.log(`${chalk.red('ERROR:')} ${chalk.green(error)}`);
	console.log(util.inspect(error.stack));
	process.exit(1);
});
