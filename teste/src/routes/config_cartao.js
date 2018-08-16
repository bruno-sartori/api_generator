import config_cartaoController from '../controllers/config_cartao';

export default (app) => {
	const config_cartaoController = new config_cartaoController(app.datasource.models.config_cartao);

	app.route('/config_cartao*').all(app.auth.authenticate());

	app.route('/config_cartao')
	.get(async (req, res) => {
		const response = await config_cartaoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await config_cartaoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/config_cartao/:id')
	.get(async (req, res) => {
		const response = await config_cartaoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await config_cartaoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await config_cartaoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
