import bairrosController from '../controllers/bairros';

export default (app) => {
	const bairrosController = new bairrosController(app.datasource.models.bairros);

	app.route('/bairros*').all(app.auth.authenticate());

	app.route('/bairros')
	.get(async (req, res) => {
		const response = await bairrosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await bairrosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/bairros/:id')
	.get(async (req, res) => {
		const response = await bairrosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await bairrosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await bairrosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
