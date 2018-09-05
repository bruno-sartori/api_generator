import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/**
* Esta classe é responsável por criar os arquivos de controllers do projeto.
*
* @version v1.0.0, 20/05/2018 10:50
* @access public
*/
class ControllerGenerator {

	/**
	* Construtor da classe
	*
	* @param {String} controllersPath - Diretório dos controllers
	*/
	constructor(controllersPath) {
		this.controllersPath = controllersPath;
	}

	/**
	* Gera o arquivo de controller de acordo com os parâmetros.
	*
	* @param {String} modelName - nome do Model
	* @param {Array} modelValues - array contendo os nomes e tipos dos campos (ainda sem uso)
	*
	* @todo Criar método "toSelect"
	* @todo Substituir método getAll por list com suporte ao DataTables do React (Usará o modelValues)
	*/
	async generateFile(modelName, modelValues) {
		/**
		* Altera a string para ter letra maiúscula na primeira letra.
		*
		* @type {Function}
		* @param {String} str - String para ser processada.
		* @return {String} String modificada.
		*/
		const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1));

		modelName = capitalize(modelName);

		return new Promise((resolve, reject) => {
			const stream = fs.createWriteStream(path.join(this.controllersPath, `${modelName}.js`));

			stream.once('open', () => {
				stream.write('import HttpStatus from \'http-status\';\n');
				stream.write('import { defaultResponse, ErrorResponse } from \'../util/responses\';\n\n');

				stream.write(`class ${modelName}Controller {\n`);
				stream.write(`\tconstructor(${modelName}) {\n`);
				stream.write(`\t\t this.${modelName} = ${modelName};\n`);
				stream.write('\t}\n\n');

				stream.write('\tgetAll() {\n');
				stream.write(`\t\treturn this.${modelName}.findAll({})\n`);
				stream.write('\t\t.then(result => defaultResponse({}, result))\n');
				stream.write('\t\t.catch(error => errorResponse(error.message));\n');
				stream.write('\t}\n\n');

				stream.write('\tgetById(params) {\n');
				stream.write(`\t\treturn this.${modelName}.findOne({\n`);
				stream.write('\t\t\twhere: params,\n');
				stream.write('\t\t})\n');
				stream.write('\t\t.then(result => defaultResponse({}, result))\n');
				stream.write('\t\t.catch(error => errorResponse(error.message));\n');
				stream.write('\t}\n\n');

				stream.write('\tcreate(data) {\n');
				stream.write(`\t\treturn this.${modelName}.create(data)\n`);
				stream.write('\t\t.then(result => defaultResponse({}, result, HttpStatus.CREATED))\n');
				stream.write('\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n');
				stream.write('\t}\n\n');

				stream.write('\tupdate(data, params) {\n');
				stream.write(`\t\treturn this.${modelName}.update(data, {\n`);
				stream.write('\t\t\twhere: params,\n');
				stream.write('\t\t})\n');
				stream.write('\t\t.then(result => defaultResponse({}, result))\n');
				stream.write('\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n');
				stream.write('\t}\n\n');

				stream.write('\tdelete(params) {\n');
				stream.write(`\t\treturn this.${modelName}.destroy({\n`);
				stream.write('\t\t\twhere: params,\n');
				stream.write('\t\t})\n');
				stream.write('\t\t.then(result => defaultResponse({}, result, HttpStatus.NO_CONTENT))\n');
				stream.write('\t\t.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));\n');
				stream.write('\t}\n\n');

				stream.write('}\n');
				stream.write(`export default ${modelName}Controller;\n`);
				stream.end();
			});

			stream.on('finish', () => { this.finishLog(modelName); resolve(); });
			stream.on('error', () => reject());
		});
	}

	finishLog(modelName) {
		return console.log(`[${chalk.green('generating:')}] ${chalk.gray(`src/controllers/${modelName}.js`)}`); // eslint-disable-line
	}
}

export default ControllerGenerator;
