import config_chequeController from '../controllers/config_cheque';

export default (app) => {
	const config_chequeController = new config_chequeController(app.datasource.models.config_cheque);

	app.route('/config_cheque*').all(app.auth.authenticate());

	app.route('/config_cheque')
	.get(async (req, res) => {
		const response = await config_chequeController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await config_chequeController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/config_cheque/:id')
	.get(async (req, res) => {
		const response = await config_chequeController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await config_chequeController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await config_chequeController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
