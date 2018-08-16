import servicosController from '../controllers/servicos';

export default (app) => {
	const servicosController = new servicosController(app.datasource.models.servicos);

	app.route('/servicos*').all(app.auth.authenticate());

	app.route('/servicos')
	.get(async (req, res) => {
		const response = await servicosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await servicosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/servicos/:id')
	.get(async (req, res) => {
		const response = await servicosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await servicosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await servicosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
