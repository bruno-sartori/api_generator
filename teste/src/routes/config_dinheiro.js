import config_dinheiroController from '../controllers/config_dinheiro';

export default (app) => {
	const config_dinheiroController = new config_dinheiroController(app.datasource.models.config_dinheiro);

	app.route('/config_dinheiro*').all(app.auth.authenticate());

	app.route('/config_dinheiro')
	.get(async (req, res) => {
		const response = await config_dinheiroController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await config_dinheiroController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/config_dinheiro/:id')
	.get(async (req, res) => {
		const response = await config_dinheiroController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await config_dinheiroController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await config_dinheiroController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
