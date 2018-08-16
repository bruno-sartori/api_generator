import custo_variavel_parcelaController from '../controllers/custo_variavel_parcela';

export default (app) => {
	const custo_variavel_parcelaController = new custo_variavel_parcelaController(app.datasource.models.custo_variavel_parcela);

	app.route('/custo_variavel_parcela*').all(app.auth.authenticate());

	app.route('/custo_variavel_parcela')
	.get(async (req, res) => {
		const response = await custo_variavel_parcelaController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await custo_variavel_parcelaController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/custo_variavel_parcela/:id')
	.get(async (req, res) => {
		const response = await custo_variavel_parcelaController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await custo_variavel_parcelaController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await custo_variavel_parcelaController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
