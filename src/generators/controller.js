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
				stream.write('import { defaultResponse, errorResponse } from \'../util/responses\';\n\n');

				stream.write(`class ${modelName}Controller {\n`);
				stream.write(`\tconstructor(${modelName}) {\n`);
				stream.write(`\t\tthis.${modelName} = ${modelName};\n`);
				stream.write('\t}\n\n');

				stream.write('\tasync getAll() {\n');
				stream.write('\t\ttry {\n');
				stream.write(`\t\t\tconst response = await this.${modelName}.findAll({});\n`);
				stream.write('\t\t\treturn defaultResponse({}, response);\n');
				stream.write('\t\t} catch (error) {\n');
				stream.write('\t\t\treturn errorResponse(error.message);\n');
				stream.write('\t\t}\n');
				stream.write('\t}\n\n');

				stream.write('\tasync getById(params) {\n');
				stream.write('\t\ttry {\n');
				stream.write(`\t\t\tconst response = await this.${modelName}.findOne({ where: params });\n`);
				stream.write('\t\t\treturn defaultResponse({}, response);\n');
				stream.write('\t\t} catch (error) {\n');
				stream.write('\t\t\treturn errorResponse(error.message);\n');
				stream.write('\t\t}\n');
				stream.write('\t}\n\n');

				stream.write('\tasync create(data) {\n');
				stream.write('\t\ttry {\n');
				stream.write(`\t\t\tconst response = await this.${modelName}.create(data);\n`);
				stream.write('\t\t\treturn defaultResponse({}, response, HttpStatus.CREATED);\n');
				stream.write('\t\t} catch (error) {\n');
				stream.write('\t\t\treturn errorResponse(error.message);\n');
				stream.write('\t\t}\n');
				stream.write('\t}\n\n');

				stream.write('\tasync update(data, params) {\n');
				stream.write('\t\ttry {\n');
				stream.write(`\t\t\tconst response = await this.${modelName}.update(data, { where: params });\n`);
				stream.write('\t\t\treturn defaultResponse({}, response);\n');
				stream.write('\t\t} catch (error) {\n');
				stream.write('\t\t\treturn errorResponse(error.message);\n');
				stream.write('\t\t}\n');
				stream.write('\t}\n\n');

				stream.write('\tasync delete(params) {\n');
				stream.write('\t\ttry {\n');
				stream.write(`\t\t\tconst response = await this.${modelName}.destroy({ where: params });\n`);
				stream.write('\t\t\treturn defaultResponse({}, response);\n');
				stream.write('\t\t} catch (error) {\n');
				stream.write('\t\t\treturn errorResponse(error.message);\n');
				stream.write('\t\t}\n');
				stream.write('\t}\n\n');

				stream.write('}\n');
				stream.write(`export default ${modelName}Controller;\n`);
				stream.end();
			});

			stream.on('finish', () => { this.finishLog(modelName); resolve(); });
			stream.on('error', (error) => reject(error));
		});
	}

	finishLog(modelName) {
		return console.log(`[${chalk.green('generating:')}] ${chalk.gray(`src/controllers/${modelName}.js`)}`); // eslint-disable-line
	}
}

export default ControllerGenerator;
