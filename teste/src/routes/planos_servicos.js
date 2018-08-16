import planos_servicosController from '../controllers/planos_servicos';

export default (app) => {
	const planos_servicosController = new planos_servicosController(app.datasource.models.planos_servicos);

	app.route('/planos_servicos*').all(app.auth.authenticate());

	app.route('/planos_servicos')
	.get(async (req, res) => {
		const response = await planos_servicosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await planos_servicosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/planos_servicos/:id')
	.get(async (req, res) => {
		const response = await planos_servicosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await planos_servicosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await planos_servicosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
