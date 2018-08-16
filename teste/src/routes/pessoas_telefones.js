import pessoas_telefonesController from '../controllers/pessoas_telefones';

export default (app) => {
	const pessoas_telefonesController = new pessoas_telefonesController(app.datasource.models.pessoas_telefones);

	app.route('/pessoas_telefones*').all(app.auth.authenticate());

	app.route('/pessoas_telefones')
	.get(async (req, res) => {
		const response = await pessoas_telefonesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await pessoas_telefonesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/pessoas_telefones/:id')
	.get(async (req, res) => {
		const response = await pessoas_telefonesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await pessoas_telefonesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await pessoas_telefonesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
