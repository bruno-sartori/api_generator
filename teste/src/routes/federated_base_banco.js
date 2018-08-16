import federated_base_bancoController from '../controllers/federated_base_banco';

export default (app) => {
	const federated_base_bancoController = new federated_base_bancoController(app.datasource.models.federated_base_banco);

	app.route('/federated_base_banco*').all(app.auth.authenticate());

	app.route('/federated_base_banco')
	.get(async (req, res) => {
		const response = await federated_base_bancoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_base_bancoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_base_banco/:id')
	.get(async (req, res) => {
		const response = await federated_base_bancoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_base_bancoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_base_bancoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
