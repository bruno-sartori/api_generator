import autenticador_cpeController from '../controllers/autenticador_cpe';

export default (app) => {
	const autenticador_cpeController = new autenticador_cpeController(app.datasource.models.autenticador_cpe);

	app.route('/autenticador_cpe*').all(app.auth.authenticate());

	app.route('/autenticador_cpe')
	.get(async (req, res) => {
		const response = await autenticador_cpeController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await autenticador_cpeController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/autenticador_cpe/:id')
	.get(async (req, res) => {
		const response = await autenticador_cpeController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await autenticador_cpeController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await autenticador_cpeController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
