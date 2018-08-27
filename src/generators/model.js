import fs from 'fs';
import path from 'path';

/**
* Esta classe é responsável por criar os arquivos de models do projeto.
*
* @version v1.0.0, 20/05/2018 11:50
* @access public
*/
class ModelGenerator {

	/**
	* Construtor da classe
	*
	* @param {String} modelsPath - Diretório dos models
	*/
	constructor(modelsPath) {
		this.modelsPath = modelsPath;
	}

	/**
	* Helper para escrever os fields dos models.
	*
	* @param {Object} stream - instância atual do fs.createWriteStream
	* @param {Object} value - objeto do campo atual
	* @param {String} value.name - nome do campo atual
	* @param {String} value.type - tipo do campo atual
	*
	* @return void
	*/
	writeValue(stream, value, last = false) {
		if (value.name === 'id') {
			stream.write('\t\t\tid: {\n');
			stream.write('\t\t\t\ttype: DataType.INTEGER,\n');
			stream.write('\t\t\t\tprimaryKey: true,\n');
			stream.write('\t\t\t\tautoIncrement: true\n');
			stream.write('\t\t\t},\n');
			return;
		}

		stream.write(`\t\t\t${value.name}: {\n`);
		stream.write(`\t\t\t\ttype: DataType.${value.type},\n`);
		stream.write('\t\t\t\tallowNull: false,\n');
		stream.write('\t\t\t\tvalidate: {\n');
		stream.write('\t\t\t\tnotEmpty: true\n');

		if (last) {
			stream.write('\t\t\t}\n');
		} else {
			stream.write('\t\t\t},\n');
		}
		return;
	}

	/**
	* Gera o arquivo de model de acordo com os parâmetros.
	*
	* @param {String} modelName - nome do Model.
	* @param {Array} modelValues - array contendo os nomes e tipos dos campos.
	*/
	async generateFile(modelName, modelValues) {
		console.log(`Generating Model: ${modelName}`);

		/**
		* Altera a string para ter letra maiúscula na primeira letra.
		*
		* @type {Function}
		* @param {String} str - String para ser processada.
		* @return {String} String modificada.
		*/
		const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1));

		modelName = capitalize(modelName);

		const stream = fs.createWriteStream(path.join(this.modelsPath, `${modelName}.js`));

		stream.once('open', (fd) => {
		  stream.write("export default (sequelize, DataType) => {\n");
		  stream.write(`\tconst ${modelName} = sequelize.define('${modelName}',\n`);
			stream.write('\t\t{\n');

			for(let i = 0; i < modelValues.length; i++) {
				this.writeValue(stream, modelValues[i], (i === modelValues.length -1));
			}

			stream.write('\t\t}\n');
			stream.write('\t);\n');
			stream.write(`\treturn ${modelName};\n`);
			stream.write('};\n');
			stream.end();
		});
	}
}

export default ModelGenerator;
