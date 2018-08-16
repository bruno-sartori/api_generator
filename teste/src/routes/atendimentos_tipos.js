import atendimentos_tiposController from '../controllers/atendimentos_tipos';

export default (app) => {
	const atendimentos_tiposController = new atendimentos_tiposController(app.datasource.models.atendimentos_tipos);

	app.route('/atendimentos_tipos*').all(app.auth.authenticate());

	app.route('/atendimentos_tipos')
	.get(async (req, res) => {
		const response = await atendimentos_tiposController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentos_tiposController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos_tipos/:id')
	.get(async (req, res) => {
		const response = await atendimentos_tiposController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentos_tiposController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentos_tiposController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
