import tipos_departamentosController from '../controllers/tipos_departamentos';

export default (app) => {
	const tipos_departamentosController = new tipos_departamentosController(app.datasource.models.tipos_departamentos);

	app.route('/tipos_departamentos*').all(app.auth.authenticate());

	app.route('/tipos_departamentos')
	.get(async (req, res) => {
		const response = await tipos_departamentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await tipos_departamentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/tipos_departamentos/:id')
	.get(async (req, res) => {
		const response = await tipos_departamentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await tipos_departamentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await tipos_departamentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
