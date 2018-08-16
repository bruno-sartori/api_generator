import conectividadeController from '../controllers/conectividade';

export default (app) => {
	const conectividadeController = new conectividadeController(app.datasource.models.conectividade);

	app.route('/conectividade*').all(app.auth.authenticate());

	app.route('/conectividade')
	.get(async (req, res) => {
		const response = await conectividadeController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await conectividadeController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/conectividade/:id')
	.get(async (req, res) => {
		const response = await conectividadeController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await conectividadeController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await conectividadeController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
