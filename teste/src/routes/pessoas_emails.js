import pessoas_emailsController from '../controllers/pessoas_emails';

export default (app) => {
	const pessoas_emailsController = new pessoas_emailsController(app.datasource.models.pessoas_emails);

	app.route('/pessoas_emails*').all(app.auth.authenticate());

	app.route('/pessoas_emails')
	.get(async (req, res) => {
		const response = await pessoas_emailsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await pessoas_emailsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/pessoas_emails/:id')
	.get(async (req, res) => {
		const response = await pessoas_emailsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await pessoas_emailsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await pessoas_emailsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
