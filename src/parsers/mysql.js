import path from 'path';
import shell from 'shelljs';
import _ from 'lodash';
import chalk from 'chalk';
import ControllerGenerator from '../generators/controller';
import RouteGenerator from '../generators/route';
import ModelGenerator from '../generators/model';
import IntegrationTestGenerator from '../generators/integrationTest';
import AccessControlGenerator from '../generators/access_control';

/**
* Esta classe é responsável por realizar o parsing de um banco de dados MYSQL
*
* @version v2.0.0, 19/02/2018 11:58
* @access public
*/
class MysqlParser {
	/**
	* Construtor da classe
	*
	* @param {String}	rootPath - Caminho raíz do projeto
	* @param {String} modelPath - Diretório dos models
	* @param {String} controllersPath - Diretório dos controllers
	* @param {String} routesPath - Diretório das rotas
	* @param {String} testsPath - Diretório de testes
	* @param {Object} sequelize - Classe de conexão com o banco de dados (Sequelize)
	* @param {String} dbName - nome do banco de dados
	* @param {String} excludeTables - Tabelas para serem excluídas do parser
	*
	* @todo Trazer todos os paths em um unico objeto
	* @todo criar a conexão com o banco de dados dentro desta classe (Cada parser terá sua própria conexão)
	*/
	constructor(rootPath, modelPath, controllersPath, routesPath, testsPath, sequelize, dbName, excludeTables) {
		this.db = sequelize;
		this.dbName = dbName;
		this.models = [];
		this.rootPath = rootPath;
		this.modelPath = modelPath;
		this.excludeTables = excludeTables.split('|');

		this.controllerGenerator = new ControllerGenerator(controllersPath);
		this.routeGenerator = new RouteGenerator(routesPath);
		this.integrationTestGenerator = new IntegrationTestGenerator(testsPath);
		this.modelGenerator = new ModelGenerator(modelPath);
		this.accessControlGenerator = new AccessControlGenerator(rootPath, routesPath);
	}

	/**
	* Exclui tudo que houver na pasta raíz do projeto e copia os arquivos base para o projeto.
	*
	* @return {Boolean} Resposta verdadeira caso tudo ocorra bem.
	* @throws {Error} Erro do shelljs
	*/
	async createFoldersAndHelperFiles() {
		try {
			await shell.rm('-rf', `${this.rootPath}/*`);
			await shell.cp('-r', path.join(__dirname, '../files/back-nodejs/*'), this.rootPath);
			await shell.cp('-r', path.join(__dirname, '../files/back-nodejs/.*'), this.rootPath);
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}

	/**
	* Helper para parsear os tipos de dados do MYSQL
	* @param {String} type - tipo de dado de um field da tabela que está sendo processada.
	* @return {String} tipo para ser usado nos models
	*/
	getType(type) {
		const types = {
			datetime: 'DATE',
			int: 'INTEGER',
			varchar: 'STRING',
			tinyint: 'BOOLEAN',
			decimal: 'FLOAT',
			float: 'FLOAT',
			text: 'STRING'
		};

		let trueType = type.match(/.+?(?=\()/);

		trueType = (trueType === null) ? type : trueType[0];

		return types[trueType];
	}

	/**
	* Itera sobre todas as tabelas do banco provido pelo usuário e transforma em um Array de objetos
	* no formato [{ name: "NOME_DA_TABELA", columns: [{ name: "NOME_DO_CAMPO", type: "TIPO_DO_CAMPO" }] }].
	* Após fazer isso em todas as tabelas chamará o método generateFiles.
	*
	* @param void
	* @return void
	*/
	async parseDatabase() {
		const tables = await this.db.getQueryInterface().showAllSchemas();
		console.log(tables.length);
		for (let i = 0; i < tables.length; i++) {
			console.log(i);
			const table = tables[i][`Tables_in_${this.dbName}`];
			console.log(`[${chalk.blue('parsing:')}] ${chalk.gray(table)}`); // eslint-disable-line
			if (this.excludeTables.includes(table)) {
				console.log(`[${chalk.blue('excluding table:')}] ${chalk.green(table)}`);
			} else {
				const columns = await this.db.query(`show columns from ${table}`);
				const modelColumns = await columns[0].map(o => ({ name: o.Field, type: this.getType(o.Type) }));

				this.models.push({ name: table, columns: modelColumns });
			}
		}

		if (this.models.length > 0) {
			await this.generateFiles();
		}

		return true;
	}

	/**
	* Itera sobre as tabelas já processadas pela função parseDatabase e chama funções
	* dos generators para que cada generator crie seu arquivo.
	*
	* @param void
	* @return void
	*/
	async generateFiles() {
		try {
			for (let i = 0; i < this.models.length; i++) {
				const modelName = _.camelCase(this.models[i].name);
				await Promise.all([
					this.controllerGenerator.generateFile(modelName, this.models[i].columns, (done) => done),
					this.routeGenerator.generateFile(modelName, this.models[i].columns),
					this.modelGenerator.generateFile(modelName, this.models[i].columns, this.models[i].name),
					this.integrationTestGenerator.generateFile(modelName, this.models[i].columns)
				]);

				// await this.accessControlGenerator.addAccessControlInController(modelName);
			}

			return true;
		} catch (error) {
			console.log("OUTRO ERRO" + error);
			throw error;
		}
	}
}

export default MysqlParser;
