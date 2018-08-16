import clientes_anexoController from '../controllers/clientes_anexo';

export default (app) => {
	const clientes_anexoController = new clientes_anexoController(app.datasource.models.clientes_anexo);

	app.route('/clientes_anexo*').all(app.auth.authenticate());

	app.route('/clientes_anexo')
	.get(async (req, res) => {
		const response = await clientes_anexoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await clientes_anexoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/clientes_anexo/:id')
	.get(async (req, res) => {
		const response = await clientes_anexoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await clientes_anexoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await clientes_anexoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
