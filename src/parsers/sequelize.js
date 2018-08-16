import fs from 'fs';
import path from 'path';
import util from 'util';
import ControllerGenerator from '../generators/controller';
import RouteGenerator from '../generators/route';
import TestGenerator from '../generators/test';

class SequelizeParser {

	constructor(modelPath, controllersPath, routesPath, testsPath, sequelize, dbName) {
		this.db = sequelize;
		this.dbName = dbName;
		this.models = [];

		this.modelPath = modelPath;
		this.controllerGenerator = new ControllerGenerator(controllersPath);
		this.routeGenerator = new RouteGenerator(routesPath);
		this.testGenerator = new TestGenerator(testsPath);
	}

	async createFoldersAndHelperFiles() {
		await this.testGenerator.createFoldersAndHelperFiles();
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

			const modelColumns = columns[0].map(o => ({ name: o.Field, type: this.getType(o.Type) }));

			this.models.push({ name: table, columns: modelColumns });
		}

		await this.generateFiles();
	}

	async generateFiles() {
		for (let i = 0; i < this.models.length; i ++) {
			await Promise.all([
				this.controllerGenerator.generateFile(this.models[i].name, this.models[i].columns),
				this.routeGenerator.generateFile(this.models[i].name, this.models[i].columns),
				this.testGenerator.generate(this.models[i].name, this.models[i].columns)
			]);
		}
	}
}

export default SequelizeParser;
