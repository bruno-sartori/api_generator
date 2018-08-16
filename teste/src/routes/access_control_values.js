import access_control_valuesController from '../controllers/access_control_values';

export default (app) => {
	const access_control_valuesController = new access_control_valuesController(app.datasource.models.access_control_values);

	app.route('/access_control_values*').all(app.auth.authenticate());

	app.route('/access_control_values')
	.get(async (req, res) => {
		const response = await access_control_valuesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await access_control_valuesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/access_control_values/:id')
	.get(async (req, res) => {
		const response = await access_control_valuesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await access_control_valuesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await access_control_valuesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
