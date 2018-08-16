import operadoras_cartaoController from '../controllers/operadoras_cartao';

export default (app) => {
	const operadoras_cartaoController = new operadoras_cartaoController(app.datasource.models.operadoras_cartao);

	app.route('/operadoras_cartao*').all(app.auth.authenticate());

	app.route('/operadoras_cartao')
	.get(async (req, res) => {
		const response = await operadoras_cartaoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await operadoras_cartaoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/operadoras_cartao/:id')
	.get(async (req, res) => {
		const response = await operadoras_cartaoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await operadoras_cartaoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await operadoras_cartaoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
