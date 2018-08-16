import cpeController from '../controllers/cpe';

export default (app) => {
	const cpeController = new cpeController(app.datasource.models.cpe);

	app.route('/cpe*').all(app.auth.authenticate());

	app.route('/cpe')
	.get(async (req, res) => {
		const response = await cpeController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await cpeController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/cpe/:id')
	.get(async (req, res) => {
		const response = await cpeController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await cpeController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await cpeController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
