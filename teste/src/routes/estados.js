import estadosController from '../controllers/estados';

export default (app) => {
	const estadosController = new estadosController(app.datasource.models.estados);

	app.route('/estados*').all(app.auth.authenticate());

	app.route('/estados')
	.get(async (req, res) => {
		const response = await estadosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await estadosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/estados/:id')
	.get(async (req, res) => {
		const response = await estadosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await estadosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await estadosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
