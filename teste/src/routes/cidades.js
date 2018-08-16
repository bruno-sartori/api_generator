import cidadesController from '../controllers/cidades';

export default (app) => {
	const cidadesController = new cidadesController(app.datasource.models.cidades);

	app.route('/cidades*').all(app.auth.authenticate());

	app.route('/cidades')
	.get(async (req, res) => {
		const response = await cidadesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await cidadesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/cidades/:id')
	.get(async (req, res) => {
		const response = await cidadesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await cidadesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await cidadesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
