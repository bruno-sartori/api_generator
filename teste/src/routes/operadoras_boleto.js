import operadoras_boletoController from '../controllers/operadoras_boleto';

export default (app) => {
	const operadoras_boletoController = new operadoras_boletoController(app.datasource.models.operadoras_boleto);

	app.route('/operadoras_boleto*').all(app.auth.authenticate());

	app.route('/operadoras_boleto')
	.get(async (req, res) => {
		const response = await operadoras_boletoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await operadoras_boletoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/operadoras_boleto/:id')
	.get(async (req, res) => {
		const response = await operadoras_boletoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await operadoras_boletoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await operadoras_boletoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
