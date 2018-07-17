class Generator {
	constructor(modelPath) {

		this.modelPath = modelPath;
		this.modelName = null;
		this.modelValues = [];
	}

	get getModelName() {
		return this.modelName;
	}

	get getModelValues() {
		return this.modelValues;
	}

	set setModelName(modelName) {
		this.modelName = modelName;
	}

	set setModelValues(modelValues) {
		this.modelValues = [];
		this.modelValues = modelValues;
	}

	async pushModelValueNames(valueName) {
		this.modelValues.push({ name: valueName });
	}
}

export default Generator;
