import recebimento_cobrancaController from '../controllers/recebimento_cobranca';

export default (app) => {
	const recebimento_cobrancaController = new recebimento_cobrancaController(app.datasource.models.recebimento_cobranca);

	app.route('/recebimento_cobranca*').all(app.auth.authenticate());

	app.route('/recebimento_cobranca')
	.get(async (req, res) => {
		const response = await recebimento_cobrancaController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await recebimento_cobrancaController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/recebimento_cobranca/:id')
	.get(async (req, res) => {
		const response = await recebimento_cobrancaController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await recebimento_cobrancaController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await recebimento_cobrancaController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
