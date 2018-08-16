import sociosController from '../controllers/socios';

export default (app) => {
	const sociosController = new sociosController(app.datasource.models.socios);

	app.route('/socios*').all(app.auth.authenticate());

	app.route('/socios')
	.get(async (req, res) => {
		const response = await sociosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await sociosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/socios/:id')
	.get(async (req, res) => {
		const response = await sociosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await sociosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await sociosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
