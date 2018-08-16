import tipos_atendimentosController from '../controllers/tipos_atendimentos';

export default (app) => {
	const tipos_atendimentosController = new tipos_atendimentosController(app.datasource.models.tipos_atendimentos);

	app.route('/tipos_atendimentos*').all(app.auth.authenticate());

	app.route('/tipos_atendimentos')
	.get(async (req, res) => {
		const response = await tipos_atendimentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await tipos_atendimentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/tipos_atendimentos/:id')
	.get(async (req, res) => {
		const response = await tipos_atendimentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await tipos_atendimentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await tipos_atendimentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
