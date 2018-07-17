import fs from 'fs';
import path from 'path';
import util from 'util';
import shell from 'shelljs';

class TestGenerator {
	constructor(testsPath) {
		this.testsPath = testsPath;
	}

	async createFoldersAndHelperFiles() {
			await shell.rm('-rf', this.testsPath);
			setTimeout(null, 200);
			await fs.mkdirSync(this.testsPath);
			await fs.mkdirSync(path.join(this.testsPath, '/integration'));
			await fs.mkdirSync(path.join(this.testsPath, '/integration/routes'));
			await fs.mkdirSync(path.join(this.testsPath, '/unit'));
			await fs.mkdirSync(path.join(this.testsPath, '/unit/controllers'));
			await fs.mkdirSync(path.join(this.testsPath, '/contract'));
			await fs.mkdirSync(path.join(this.testsPath, '/contract/contracts'));

			await Promise.all([this.createIntegrationHelpers(), this.createUnitHelpers(), this.createContractHelpers()]);
	}

	async createIntegrationHelpers() {
		let stream = fs.createWriteStream(path.join(this.testsPath, '/integration/helpers.js'));
		stream.once('open', (fd) => {
			stream.write(`import supertest from 'supertest';\n`);
			stream.write(`import chai from 'chai';\n`);
			stream.write(`import app from '../../src/app.js';\n\n`);
			stream.write(`global.app = app;\n`);
			stream.write(`global.request = supertest(app);\n`);
			stream.write(`global.expect = chai.expect;\n`);
			stream.end();
		});

		stream = fs.createWriteStream(path.join(this.testsPath, '/integration/mocha.opts'));
		stream.once('open', (fd) => {
			stream.write(`--require test/integration/helpers.js\n`);
			stream.write(`--reporter spec\n`);
			stream.write(`--compilers js:babel-core/register\n`);
			stream.write(`--slow 5000\n`);
			stream.end();
		});
	}

	async createUnitHelpers() {
		let stream = fs.createWriteStream(path.join(this.testsPath, '/unit/helpers.js'));
		stream.once('open', (fd) => {
			stream.write(`import chai from 'chai';\n`);
			stream.write(`import td from 'testdouble';\n\n`);
			stream.write(`global.expect = chai.expect;\n`);
			stream.write(`global.td = td;\n`);
			stream.end();
		});

		stream = fs.createWriteStream(path.join(this.testsPath, '/unit/mocha.opts'));
		stream.once('open', (fd) => {
			stream.write(`--require test/unit/helpers.js\n`);
			stream.write(`--reporter spec\n`);
			stream.write(`--compilers js:babel-core/register\n`);
			stream.write(`--slow 5000\n`);
			stream.end();
		});
	}

	async createContractHelpers() {
		let stream = fs.createWriteStream(path.join(this.testsPath, '/contract/helpers.js'));
		stream.once('open', (fd) => {
			stream.write(`import supertest from 'supertest';\n`);
			stream.write(`import chai from 'chai';\n`);
			stream.write(`import Joi from 'joi';\n`);
			stream.write(`import joiAssert from 'joi-assert';\n`);
			stream.write(`import app from '../../src/app.js';\n\n`);
			stream.write(`global.app = app;\n`);
			stream.write(`global.request = supertest(app);\n`);
			stream.write(`global.expect = chai.expect;\n`);
			stream.write(`global.Joi = joi;\n`);
			stream.write(`global.joiAssert = joiAssert;\n`);
			stream.end();
		});

		stream = fs.createWriteStream(path.join(this.testsPath, '/contract/mocha.opts'));
		stream.once('open', (fd) => {
			stream.write(`--require test/contract/helpers.js\n`);
			stream.write(`--reporter spec\n`);
			stream.write(`--compilers js:babel-core/register\n`);
			stream.write(`--slow 5000\n`);
			stream.end();
		});
	}


	async generate(modelName, modelValues) {
		await this.createFoldersAndHelperFiles();
		await Promise.all([this.generateIntegration(modelName, modelValues)]);//, this.generateUnit(), this.generateContract()]);
	}

	createObjFromModel(model, id = false) {
		const getValue = (type) => {
			switch (type) {
				case 'INTEGER':
					return Math.floor(Math.random() * 999) + 1;
					break;
				case 'STRING':
					return Math.random().toString(36).substring(7);
				default:
				console.log(type);
					return Math.random().toString(36).substring(7);
					break;
			}
		}

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

	createExpects(model, arr, tabs, equalName) {
		let response = '';

		model = model.filter(o => typeof o !== 'undefined');

		for (const o of model) {
			response += `${tabs}expect(res.body${ arr ? '[0]' : '' }.${o.name}).to.eql(${equalName}.${o.name});\n`;
		}
		return response;
	}

	camelize(str) {
  	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => index == 0 ? letter.toLowerCase() : letter.toUpperCase()).replace(/\s+/g, '');
	}

	async generateIntegration(modelName, modelValues) {
		console.log('generating integration test file: ', modelName);

		const controllerName = `${modelName}Controller`;
		const controllerVar = `${modelName.charAt(0).toLowerCase() + modelName.slice(1)}Controller`;
		const routeName = modelName.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
		const objVar = this.camelize(modelName).substring(0, this.camelize(modelName).length -1);

		const stream = fs.createWriteStream(path.join(this.testsPath, `/integration/routes/${modelName}.js`));
		stream.once('open', (fd) => {
			stream.write(`import HttpStatus from 'http-status';\n`);
			stream.write(`import jwt from 'jwt-simple';\n\n`);
			stream.write(`describe('Routes: ${modelName}', () => {\n`);
			stream.write(`\tconst ${modelName} = app.datasource.models.${modelName};\n`);
			stream.write(`\tconst Users = app.datasource.models.Users;\n`);
			stream.write(`\tconst jwtSecret = app.config.jwtSecret;\n`);
			stream.write(`\tconst default${modelName} = ${this.createObjFromModel(modelValues)};\n\n`);
			stream.write(`\tlet token;\n\n`);
			stream.write(`\tbeforeEach(done => {\n`);
			stream.write(`\t\tUser\n`);
			stream.write(`\t\t.destroy({ where: {} })\n`);
			stream.write(`\t\t.then(() => User.create({\n`);
			stream.write(`\t\tname: 'Bruno Sartori',\n`);
			stream.write(`\t\temail: 'brunosartori.webmaster@gmail.com',\n`);
			stream.write(`\t\tpassword: 'bukassas9',\n`);
			stream.write(`\t\t}))\n`);
			stream.write(`\t\t.then(user => {\n`);
			stream.write(`\t\t\t${modelName}\n`);
			stream.write(`\t\t\t.destroy({ where: {} })\n`);
			stream.write(`\t\t\t.then(() => ${modelName}.create(default${modelName}))\n`);
			stream.write(`\t\t\t.then(() => {\n`);
			stream.write(`\t\t\t\ttoken = jwt.encode({ id: user.id }, jwtSecret);\n`);
			stream.write(`\t\t\t\tdone();\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tdescribe('GET /${routeName}', () => {\n`);
			stream.write(`\t\tit('should return a list of ${routeName}', done => {\n`);
			stream.write(`\t\t\trequest\n`);
			stream.write(`\t\t\t.get('/${routeName}')\n`);
			stream.write(`\t\t\t.set('Authorization', \`JWT \${token}\`)\n`);
			stream.write(`\t\t\t.end((err, res) => {\n`);
			stream.write(this.createExpects(modelValues, true, '\t\t\t\t', `default${modelName}`));
			stream.write(`\t\t\t\tdone(err);\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tdescribe('GET /${routeName}/{id}', () => {\n`);
			stream.write(`\t\tit('should return a ${modelName} by id', done => {\n`);
			stream.write(`\t\t\trequest\n`);
			stream.write(`\t\t\t.get('/${routeName}/1')\n`);
			stream.write(`\t\t\t.set('Authorization', \`JWT \${token}\`)\n`);
			stream.write(`\t\t\t.end((err, res) => {\n`);
			stream.write(this.createExpects(modelValues, false, '\t\t\t\t', `default${modelName}`));
			stream.write(`\t\t\t\tdone(err);\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tdescribe('POST /${routeName}', () => {\n`);
			stream.write(`\t\tit('should post a ${modelName}', done => {\n`);
			stream.write(`\t\t\tconst ${objVar} = ${this.createObjFromModel(modelValues, null)};\n\n`);
			stream.write(`\t\t\trequest\n`);
			stream.write(`\t\t\t.post('/${routeName}')\n`);
			stream.write(`\t\t\t.set('Authorization', \`JWT \${token}\`)\n`);
			stream.write(`\t\t\t.send(${objVar})\n`);
			stream.write(`\t\t\t.end((err, res) => {\n`);
			stream.write(this.createExpects(modelValues, false, '\t\t\t\t', this.camelize(modelName)));
			stream.write(`\t\t\t\tdone(err);\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tdescribe('PUT /${routeName}/{id}', () => {\n`);
			stream.write(`\t\tit('should update a ${this.camelize(modelName)}', done => {\n`);
			stream.write(`\t\t\tconst ${objVar} = ${this.createObjFromModel(modelValues, '1')};\n\n`);
			stream.write(`\t\t\trequest\n`);
			stream.write(`\t\t\t.put('/${routeName}/1')\n`);
			stream.write(`\t\t\t.set('Authorization', \`JWT \${token}\`)\n`);
			stream.write(`\t\t\t.send(${objVar})\n`);
			stream.write(`\t\t\t.end((err, res) => {\n`);
			stream.write(`\t\t\texpect(res.body).to.eql([1]);\n`);
			stream.write(`\t\t\tdone(err);\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tdescribe('DELETE /${routeName}/{id}', () => {\n`);
			stream.write(`\t\tit('should delete a ${this.camelize(modelName)}', done => {\n`);
			stream.write(`\t\t\trequest\n`);
			stream.write(`\t\t\t.delete('/${routeName}/1')\n`);
			stream.write(`\t\t\t.set('Authorization', \`JWT \${token}\`)\n`);
			stream.write(`\t\t\t.end((err, res) => {\n`);
			stream.write(`\t\t\texpect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);\n`);
			stream.write(`\t\t\tdone(err);\n`);
			stream.write(`\t\t\t});\n`);
			stream.write(`\t\t});\n`);
			stream.write(`\t});\n`);
			stream.write(`});\n`);
			stream.end();
		});
	}
}

export default TestGenerator;
