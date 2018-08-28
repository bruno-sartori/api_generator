import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/**
* Esta classe é responsável por criar os arquivos de testes de integração do projeto.
*
* @version v1.0.0, 19/06/2018 14:37
* @access public
*
* @todo Originalmente este arquivo criaria os 3 testes: Integração, Unidade e Contrato.
* Atualizar o arquivo para criar somente o teste de integração.
*/
class TestGenerator {

	/**
	* Construtor da classe
	*
	* @param {String} testsPath - Diretório dos testes
	*/
	constructor(testsPath) {
		this.testsPath = testsPath;
	}

	/**
	* Chama funções para criar testes de integração, unidade e contrato
	*
	* @param {String} modelName - nome do model atual.
	* @param {Array} modelValues - array com os nomes e tipos dos campos do model.
	*/
	async generate(modelName, modelValues) {
		await Promise.all([this.generateIntegration(modelName, modelValues)]);// , this.generateUnit(), this.generateContract()]);
	}

	/**
	* Cria valores aleatórios para os testes
	*
	* @todo alterar para utilizar uma dependência de criação de valores
	*/
	createObjFromModel(model, id = false) {
		const getValue = (type) => {
			switch (type) {
				case 'INTEGER':
					return Math.floor(Math.random() * 999) + 1;
				case 'STRING':
					return Math.random().toString(36).substring(7);
				default:
					return Math.random().toString(36).substring(7);
			}
		};

		let response = model.reduce((o, i) => {
			if (i.name === 'id') {
				if (id === null) {
					delete o[i.name];
				} else if (id !== false) {
					o[i.name] = id;
				}
			} else {
				o[i.name] = getValue(i.type);
			}
			return o;
		}, {});

		response = JSON.stringify(response)
		.replace(new RegExp('{', 'g'), '{\n\t\t')
		.replace(new RegExp('}', 'g'), '\n\t}')
		.replace(new RegExp(',', 'g'), ',\n\t\t');

		return response;
	}

	/**
	* Cria a sessão de expects dos testes.
	*
	* @param {Object} model - campos do model atual.
	* @param {Boolean} arr - sinaliza se os expects devem esperar um array de retorno.
	* @param {String} tabs - string com numero específico de "/t" para identação dos expects.
	* @param {String} equalName - variável no qual o valor recebido será comparado.
	* @return {String} String com a linha do expect
	*/
	createExpects(model, arr, tabs, equalName) {
		let response = '';

		model = model.filter(o => typeof o !== 'undefined');

		for (const o of model) {
			response += `${tabs}expect(res.body${arr ? '[0]' : ''}.${o.name}).to.eql(${equalName}.${o.name});\n`;
		}

		return response;
	}

	/**
	* Transforma uma string em camelCase (modificou o == por ===, testar)
	*
	* @param {String} str - String que será modifiada.
	* @return String modificada.
	*/
	camelize(str) {
		return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index === 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, '');
	}

	/**
	* Gera o arquivo de teste de acordo com os parâmetros.
	*
	* @param {String} modelName - nome do Model
	* @param {Array} modelValues - array contendo os nomes e tipos dos campos (ainda sem uso)
	*
	* @todo Alterar o nome do método para generateFile
	*/
	async generateIntegration(modelName, modelValues) {
		/**
		* Rota principal deste teste, será concatenado com o resto da rota
		* em cada função do arquivo.
		*
		* @type {String}
		* @example routeName = "/operadoras-cartao" + "/list/:page" <- no método list
		*/
		const routeName = modelName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

		/**
		* Variável que terá um objeto deste model
		*
		* @type {String}
		*/
		const objVar = this.camelize(modelName).substring(0, this.camelize(modelName).length - 1);

		return new Promise((resolve, reject) => {
			const stream = fs.createWriteStream(path.join(this.testsPath, `/integration/routes/${modelName}.js`));
			stream.once('open', () => {
				stream.write('import HttpStatus from \'http-status\';\n');
				stream.write('import jwt from \'jwt-simple\';\n\n');
				stream.write(`describe('Routes: ${modelName}', () => {\n`);
				stream.write(`\tconst ${modelName} = app.datasource.models.${modelName};\n`);
				stream.write('\tconst Users = app.datasource.models.Users;\n');
				stream.write('\tconst jwtSecret = app.config.jwtSecret;\n');
				stream.write(`\tconst default${modelName} = ${this.createObjFromModel(modelValues)};\n\n`);
				stream.write('\tlet token;\n\n');
				stream.write('\tbeforeEach(done => {\n');
				stream.write('\t\tUser\n');
				stream.write('\t\t.destroy({ where: {} })\n');
				stream.write('\t\t.then(() => User.create({\n');
				stream.write('\t\tname: \'Bruno Sartori\',\n');
				stream.write('\t\temail: \'brunosartori.webmaster@gmail.com\',\n');
				stream.write('\t\tpassword: \'bukassas9\',\n');
				stream.write('\t\t}))\n');
				stream.write('\t\t.then(user => {\n');
				stream.write(`\t\t\t${modelName}\n`);
				stream.write('\t\t\t.destroy({ where: {} })\n');
				stream.write(`\t\t\t.then(() => ${modelName}.create(default${modelName}))\n`);
				stream.write('\t\t\t.then(() => {\n');
				stream.write('\t\t\t\ttoken = jwt.encode({ id: user.id }, jwtSecret);\n');
				stream.write('\t\t\t\tdone();\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t});\n\n');
				stream.write(`\tdescribe('GET /${routeName}', () => {\n`);
				stream.write(`\t\tit('should return a list of ${routeName}', done => {\n`);
				stream.write('\t\t\trequest\n');
				stream.write(`\t\t\t.get('/${routeName}')\n`);
				stream.write('\t\t\t.set(\'Authorization\', \`JWT \${token}\`)\n');
				stream.write('\t\t\t.end((err, res) => {\n');
				stream.write(this.createExpects(modelValues, true, '\t\t\t\t', `default${modelName}`));
				stream.write('\t\t\t\tdone(err);\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t});\n\n');
				stream.write(`\tdescribe('GET /${routeName}/{id}', () => {\n`);
				stream.write(`\t\tit('should return a ${modelName} by id', done => {\n`);
				stream.write('\t\t\trequest\n');
				stream.write(`\t\t\t.get('/${routeName}/1')\n`);
				stream.write('\t\t\t.set(\'Authorization\', \`JWT \${token}\`)\n');
				stream.write('\t\t\t.end((err, res) => {\n');
				stream.write(this.createExpects(modelValues, false, '\t\t\t\t', `default${modelName}`));
				stream.write('\t\t\t\tdone(err);\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t});\n\n');
				stream.write(`\tdescribe('POST /${routeName}', () => {\n`);
				stream.write(`\t\tit('should post a ${modelName}', done => {\n`);
				stream.write(`\t\t\tconst ${objVar} = ${this.createObjFromModel(modelValues, null)};\n\n`);
				stream.write('\t\t\trequest\n');
				stream.write(`\t\t\t.post('/${routeName}')\n`);
				stream.write('\t\t\t.set(\'Authorization\', `JWT \${token}`)\n');
				stream.write(`\t\t\t.send(${objVar})\n`);
				stream.write('\t\t\t.end((err, res) => {\n');
				stream.write(this.createExpects(modelValues, false, '\t\t\t\t', this.camelize(modelName)));
				stream.write('\t\t\t\tdone(err);\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t});\n\n');
				stream.write(`\tdescribe('PUT /${routeName}/{id}', () => {\n`);
				stream.write(`\t\tit('should update a ${this.camelize(modelName)}', done => {\n`);
				stream.write(`\t\t\tconst ${objVar} = ${this.createObjFromModel(modelValues, '1')};\n\n`);
				stream.write('\t\t\trequest\n');
				stream.write(`\t\t\t.put('/${routeName}/1')\n`);
				stream.write('\t\t\t.set(\'Authorization\', `JWT \${token}`)\n');
				stream.write(`\t\t\t.send(${objVar})\n`);
				stream.write('\t\t\t.end((err, res) => {\n');
				stream.write('\t\t\texpect(res.body).to.eql([1]);\n');
				stream.write('\t\t\tdone(err);\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t});\n\n');
				stream.write(`\tdescribe('DELETE /${routeName}/{id}', () => {\n`);
				stream.write(`\t\tit('should delete a ${this.camelize(modelName)}', done => {\n`);
				stream.write('\t\t\trequest\n');
				stream.write(`\t\t\t.delete('/${routeName}/1')\n`);
				stream.write('\t\t\t.set(\'Authorization\', `JWT \${token}`)\n');
				stream.write('\t\t\texpect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);\n');
				stream.write('\t\t\t.end((err, res) => {\n');
				stream.write('\t\t\t});\n');
				stream.write('\t\t});\n');
				stream.write('\t\t\tdone(err);\n');
				stream.write('\t});\n');
				stream.write('});\n');
				stream.end();
			});

			stream.on('finish', () => { this.finishLog(modelName); resolve(); });
			stream.on('error', () => reject());
		});
	}

	finishLog(modelName) {
		return console.log(`[${chalk.blue('integrations tests')}] ${chalk.gray(`generated on test/integration/routes/${modelName}.js`)}`); // eslint-disable-line
	}
}

export default TestGenerator;
