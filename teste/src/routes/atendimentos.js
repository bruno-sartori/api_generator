import atendimentosController from '../controllers/atendimentos';

export default (app) => {
	const atendimentosController = new atendimentosController(app.datasource.models.atendimentos);

	app.route('/atendimentos*').all(app.auth.authenticate());

	app.route('/atendimentos')
	.get(async (req, res) => {
		const response = await atendimentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos/:id')
	.get(async (req, res) => {
		const response = await atendimentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
