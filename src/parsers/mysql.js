import path from 'path';
import shell from 'shelljs';
import _ from 'lodash';
import ControllerGenerator from '../generators/controller';
import RouteGenerator from '../generators/route';
import ModelGenerator from '../generators/model';
import TestGenerator from '../generators/test';

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
	*
	* @todo Trazer todos os paths em um unico objeto
	* @todo criar a conexão com o banco de dados dentro desta classe (Cada parser terá sua própria conexão)
	*/
	constructor(rootPath, modelPath, controllersPath, routesPath, testsPath, sequelize, dbName) {
		this.db = sequelize;
		this.dbName = dbName;
		this.models = [];
		this.rootPath = rootPath;
		this.modelPath = modelPath;

		this.controllerGenerator = new ControllerGenerator(controllersPath);
		this.routeGenerator = new RouteGenerator(routesPath);
		this.testGenerator = new TestGenerator(testsPath);
		this.modelGenerator = new ModelGenerator(modelPath);
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
			await shell.cp('-r', path.join(__dirname, '../files/*'), this.rootPath);
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
			decimal: 'FLOAT'
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

		for (let i = 0; i < tables.length; i++) {
			const table = tables[i][`Tables_in_${this.dbName}`];
			const columns = await this.db.query(`show columns from ${table}`);

			const modelColumns = await columns[0].map(o => ({ name: o.Field, type: this.getType(o.Type) }));

			this.models.push({ name: table, columns: modelColumns });
		}

		await this.generateFiles();
	}

	/**
	* Itera sobre as tabelas já processadas pela função parseDatabase e chama funções
	* dos generators para que cada generator crie seu arquivo.
	*
	* @param void
	* @return void
	*/
	async generateFiles() {
		for (let i = 0; i < this.models.length; i++) {
			const modelName = _.camelCase(this.models[i].name);
			await Promise.all([
				this.controllerGenerator.generateFile(modelName, this.models[i].columns),
				this.routeGenerator.generateFile(modelName, this.models[i].columns),
				this.modelGenerator.generateFile(modelName, this.models[i].columns),
				this.testGenerator.generate(modelName, this.models[i].columns)
			]);
		}
	}
}

export default MysqlParser;
