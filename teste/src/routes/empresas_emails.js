import empresas_emailsController from '../controllers/empresas_emails';

export default (app) => {
	const empresas_emailsController = new empresas_emailsController(app.datasource.models.empresas_emails);

	app.route('/empresas_emails*').all(app.auth.authenticate());

	app.route('/empresas_emails')
	.get(async (req, res) => {
		const response = await empresas_emailsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await empresas_emailsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/empresas_emails/:id')
	.get(async (req, res) => {
		const response = await empresas_emailsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await empresas_emailsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await empresas_emailsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
