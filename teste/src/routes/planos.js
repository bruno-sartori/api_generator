import planosController from '../controllers/planos';

export default (app) => {
	const planosController = new planosController(app.datasource.models.planos);

	app.route('/planos*').all(app.auth.authenticate());

	app.route('/planos')
	.get(async (req, res) => {
		const response = await planosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await planosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/planos/:id')
	.get(async (req, res) => {
		const response = await planosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await planosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await planosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
