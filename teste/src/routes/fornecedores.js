import fornecedoresController from '../controllers/fornecedores';

export default (app) => {
	const fornecedoresController = new fornecedoresController(app.datasource.models.fornecedores);

	app.route('/fornecedores*').all(app.auth.authenticate());

	app.route('/fornecedores')
	.get(async (req, res) => {
		const response = await fornecedoresController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await fornecedoresController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/fornecedores/:id')
	.get(async (req, res) => {
		const response = await fornecedoresController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await fornecedoresController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await fornecedoresController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
