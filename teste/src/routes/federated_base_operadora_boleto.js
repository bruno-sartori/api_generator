import federated_base_operadora_boletoController from '../controllers/federated_base_operadora_boleto';

export default (app) => {
	const federated_base_operadora_boletoController = new federated_base_operadora_boletoController(app.datasource.models.federated_base_operadora_boleto);

	app.route('/federated_base_operadora_boleto*').all(app.auth.authenticate());

	app.route('/federated_base_operadora_boleto')
	.get(async (req, res) => {
		const response = await federated_base_operadora_boletoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_base_operadora_boletoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_base_operadora_boleto/:id')
	.get(async (req, res) => {
		const response = await federated_base_operadora_boletoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_base_operadora_boletoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_base_operadora_boletoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
