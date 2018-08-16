import config_boletoController from '../controllers/config_boleto';

export default (app) => {
	const config_boletoController = new config_boletoController(app.datasource.models.config_boleto);

	app.route('/config_boleto*').all(app.auth.authenticate());

	app.route('/config_boleto')
	.get(async (req, res) => {
		const response = await config_boletoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await config_boletoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/config_boleto/:id')
	.get(async (req, res) => {
		const response = await config_boletoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await config_boletoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await config_boletoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
