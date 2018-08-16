import compra_servicoController from '../controllers/compra_servico';

export default (app) => {
	const compra_servicoController = new compra_servicoController(app.datasource.models.compra_servico);

	app.route('/compra_servico*').all(app.auth.authenticate());

	app.route('/compra_servico')
	.get(async (req, res) => {
		const response = await compra_servicoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await compra_servicoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/compra_servico/:id')
	.get(async (req, res) => {
		const response = await compra_servicoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await compra_servicoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await compra_servicoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
