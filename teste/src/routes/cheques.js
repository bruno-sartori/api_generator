import chequesController from '../controllers/cheques';

export default (app) => {
	const chequesController = new chequesController(app.datasource.models.cheques);

	app.route('/cheques*').all(app.auth.authenticate());

	app.route('/cheques')
	.get(async (req, res) => {
		const response = await chequesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await chequesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/cheques/:id')
	.get(async (req, res) => {
		const response = await chequesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await chequesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await chequesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
