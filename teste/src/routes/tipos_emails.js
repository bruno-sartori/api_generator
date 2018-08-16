import tipos_emailsController from '../controllers/tipos_emails';

export default (app) => {
	const tipos_emailsController = new tipos_emailsController(app.datasource.models.tipos_emails);

	app.route('/tipos_emails*').all(app.auth.authenticate());

	app.route('/tipos_emails')
	.get(async (req, res) => {
		const response = await tipos_emailsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await tipos_emailsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/tipos_emails/:id')
	.get(async (req, res) => {
		const response = await tipos_emailsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await tipos_emailsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await tipos_emailsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
