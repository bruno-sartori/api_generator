import fs from 'fs';
import path from 'path';
import util from 'util';
import ControllerGenerator from '../generators/controller';
import RouteGenerator from '../generators/route';
import TestGenerator from '../generators/test';

class SequelizeParser {

	constructor(modelPath, controllersPath, routesPath, testsPath) {

		this.modelPath = modelPath;
		this.modelName = null;
		this.modelValues = [];
		this.controllerGenerator = new ControllerGenerator(controllersPath);
		this.routeGenerator = new RouteGenerator(routesPath);
		this.testGenerator = new TestGenerator(testsPath);
	}

	get getModelName() {
		return this.modelName;
	}

	get getModelValues() {
		return this.modelValues;
	}

	set setModelName(modelName) {
		this.modelName = modelName;
	}

	set setModelValues(modelValues) {
		this.modelValues = modelValues;
	}

	async createFoldersAndHelperFiles() {
		await this.testGenerator.createFoldersAndHelperFiles();
	}

	async parseModels() {
		const regexModelName = new RegExp(/sequelize\.define/, 'g');
		const regexValueName = new RegExp(/(?!.* DataType).+?(?=\:)/);
		const regexValueType = new RegExp(/(?<=type: DataType\.).*/);
		const regexEndOfValue = new RegExp(/}/);
		const regexNewBracket = new RegExp(/\{/);

			fs.readdirSync(this.modelPath).forEach((file) => {
				const lines = fs.readFileSync(path.join(this.modelPath, file)).toString().split('\n');

				let lockModel = false;
				let hasLockedModel = false;
				let lockValue = false;
				let lockProperty = false;

				for (const i in lines) {
					if (lockModel === false && hasLockedModel === true) {
						break;
					}

					if (lines[i].match(regexModelName)) {
						this.parseModelName(lines[i]);
						if (lines[i].match(regexNewBracket)) {
							lockModel = true;
							hasLockedModel = true;
						}
					} else if (lines[i].match(regexValueName)) {
						if (!lockValue) {
							this.parseModelValueName(lines[i], i);
						} else if (lines[i].match(regexNewBracket)) {
							lockProperty = true;
						}
					} else if (lines[i].match(regexValueType)) {
						this.parseModelValueType(lines[i], i);
						lockValue = true;
					} else if (lines[i].match(regexEndOfValue)) {
						if (lockProperty) {
							lockProperty = false;
						} else if (lockValue) {
							lockValue = false;
						} else {
							lockModel = false;
						}
					}
				}

				this.generateFiles(this.getModelName, this.getModelValues);

				this.setModelName = null;
				this.setModelValues = [];

			});
		}

		async generateFiles(modelName, modelValues) {
			await Promise.all([
				this.controllerGenerator.generateFile(modelName, modelValues),
				this.routeGenerator.generateFile(modelName, modelValues),
				this.testGenerator.generate(modelName, modelValues)
			]);
		}

		parseModelName(line) {
			this.setModelName = line.match(/('(.*?)')|("(.*?)")/)[0].replace(new RegExp(/\'/, 'g'), '').replace(new RegExp(/\t/, 'g'), '');
		}

		parseModelValueName(line, i) {
			const valueName = line.match(/.+?(?=\:)/)[0].replace(new RegExp(/\t/, 'g'), '');

			if (typeof this.modelValues[i] === 'undefined') {
				this.modelValues[i] = {};
			}

			this.modelValues[i].name = valueName;
		}

		parseModelValueType(line, i) {
			const valueType = line.match(/(?<=type: DataType\.).*/)[0].replace(new RegExp(/\t/, 'g'), '').replace(',', '');
			this.modelValues[i - 1].type = valueType;
		}
}

export default SequelizeParser;
