import transportadorasController from '../controllers/transportadoras';

export default (app) => {
	const transportadorasController = new transportadorasController(app.datasource.models.transportadoras);

	app.route('/transportadoras*').all(app.auth.authenticate());

	app.route('/transportadoras')
	.get(async (req, res) => {
		const response = await transportadorasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await transportadorasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/transportadoras/:id')
	.get(async (req, res) => {
		const response = await transportadorasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await transportadorasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await transportadorasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
