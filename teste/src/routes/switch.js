import switchController from '../controllers/switch';

export default (app) => {
	const switchController = new switchController(app.datasource.models.switch);

	app.route('/switch*').all(app.auth.authenticate());

	app.route('/switch')
	.get(async (req, res) => {
		const response = await switchController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await switchController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/switch/:id')
	.get(async (req, res) => {
		const response = await switchController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await switchController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await switchController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
