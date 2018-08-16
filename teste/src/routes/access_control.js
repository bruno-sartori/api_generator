import access_controlController from '../controllers/access_control';

export default (app) => {
	const access_controlController = new access_controlController(app.datasource.models.access_control);

	app.route('/access_control*').all(app.auth.authenticate());

	app.route('/access_control')
	.get(async (req, res) => {
		const response = await access_controlController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await access_controlController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/access_control/:id')
	.get(async (req, res) => {
		const response = await access_controlController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await access_controlController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await access_controlController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
