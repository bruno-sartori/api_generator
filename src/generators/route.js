import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/**
* Esta classe é responsável por criar os arquivos de rotas do projeto.
*
* @version v1.0.0, 21/05/2018 14:11
* @access public
*/
class RouteGenerator {

	/**
	* Construtor da classe
	*
	* @param {String} routesPath - Diretório das rotas
	*/
	constructor(routesPath) {
		this.routesPath = routesPath;
	}

	/**
	* Gera o arquivo de rota de acordo com os parâmetros.
	*
	* @param {String} modelName - nome do Model
	* @param {Array} modelValues - array contendo os nomes e tipos dos campos (ainda sem uso)
	*
	* @todo Criar a rota "/select"
	* @todo Substituir método getAll por list e adicionar parâmetro de página
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

		/**
		* Nome do controler que será importado.
		*
		* @type {String}
		*/
		const controllerName = `${capitalize(modelName)}Controller`;

		/**
		* Nome do arquivo do controler que será importado.
		*
		* @type {String}
		*/
		const controllerFileName = capitalize(modelName);


		/**
		* Nome da variável que receberá a instância do controller
		*
		* @type {String}
		*/
		const controllerVar = `${modelName.charAt(0).toLowerCase() + modelName.slice(1)}Controller`;

		/**
		* Rota principal deste controller, será concatenado com o resto da rota
		* em cada função do arquivo.
		*
		* @type {String}
		* @example routeName = "/operadoras-cartao" + "/list/:page" <- no método list
		*/
		const routeName = modelName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

		return new Promise((resolve, reject) => {
			const stream = fs.createWriteStream(path.join(this.routesPath, `${modelName}.js`));
			stream.once('open', () => {
				stream.write(`import ${controllerName} from '../controllers/${controllerFileName}';\n\n`);
				stream.write('export default (app) => {\n');
				stream.write(`\tconst ${controllerVar} = new ${controllerName}(app.datasource.models.${capitalize(modelName)});\n\n`);
				stream.write(`\tapp.route('/${routeName}*').all(app.auth.authenticate());\n\n`);
				stream.write(`\tapp.route('/${routeName}')\n`);
				stream.write('\t.get(async (req, res) => {\n');
				stream.write(`\t\tconst response = await ${controllerVar}.getAll();\n`);
				stream.write('\t\tres.status(response.statusCode).json(response.data);\n');
				stream.write('\t})\n');
				stream.write('\t.post(async (req, res) => {\n');
				stream.write(`\t\tconst response = await ${controllerVar}.create(req.body);\n`);
				stream.write('\t\tres.status(response.statusCode).json(response.data);\n');
				stream.write('\t});\n\n');
				stream.write(`\tapp.route('/${routeName}/:id')\n`);
				stream.write('\t.get(async (req, res) => {\n');
				stream.write(`\t\tconst response = await ${controllerVar}.getById(req.params);\n`);
				stream.write('\t\tres.status(response.statusCode).json(response.data);\n');
				stream.write('\t})\n');
				stream.write('\t.put(async (req, res) => {\n');
				stream.write(`\t\tconst response = await ${controllerVar}.update(req.body, req.params);\n`);
				stream.write('\t\tres.status(response.statusCode).json(response.data);\n');
				stream.write('\t})\n');
				stream.write('\t.delete(async (req, res) => {\n');
				stream.write(`\t\tconst response = await ${controllerVar}.delete(req.params);\n`);
				stream.write('\t\tres.status(response.statusCode).json(response.data);\n');
				stream.write('\t});\n');
				stream.write('};\n');
				stream.end();
			});

			stream.on('finish', () => { this.finishLog(modelName); resolve(); });
			stream.on('error', () => reject());
		});
	}

	finishLog(modelName) {
		return console.log(`[${chalk.green('generating:')}] ${chalk.gray(`src/routes/${modelName}.js`)}`); // eslint-disable-line
	}
}

export default RouteGenerator;
