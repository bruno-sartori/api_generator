import atendimentos_tipos_servicosController from '../controllers/atendimentos_tipos_servicos';

export default (app) => {
	const atendimentos_tipos_servicosController = new atendimentos_tipos_servicosController(app.datasource.models.atendimentos_tipos_servicos);

	app.route('/atendimentos_tipos_servicos*').all(app.auth.authenticate());

	app.route('/atendimentos_tipos_servicos')
	.get(async (req, res) => {
		const response = await atendimentos_tipos_servicosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentos_tipos_servicosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos_tipos_servicos/:id')
	.get(async (req, res) => {
		const response = await atendimentos_tipos_servicosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentos_tipos_servicosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentos_tipos_servicosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
