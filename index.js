#! /usr/bin/env node

const ControllerGenerator = require('./src/generators/controller').default;

const modelPath = process.argv[2];
const controllersPath = process.argv[3];
const routesPath = process.argv[4];

if (typeof modelPath === 'undefined' || typeof controllersPath === 'undefined' || typeof routesPath === 'undefined') {
	console.log('Usage: apigen [MODEL_PATH] [CONTROLLERS_PATH] [ROUTES_PATH]');
 	process.exit(1);
} else {
	generate();
}


async function generate() {
	const controller = new ControllerGenerator(modelPath, controllersPath);

	await Promise.all([controller.generate()]);
}
