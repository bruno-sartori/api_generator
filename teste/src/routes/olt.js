import oltController from '../controllers/olt';

export default (app) => {
	const oltController = new oltController(app.datasource.models.olt);

	app.route('/olt*').all(app.auth.authenticate());

	app.route('/olt')
	.get(async (req, res) => {
		const response = await oltController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await oltController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/olt/:id')
	.get(async (req, res) => {
		const response = await oltController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await oltController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await oltController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
