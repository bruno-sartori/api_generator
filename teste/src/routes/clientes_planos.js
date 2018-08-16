import clientes_planosController from '../controllers/clientes_planos';

export default (app) => {
	const clientes_planosController = new clientes_planosController(app.datasource.models.clientes_planos);

	app.route('/clientes_planos*').all(app.auth.authenticate());

	app.route('/clientes_planos')
	.get(async (req, res) => {
		const response = await clientes_planosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await clientes_planosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/clientes_planos/:id')
	.get(async (req, res) => {
		const response = await clientes_planosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await clientes_planosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await clientes_planosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
