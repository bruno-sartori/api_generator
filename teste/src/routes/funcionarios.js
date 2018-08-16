import funcionariosController from '../controllers/funcionarios';

export default (app) => {
	const funcionariosController = new funcionariosController(app.datasource.models.funcionarios);

	app.route('/funcionarios*').all(app.auth.authenticate());

	app.route('/funcionarios')
	.get(async (req, res) => {
		const response = await funcionariosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await funcionariosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/funcionarios/:id')
	.get(async (req, res) => {
		const response = await funcionariosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await funcionariosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await funcionariosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
