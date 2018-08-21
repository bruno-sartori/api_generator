import fs from 'fs';
import path from 'path';
import util from 'util';
import shell from 'shelljs';
import _ from 'lodash';
import ControllerGenerator from '../generators/controller';
import RouteGenerator from '../generators/route';
import TestGenerator from '../generators/test';

class SequelizeParser {

	constructor(rootPath, modelPath, controllersPath, routesPath, testsPath, sequelize, dbName) {
		this.db = sequelize;
		this.dbName = dbName;
		this.models = [];

		this.rootPath = rootPath;

		this.modelPath = modelPath;
		this.controllerGenerator = new ControllerGenerator(controllersPath);
		this.routeGenerator = new RouteGenerator(routesPath);
		this.testGenerator = new TestGenerator(testsPath);
	}

	async createFoldersAndHelperFiles() {
		try {
			await shell.rm('-rf', `${this.rootPath}/*`);
			await shell.cp('-r', path.join(__dirname, '../files/*'), this.rootPath);
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}

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

	async parseDatabase() {
		const tables = await this.db.getQueryInterface().showAllSchemas();

		for (let i = 0; i < tables.length; i ++) {
			const table = tables[i][`Tables_in_${this.dbName}`];
			const columns = await this.db.query(`show columns from ${table}`);

			const modelColumns = await columns[0].map(o => ({ name: o.Field, type: this.getType(o.Type) }));

			this.models.push({ name: table, columns: modelColumns });
		}

		await this.generateFiles();
	}

	async generateFiles() {
		for (let i = 0; i < this.models.length; i ++) {
			const modelName = _.camelCase(this.models[i].name);
 			await Promise.all([
				this.controllerGenerator.generateFile(modelName, this.models[i].columns),
				this.routeGenerator.generateFile(modelName, this.models[i].columns),
				this.testGenerator.generate(modelName, this.models[i].columns)
			]);
		}
	}
}

export default SequelizeParser;
