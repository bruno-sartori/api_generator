import clientes_historicoController from '../controllers/clientes_historico';

export default (app) => {
	const clientes_historicoController = new clientes_historicoController(app.datasource.models.clientes_historico);

	app.route('/clientes_historico*').all(app.auth.authenticate());

	app.route('/clientes_historico')
	.get(async (req, res) => {
		const response = await clientes_historicoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await clientes_historicoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/clientes_historico/:id')
	.get(async (req, res) => {
		const response = await clientes_historicoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await clientes_historicoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await clientes_historicoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
