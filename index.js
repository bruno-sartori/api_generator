#! /usr/bin/env node

const Sequelize = require('sequelize');

const SequelizeParser = require('./src/parsers/sequelize').default;
const path = require('path');

const parsers = ['sequelize'];

const rootPath = process.argv[2];

const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

const parserStyle = process.argv[3];
const dbName = process.argv[4];
const dbHost = process.argv[5];
const dbUser = process.argv[6];
const dbPassword = process.argv[7];

if (process.argv[2].constructor === String && parsers.filter(o => o === process.argv[3]).length === 0) {
	console.log('Usage: apigen [PROJECT_PATH] [PARSER STYLE (sequelize)] [DB_NAME] [DB_HOST] [DB_USER] [DB_PASSWORD]');
 	process.exit(1);
} else {
	generate();
}


async function generate() {
	let parser;

	switch (parserStyle) {
		case 'sequelize':
			const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	  		host: dbHost,
	  		dialect: 'mysql',
			});

			parser = new SequelizeParser(modelPath, controllersPath, routesPath, testPath, sequelize, dbName);
			break;
		default:
			console.error('A parser style must be provided.');
			process.exit(1);
	}

	//await parser.createFoldersAndHelperFiles();
	//await parser.parseModels();
	await parser.parseDatabase();
	
}
