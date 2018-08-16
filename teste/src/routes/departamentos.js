import departamentosController from '../controllers/departamentos';

export default (app) => {
	const departamentosController = new departamentosController(app.datasource.models.departamentos);

	app.route('/departamentos*').all(app.auth.authenticate());

	app.route('/departamentos')
	.get(async (req, res) => {
		const response = await departamentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await departamentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/departamentos/:id')
	.get(async (req, res) => {
		const response = await departamentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await departamentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await departamentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
