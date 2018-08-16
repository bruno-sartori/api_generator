import enderecosController from '../controllers/enderecos';

export default (app) => {
	const enderecosController = new enderecosController(app.datasource.models.enderecos);

	app.route('/enderecos*').all(app.auth.authenticate());

	app.route('/enderecos')
	.get(async (req, res) => {
		const response = await enderecosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await enderecosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/enderecos/:id')
	.get(async (req, res) => {
		const response = await enderecosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await enderecosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await enderecosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
