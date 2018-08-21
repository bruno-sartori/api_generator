import OperadorController from '../controllers/Operador';

export default (app) => {
	const operadorController = new OperadorController(app.datasource.models.Operador);

	app.route('/operador*').all(app.auth.authenticate());

	app.route('/operador')
	.get(async (req, res) => {
		const response = await operadorController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await operadorController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/operador/:id')
	.get(async (req, res) => {
		const response = await operadorController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await operadorController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await operadorController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
