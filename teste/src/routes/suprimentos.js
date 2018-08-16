import suprimentosController from '../controllers/suprimentos';

export default (app) => {
	const suprimentosController = new suprimentosController(app.datasource.models.suprimentos);

	app.route('/suprimentos*').all(app.auth.authenticate());

	app.route('/suprimentos')
	.get(async (req, res) => {
		const response = await suprimentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await suprimentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/suprimentos/:id')
	.get(async (req, res) => {
		const response = await suprimentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await suprimentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await suprimentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
