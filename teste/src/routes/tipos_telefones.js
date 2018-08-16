import tipos_telefonesController from '../controllers/tipos_telefones';

export default (app) => {
	const tipos_telefonesController = new tipos_telefonesController(app.datasource.models.tipos_telefones);

	app.route('/tipos_telefones*').all(app.auth.authenticate());

	app.route('/tipos_telefones')
	.get(async (req, res) => {
		const response = await tipos_telefonesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await tipos_telefonesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/tipos_telefones/:id')
	.get(async (req, res) => {
		const response = await tipos_telefonesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await tipos_telefonesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await tipos_telefonesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
