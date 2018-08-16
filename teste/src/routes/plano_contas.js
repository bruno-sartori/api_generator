import plano_contasController from '../controllers/plano_contas';

export default (app) => {
	const plano_contasController = new plano_contasController(app.datasource.models.plano_contas);

	app.route('/plano_contas*').all(app.auth.authenticate());

	app.route('/plano_contas')
	.get(async (req, res) => {
		const response = await plano_contasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await plano_contasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/plano_contas/:id')
	.get(async (req, res) => {
		const response = await plano_contasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await plano_contasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await plano_contasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
