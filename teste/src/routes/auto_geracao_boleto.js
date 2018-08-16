import auto_geracao_boletoController from '../controllers/auto_geracao_boleto';

export default (app) => {
	const auto_geracao_boletoController = new auto_geracao_boletoController(app.datasource.models.auto_geracao_boleto);

	app.route('/auto_geracao_boleto*').all(app.auth.authenticate());

	app.route('/auto_geracao_boleto')
	.get(async (req, res) => {
		const response = await auto_geracao_boletoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await auto_geracao_boletoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/auto_geracao_boleto/:id')
	.get(async (req, res) => {
		const response = await auto_geracao_boletoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await auto_geracao_boletoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await auto_geracao_boletoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
