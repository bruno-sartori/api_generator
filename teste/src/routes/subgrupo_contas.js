import subgrupo_contasController from '../controllers/subgrupo_contas';

export default (app) => {
	const subgrupo_contasController = new subgrupo_contasController(app.datasource.models.subgrupo_contas);

	app.route('/subgrupo_contas*').all(app.auth.authenticate());

	app.route('/subgrupo_contas')
	.get(async (req, res) => {
		const response = await subgrupo_contasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await subgrupo_contasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/subgrupo_contas/:id')
	.get(async (req, res) => {
		const response = await subgrupo_contasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await subgrupo_contasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await subgrupo_contasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
