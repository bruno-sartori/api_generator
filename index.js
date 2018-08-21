#! /usr/bin/env node

const Sequelize = require('sequelize');
const path = require('path');
const SequelizeParser = require('./src/parsers/sequelize').default;

if (typeof process.argv[2] === 'undefined' && parsers.filter(o => o === process.argv[3]).length === 0) {
	console.log('Usage: apigen [PROJECT_PATH] [DB_NAME] [DB_HOST] [DB_USER] [DB_PASSWORD]');
 	process.exit(1);
}


const rootPath = process.argv[2];

const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

const dbName = process.argv[3];
const dbHost = process.argv[4];
const dbUser = process.argv[5];
const dbPassword = process.argv[6];

generate();

async function generate() {
	try {
		const sequelize = new Sequelize(dbName, dbUser, dbPassword, {	host: dbHost, dialect: 'mysql' });
		const parser = new SequelizeParser(rootPath, modelPath, controllersPath, routesPath, testPath, sequelize, dbName);

		await parser.createFoldersAndHelperFiles();
		await parser.parseDatabase();

		return 'success';
	} catch (error) {
		console.log(error);
		return error;
	}
}
