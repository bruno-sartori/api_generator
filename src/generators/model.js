import fs from 'fs';
import path from 'path';
import util from 'util';

class ModelGenerator {

	constructor(modelsPath) {
		this.modelsPath = modelsPath;
	}

	writeValue(stream, value, last = false) {
		if (value.name === 'id') {
			stream.write('\t\t\tid: {\n');
			stream.write('\t\t\t\ttype: DataType.INTEGER,\n');
			stream.write('\t\t\t\tprimaryKey: true,\n');
			stream.write('\t\t\t\tautoIncrement: true\n');
			stream.write('\t\t\t},\n');
			return;
		} else {
			stream.write(`\t\t\t${value.name}: {\n`)
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
	}

	async generateFile(modelName, modelValues) {
		console.log(`Generating Model: ${modelName}`);

		const capitalize = (str) => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}

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
