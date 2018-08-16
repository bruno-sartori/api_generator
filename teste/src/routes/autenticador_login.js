import autenticador_loginController from '../controllers/autenticador_login';

export default (app) => {
	const autenticador_loginController = new autenticador_loginController(app.datasource.models.autenticador_login);

	app.route('/autenticador_login*').all(app.auth.authenticate());

	app.route('/autenticador_login')
	.get(async (req, res) => {
		const response = await autenticador_loginController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await autenticador_loginController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/autenticador_login/:id')
	.get(async (req, res) => {
		const response = await autenticador_loginController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await autenticador_loginController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await autenticador_loginController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
