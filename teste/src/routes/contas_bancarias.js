import contas_bancariasController from '../controllers/contas_bancarias';

export default (app) => {
	const contas_bancariasController = new contas_bancariasController(app.datasource.models.contas_bancarias);

	app.route('/contas_bancarias*').all(app.auth.authenticate());

	app.route('/contas_bancarias')
	.get(async (req, res) => {
		const response = await contas_bancariasController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await contas_bancariasController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/contas_bancarias/:id')
	.get(async (req, res) => {
		const response = await contas_bancariasController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await contas_bancariasController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await contas_bancariasController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
