import recebimento_estornoController from '../controllers/recebimento_estorno';

export default (app) => {
	const recebimento_estornoController = new recebimento_estornoController(app.datasource.models.recebimento_estorno);

	app.route('/recebimento_estorno*').all(app.auth.authenticate());

	app.route('/recebimento_estorno')
	.get(async (req, res) => {
		const response = await recebimento_estornoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await recebimento_estornoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/recebimento_estorno/:id')
	.get(async (req, res) => {
		const response = await recebimento_estornoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await recebimento_estornoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await recebimento_estornoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
