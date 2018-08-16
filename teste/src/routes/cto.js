import ctoController from '../controllers/cto';

export default (app) => {
	const ctoController = new ctoController(app.datasource.models.cto);

	app.route('/cto*').all(app.auth.authenticate());

	app.route('/cto')
	.get(async (req, res) => {
		const response = await ctoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await ctoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/cto/:id')
	.get(async (req, res) => {
		const response = await ctoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await ctoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await ctoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
