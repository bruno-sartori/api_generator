import retorno_boletoController from '../controllers/retorno_boleto';

export default (app) => {
	const retorno_boletoController = new retorno_boletoController(app.datasource.models.retorno_boleto);

	app.route('/retorno_boleto*').all(app.auth.authenticate());

	app.route('/retorno_boleto')
	.get(async (req, res) => {
		const response = await retorno_boletoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await retorno_boletoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/retorno_boleto/:id')
	.get(async (req, res) => {
		const response = await retorno_boletoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await retorno_boletoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await retorno_boletoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
