import operadoresController from '../controllers/operadores';

export default (app) => {
	const operadoresController = new operadoresController(app.datasource.models.operadores);

	app.route('/operadores*').all(app.auth.authenticate());

	app.route('/operadores')
	.get(async (req, res) => {
		const response = await operadoresController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await operadoresController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/operadores/:id')
	.get(async (req, res) => {
		const response = await operadoresController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await operadoresController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await operadoresController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
