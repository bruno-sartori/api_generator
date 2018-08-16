import federated_base_operadora_cartaoController from '../controllers/federated_base_operadora_cartao';

export default (app) => {
	const federated_base_operadora_cartaoController = new federated_base_operadora_cartaoController(app.datasource.models.federated_base_operadora_cartao);

	app.route('/federated_base_operadora_cartao*').all(app.auth.authenticate());

	app.route('/federated_base_operadora_cartao')
	.get(async (req, res) => {
		const response = await federated_base_operadora_cartaoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_base_operadora_cartaoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_base_operadora_cartao/:id')
	.get(async (req, res) => {
		const response = await federated_base_operadora_cartaoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_base_operadora_cartaoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_base_operadora_cartaoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
