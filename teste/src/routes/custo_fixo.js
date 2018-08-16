import custo_fixoController from '../controllers/custo_fixo';

export default (app) => {
	const custo_fixoController = new custo_fixoController(app.datasource.models.custo_fixo);

	app.route('/custo_fixo*').all(app.auth.authenticate());

	app.route('/custo_fixo')
	.get(async (req, res) => {
		const response = await custo_fixoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await custo_fixoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/custo_fixo/:id')
	.get(async (req, res) => {
		const response = await custo_fixoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await custo_fixoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await custo_fixoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
