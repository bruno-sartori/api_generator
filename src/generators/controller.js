import fs from 'fs';
import path from 'path';
import Generator from './generator';

class ControllerGenerator extends Generator {

	constructor(modelPath, controllersPath) {
		this.modelPath = modelPath;
		this.controllersPath = controllersPath;
	}

	async generate() {
		const regexModelName = new RegExp(/sequelize\.define/, 'g');
		const regexValueName = new RegExp(/.+?(?=\:)/);

		fs.readdirSync(this.modelPath).forEach(async (file) => {
			const lines = await fs.readFileSync(path.join(this.modelPath, file)).toString().split('\n');

			for (const i in lines) {
				if (lines[i].match(regexModelName)) {
					this.parseModelName(lines[i]);
				} else if (linex[1].match(regexValues)) {
					this.parseModelValueName(lines[i]);
				} else {
					this.parseModelValueType(lines[i]);
				}
			}
		});
	}

	async parseModelName(line) {
		this.setModelName = line.match(/"(.*?)"/);
		console.log(this.getModelName);
	}

	async parseModelValuesName(line) {
		const valueName = line.match(/.+?(?=\:)/);
		this.pushModelValueNames(valueName);
	}

	async parseModelValueType(line) {

	}


}

export default ControllerGenerator;
