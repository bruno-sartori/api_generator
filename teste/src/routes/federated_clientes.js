import federated_clientesController from '../controllers/federated_clientes';

export default (app) => {
	const federated_clientesController = new federated_clientesController(app.datasource.models.federated_clientes);

	app.route('/federated_clientes*').all(app.auth.authenticate());

	app.route('/federated_clientes')
	.get(async (req, res) => {
		const response = await federated_clientesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_clientesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_clientes/:id')
	.get(async (req, res) => {
		const response = await federated_clientesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_clientesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_clientesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
