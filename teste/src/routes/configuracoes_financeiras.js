import configuracoes_financeirasController from '../controllers/configuracoes_financeiras';

export default (app) => {
	const configuracoes_financeirasController = new configuracoes_financeirasController(app.datasource.models.configuracoes_financeiras);

	app.route('/configuracoes_financeiras*').all(app.auth.authenticate());

	app.route('/configuracoes_financeiras')
	.get(async (req, res) => {
		const response = await configuracoes_financeirasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await configuracoes_financeirasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/configuracoes_financeiras/:id')
	.get(async (req, res) => {
		const response = await configuracoes_financeirasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await configuracoes_financeirasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await configuracoes_financeirasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
