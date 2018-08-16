import logradourosController from '../controllers/logradouros';

export default (app) => {
	const logradourosController = new logradourosController(app.datasource.models.logradouros);

	app.route('/logradouros*').all(app.auth.authenticate());

	app.route('/logradouros')
	.get(async (req, res) => {
		const response = await logradourosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await logradourosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/logradouros/:id')
	.get(async (req, res) => {
		const response = await logradourosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await logradourosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await logradourosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
