import shell from 'shelljs';
import bcrypt from 'bcrypt';
import Multispinner from 'multispinner';
import chalk from 'chalk';
import inquirer from 'inquirer';
import Sequelize from 'sequelize';
import MysqlParser from './parsers/mysql';

class ApiGenerator {
	constructor(rootPath, modelPath, controllersPath, routesPath, testPath) {
		this.rootPath = rootPath;
		this.modelPath = modelPath;
		this.controllersPath = controllersPath;
		this.routesPath = routesPath;
		this.testPath = testPath;
	}

	runNpmInstall(spinner) {
		return new Promise((resolve, reject) => {
			try {
				shell.exec(`npm install --prefix ${this.rootPath}`, { silent: true }, () => {
					spinner.success('2');
					resolve();
				});
			} catch (error) {
				spinner.error('2');
				reject(error);
			}
		});
	}

	load(text, index) {
		const spinner = new Multispinner(index, {
			preText: text,
			frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
			indent: 0,
			color: {
				incomplete: 'cyan',
				success: 'green',
				error: 'red'
			}
		});

		return spinner;
	}

	async getAnswers(questions) {
		const answers = await inquirer.prompt(questions, (answer) => answer);
		return answers;
	}

	async addUsersTable(spinner) {
		try {
			await this.sequelize.query('drop table if exists users');

			await this.sequelize.queryInterface.createTable('users', {
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
				},
				name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false
				},
				password: {
					type: Sequelize.STRING,
					allowNull: false
				},
				createdAt: {
					type: Sequelize.DATE,
					allowNull: false
				},
				updatedAt: {
					type: Sequelize.DATE
				}
			});

			const salt = bcrypt.genSaltSync();
			const password = bcrypt.hashSync('test', salt);

			await this.sequelize.query('insert into users (id, name, email, password, createdAt, updatedAt) values(?, ?, ?, ?, ?, ?)', {
				replacements: [1, 'Test', 'test@test.com', password, '2018-08-04 22:12:10', null]
			});

			spinner.success('1');
			return true;
		} catch (error) {
			spinner.error('1');
			throw error;
		}
	}

	/**
	*
	* @todo criar uma pasta /utils e colocar funções utilizados em ambos arquivos como capitalize()
	*/
	async generate(answers) {
		try {
			const { dbName, dbUser, dbPassword, dbHost, excludeTables } = answers;
			this.sequelize = new Sequelize(dbName, dbUser, dbPassword, {	host: dbHost, dialect: 'mysql', logging: false });

			const parser = new MysqlParser(this.rootPath, this.modelPath, this.controllersPath, this.routesPath, this.testPath, this.sequelize, dbName, excludeTables);

			await parser.createFoldersAndHelperFiles();
			await parser.parseDatabase();
		} catch (error) {
			console.log("CAIU NO ERRO" + error);
			throw error;
		}
	}
}

export default ApiGenerator;
