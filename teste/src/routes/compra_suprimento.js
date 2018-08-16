import compra_suprimentoController from '../controllers/compra_suprimento';

export default (app) => {
	const compra_suprimentoController = new compra_suprimentoController(app.datasource.models.compra_suprimento);

	app.route('/compra_suprimento*').all(app.auth.authenticate());

	app.route('/compra_suprimento')
	.get(async (req, res) => {
		const response = await compra_suprimentoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await compra_suprimentoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/compra_suprimento/:id')
	.get(async (req, res) => {
		const response = await compra_suprimentoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await compra_suprimentoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await compra_suprimentoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
