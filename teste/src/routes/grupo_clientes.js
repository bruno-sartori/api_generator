import grupo_clientesController from '../controllers/grupo_clientes';

export default (app) => {
	const grupo_clientesController = new grupo_clientesController(app.datasource.models.grupo_clientes);

	app.route('/grupo_clientes*').all(app.auth.authenticate());

	app.route('/grupo_clientes')
	.get(async (req, res) => {
		const response = await grupo_clientesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await grupo_clientesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/grupo_clientes/:id')
	.get(async (req, res) => {
		const response = await grupo_clientesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await grupo_clientesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await grupo_clientesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
