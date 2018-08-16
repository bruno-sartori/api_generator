import custo_fixo_parcelaController from '../controllers/custo_fixo_parcela';

export default (app) => {
	const custo_fixo_parcelaController = new custo_fixo_parcelaController(app.datasource.models.custo_fixo_parcela);

	app.route('/custo_fixo_parcela*').all(app.auth.authenticate());

	app.route('/custo_fixo_parcela')
	.get(async (req, res) => {
		const response = await custo_fixo_parcelaController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await custo_fixo_parcelaController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/custo_fixo_parcela/:id')
	.get(async (req, res) => {
		const response = await custo_fixo_parcelaController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await custo_fixo_parcelaController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await custo_fixo_parcelaController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
