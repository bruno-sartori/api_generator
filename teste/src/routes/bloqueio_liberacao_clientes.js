import bloqueio_liberacao_clientesController from '../controllers/bloqueio_liberacao_clientes';

export default (app) => {
	const bloqueio_liberacao_clientesController = new bloqueio_liberacao_clientesController(app.datasource.models.bloqueio_liberacao_clientes);

	app.route('/bloqueio_liberacao_clientes*').all(app.auth.authenticate());

	app.route('/bloqueio_liberacao_clientes')
	.get(async (req, res) => {
		const response = await bloqueio_liberacao_clientesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await bloqueio_liberacao_clientesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/bloqueio_liberacao_clientes/:id')
	.get(async (req, res) => {
		const response = await bloqueio_liberacao_clientesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await bloqueio_liberacao_clientesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await bloqueio_liberacao_clientesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
