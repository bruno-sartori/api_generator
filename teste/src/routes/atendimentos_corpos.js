import atendimentos_corposController from '../controllers/atendimentos_corpos';

export default (app) => {
	const atendimentos_corposController = new atendimentos_corposController(app.datasource.models.atendimentos_corpos);

	app.route('/atendimentos_corpos*').all(app.auth.authenticate());

	app.route('/atendimentos_corpos')
	.get(async (req, res) => {
		const response = await atendimentos_corposController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentos_corposController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos_corpos/:id')
	.get(async (req, res) => {
		const response = await atendimentos_corposController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentos_corposController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentos_corposController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
