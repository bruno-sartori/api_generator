import fs from 'fs';
import path from 'path';
import util from 'util';
import Generator from './generator';

class ControllerGenerator extends Generator {

	constructor(modelPath, controllersPath) {
		super(modelPath);
		this.controllersPath = controllersPath;
	}

	async generate() {
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

				this.generateFile(this.getModelName, this.getModelValues);

				this.setModelName = null;
				this.setModelValues = [];

			});
		}

		async generateFile(modelName, modelValues) {
			console.log('---------------------------------------------------------------------------');
			console.log(modelName);
			console.log(modelValues);

			const stream = fs.createWriteStream(path.join(this.controllersPath, `${modelName}.js`));
			stream.once('open', (fd) => {
			  stream.write("import HttpStatus from 'http-status';\n");
			  stream.write("import { defaultResponse, ErrorResponse } from '../util/responses';\n\n");

				stream.write(`class ${modelName}Controller {\n`);
				stream.write(`\tconstructor(${modelName}) {\n`);
				stream.write(`\t\t this.${modelName} = ${modelName};\n`);
				stream.write('\t}\n\n');

				stream.write('\tgetAll() {\n');
				stream.write(`\t\treturn this.${modelName}.findAll({})\n`);
				stream.write(`\t\t.then(result => defaultResponse(result))\n`);
				stream.write('\t\t.catch(error => errorResponse(error.message));\n');
				stream.write('\t}\n\n');

				stream.write(`\tgetById(params) {\n`);
				stream.write(`\t\treturn this.${modelName}.findOne({\n`);
				stream.write(`\t\t\twhere: params,\n`);
				stream.write(`\t\t})\n`);
				stream.write(`\t\t.then(result => defaultResponse(result))\n`);
				stream.write(`\t\t.catch(error => errorResponse(error.message));\n`);
				stream.write(`\t}\n\n`);

				stream.write(`\tcreate(data) {\n`);
				stream.write(`\t\treturn this.${modelName}.create(data)\n`);
				stream.write(`\t\t.then(result => defaultResponse(result, HttpStatus.CREATED))\n`);
				stream.write(`\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n`);
				stream.write(`\t}\n\n`);

				stream.write(`\tupdate(data, params) {\n`);
				stream.write(`\t\treturn this.${modelName}.update(data, {\n`);
				stream.write(`\t\t\twhere: params,\n`);
				stream.write(`\t\t})\n`);
				stream.write(`\t\t.then(result => defaultResponse(result))\n`);
				stream.write(`\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n`);
				stream.write(`\t}\n\n`);

				stream.write(`\tdelete(params) {\n`);
				stream.write(`\t\treturn this.${modelName}.destroy({\n`);
				stream.write(`\t\t\twhere: params,\n`);
				stream.write(`\t\t})\n`);
				stream.write(`\t\t.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))\n`);
				stream.write(`\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n`);
				stream.write(`\t}\n\n`);

				stream.write('}\n');
				stream.write(`export default ${modelName}Controller;\n`);

				stream.end();
			});


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
			const valueType = line.match(/(?<=type: DataType\.).*/)[0].replace(new RegExp(/\t/, 'g'), '');
			console.log('ValueType: ', valueType);
			this.modelValues[i - 1].type = valueType;
		}

	}

	export default ControllerGenerator;
