import contas_receberController from '../controllers/contas_receber';

export default (app) => {
	const contas_receberController = new contas_receberController(app.datasource.models.contas_receber);

	app.route('/contas_receber*').all(app.auth.authenticate());

	app.route('/contas_receber')
	.get(async (req, res) => {
		const response = await contas_receberController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await contas_receberController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/contas_receber/:id')
	.get(async (req, res) => {
		const response = await contas_receberController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await contas_receberController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await contas_receberController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
