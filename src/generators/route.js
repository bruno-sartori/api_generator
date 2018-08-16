import fs from 'fs';
import path from 'path';
import util from 'util';

class RouteGenerator {
	constructor(routesPath) {
		this.routesPath = routesPath;
	}

	async generateFile(modelName, modelValues) {
		console.log(`Generating Route: ${modelName}`);

		const controllerName = `${modelName}Controller`;
		const controllerVar = `${modelName.charAt(0).toLowerCase() + modelName.slice(1)}Controller`;
		const routeName = modelName.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();

		const stream = fs.createWriteStream(path.join(this.routesPath, `${modelName}.js`));
		stream.once('open', (fd) => {
		  stream.write(`import ${controllerName} from '../controllers/${modelName}';\n\n`);
			stream.write(`export default (app) => {\n`);
			stream.write(`\tconst ${controllerVar} = new ${controllerName}(app.datasource.models.${modelName});\n\n`);
			stream.write(`\tapp.route('/${routeName}*').all(app.auth.authenticate());\n\n`);
			stream.write(`\tapp.route('/${routeName}')\n`);
			stream.write(`\t.get(async (req, res) => {\n`);
			stream.write(`\t\tconst response = await ${controllerVar}.getAll();\n`);
			stream.write(`\t\tres.status(response.statusCode).json(response.data);\n`);
			stream.write(`\t})\n`);
			stream.write(`\t.post(async (req, res) => {\n`);
			stream.write(`\t\tconst response = await ${controllerVar}.create(req.body);\n`);
			stream.write(`\t\tres.status(response.statusCode).json(response.data);\n`);
			stream.write(`\t});\n\n`);
			stream.write(`\tapp.route('/${routeName}/:id')\n`);
			stream.write(`\t.get(async (req, res) => {\n`);
			stream.write(`\t\tconst response = await ${controllerVar}.getById(req.params);\n`);
			stream.write(`\t\tres.status(response.statusCode).json(response.data);\n`);
			stream.write(`\t})\n`);
			stream.write(`\t.put(async (req, res) => {\n`);
			stream.write(`\t\tconst response = await ${controllerVar}.update(req.body, req.params);\n`);
			stream.write(`\t\tres.status(response.statusCode).json(response.data);\n`);
			stream.write(`\t})\n`);
			stream.write(`\t.delete(async (req, res) => {\n`);
			stream.write(`\t\tconst response = await ${controllerVar}.delete(req.params);\n`);
			stream.write(`\t\tres.status(response.statusCode).json(response.data);\n`);
			stream.write(`\t});\n`);
			stream.write(`};\n`);
			stream.end();
		});
	}
}

export default RouteGenerator;
