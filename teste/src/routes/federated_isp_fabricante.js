import federated_isp_fabricanteController from '../controllers/federated_isp_fabricante';

export default (app) => {
	const federated_isp_fabricanteController = new federated_isp_fabricanteController(app.datasource.models.federated_isp_fabricante);

	app.route('/federated_isp_fabricante*').all(app.auth.authenticate());

	app.route('/federated_isp_fabricante')
	.get(async (req, res) => {
		const response = await federated_isp_fabricanteController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_isp_fabricanteController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_isp_fabricante/:id')
	.get(async (req, res) => {
		const response = await federated_isp_fabricanteController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_isp_fabricanteController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_isp_fabricanteController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
