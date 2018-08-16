import operadores_departamentosController from '../controllers/operadores_departamentos';

export default (app) => {
	const operadores_departamentosController = new operadores_departamentosController(app.datasource.models.operadores_departamentos);

	app.route('/operadores_departamentos*').all(app.auth.authenticate());

	app.route('/operadores_departamentos')
	.get(async (req, res) => {
		const response = await operadores_departamentosController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await operadores_departamentosController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/operadores_departamentos/:id')
	.get(async (req, res) => {
		const response = await operadores_departamentosController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await operadores_departamentosController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await operadores_departamentosController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
