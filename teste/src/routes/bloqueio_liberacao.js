import bloqueio_liberacaoController from '../controllers/bloqueio_liberacao';

export default (app) => {
	const bloqueio_liberacaoController = new bloqueio_liberacaoController(app.datasource.models.bloqueio_liberacao);

	app.route('/bloqueio_liberacao*').all(app.auth.authenticate());

	app.route('/bloqueio_liberacao')
	.get(async (req, res) => {
		const response = await bloqueio_liberacaoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await bloqueio_liberacaoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/bloqueio_liberacao/:id')
	.get(async (req, res) => {
		const response = await bloqueio_liberacaoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await bloqueio_liberacaoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await bloqueio_liberacaoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
