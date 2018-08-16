import pessoasController from '../controllers/pessoas';

export default (app) => {
	const pessoasController = new pessoasController(app.datasource.models.pessoas);

	app.route('/pessoas*').all(app.auth.authenticate());

	app.route('/pessoas')
	.get(async (req, res) => {
		const response = await pessoasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await pessoasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/pessoas/:id')
	.get(async (req, res) => {
		const response = await pessoasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await pessoasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await pessoasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
