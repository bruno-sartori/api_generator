import grupo_contasController from '../controllers/grupo_contas';

export default (app) => {
	const grupo_contasController = new grupo_contasController(app.datasource.models.grupo_contas);

	app.route('/grupo_contas*').all(app.auth.authenticate());

	app.route('/grupo_contas')
	.get(async (req, res) => {
		const response = await grupo_contasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await grupo_contasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/grupo_contas/:id')
	.get(async (req, res) => {
		const response = await grupo_contasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await grupo_contasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await grupo_contasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
