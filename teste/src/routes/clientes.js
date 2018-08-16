import clientesController from '../controllers/clientes';

export default (app) => {
	const clientesController = new clientesController(app.datasource.models.clientes);

	app.route('/clientes*').all(app.auth.authenticate());

	app.route('/clientes')
	.get(async (req, res) => {
		const response = await clientesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await clientesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/clientes/:id')
	.get(async (req, res) => {
		const response = await clientesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await clientesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await clientesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
