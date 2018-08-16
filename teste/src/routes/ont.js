import ontController from '../controllers/ont';

export default (app) => {
	const ontController = new ontController(app.datasource.models.ont);

	app.route('/ont*').all(app.auth.authenticate());

	app.route('/ont')
	.get(async (req, res) => {
		const response = await ontController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await ontController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/ont/:id')
	.get(async (req, res) => {
		const response = await ontController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await ontController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await ontController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
