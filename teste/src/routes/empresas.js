import empresasController from '../controllers/empresas';

export default (app) => {
	const empresasController = new empresasController(app.datasource.models.empresas);

	app.route('/empresas*').all(app.auth.authenticate());

	app.route('/empresas')
	.get(async (req, res) => {
		const response = await empresasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await empresasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/empresas/:id')
	.get(async (req, res) => {
		const response = await empresasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await empresasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await empresasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
