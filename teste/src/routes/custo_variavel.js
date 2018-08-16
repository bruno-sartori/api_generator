import custo_variavelController from '../controllers/custo_variavel';

export default (app) => {
	const custo_variavelController = new custo_variavelController(app.datasource.models.custo_variavel);

	app.route('/custo_variavel*').all(app.auth.authenticate());

	app.route('/custo_variavel')
	.get(async (req, res) => {
		const response = await custo_variavelController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await custo_variavelController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/custo_variavel/:id')
	.get(async (req, res) => {
		const response = await custo_variavelController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await custo_variavelController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await custo_variavelController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
