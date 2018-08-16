import configuracoes_grupo_clienteController from '../controllers/configuracoes_grupo_cliente';

export default (app) => {
	const configuracoes_grupo_clienteController = new configuracoes_grupo_clienteController(app.datasource.models.configuracoes_grupo_cliente);

	app.route('/configuracoes_grupo_cliente*').all(app.auth.authenticate());

	app.route('/configuracoes_grupo_cliente')
	.get(async (req, res) => {
		const response = await configuracoes_grupo_clienteController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await configuracoes_grupo_clienteController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/configuracoes_grupo_cliente/:id')
	.get(async (req, res) => {
		const response = await configuracoes_grupo_clienteController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await configuracoes_grupo_clienteController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await configuracoes_grupo_clienteController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
