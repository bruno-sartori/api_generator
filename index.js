#! /usr/bin/env node

const SequelizeParser = require('./src/parsers/sequelize').default;
const path = require('path');

const parsers = ['sequelize'];

const rootPath = process.argv[2];

const modelPath = path.join(rootPath, '/src/models/');
const controllersPath = path.join(rootPath, '/src/controllers/');
const routesPath = path.join(rootPath, '/src/routes/');
const testPath = path.join(rootPath, '/test/');

const parserStyle = process.argv[3];

if (process.argv[2].constructor === String && parsers.filter(o => o === process.argv[3]).length === 0) {
	console.log('Usage: apigen [PROJECT_PATH] [PARSER STYLE (sequelize)]');
 	process.exit(1);
} else {
	generate();
}


async function generate() {
	let parser;

	switch (parserStyle) {
		case 'sequelize':
			parser = new SequelizeParser(modelPath, controllersPath, routesPath, testPath);
			break;
		default:
			console.error('A parser style must be provided.');
			process.exit(1);
	}

	await parser.parseModels();
}
