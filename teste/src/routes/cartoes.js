import cartoesController from '../controllers/cartoes';

export default (app) => {
	const cartoesController = new cartoesController(app.datasource.models.cartoes);

	app.route('/cartoes*').all(app.auth.authenticate());

	app.route('/cartoes')
	.get(async (req, res) => {
		const response = await cartoesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await cartoesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/cartoes/:id')
	.get(async (req, res) => {
		const response = await cartoesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await cartoesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await cartoesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
