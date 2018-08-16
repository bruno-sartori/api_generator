import atendimentos_anexosController from '../controllers/atendimentos_anexos';

export default (app) => {
	const atendimentos_anexosController = new atendimentos_anexosController(app.datasource.models.atendimentos_anexos);

	app.route('/atendimentos_anexos*').all(app.auth.authenticate());

	app.route('/atendimentos_anexos')
	.get(async (req, res) => {
		const response = await atendimentos_anexosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentos_anexosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos_anexos/:id')
	.get(async (req, res) => {
		const response = await atendimentos_anexosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentos_anexosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentos_anexosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
