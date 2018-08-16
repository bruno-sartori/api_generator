import fs from 'fs';
import path from 'path';
import util from 'util';

class ControllerGenerator {
	constructor(controllersPath) {
		this.controllersPath = controllersPath;
	}

	async generateFile(modelName, modelValues) {
		console.log(`Generating Controller: ${modelName}`);
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
}

export default ControllerGenerator;
