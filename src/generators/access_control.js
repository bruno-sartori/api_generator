import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import capitalize from '../util/capitalize';

/**
* Esta classe é responsável por criar os arquivos de controllers do projeto.
*
* @version v1.0.0, 20/05/2018 10:50
* @access public
*/
class AccessControlGenerator {

	/**
	* Construtor da classe
	*
	* @param {String} controllersPath - Diretório dos controllers
	*/
	constructor(rootPath, routesPath) {
		this.rootPath = rootPath;
		this.routesPath = routesPath;
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
	async addAccessControlInController(modelName) {
		const data = fs.readFileSync(path.join(this.routesPath, `${modelName}.js`)).toString().split('\n');

		data.splice(1, 0, 'import AccessController from \'../controllers/acl\';');
		data.splice(5, 0, 'let acl;');

		for (let i = 0; i < data.length; i++) {
			if (data[i].match(/app\.route\(\'.*\*/)) {
				data.splice(i + 4, 0, 'acl = new AccessController(app.datasource.db);');
			} else if(data[i].match()) {

			}


		}
	}

	finishLog(modelName) {
		return console.log(`[${chalk.green('generating:')}] ${chalk.gray(`src/controllers/${modelName}.js`)}`); // eslint-disable-line
	}
}

export default AccessControlGenerator;
