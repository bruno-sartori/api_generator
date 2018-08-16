import empresas_telefonesController from '../controllers/empresas_telefones';

export default (app) => {
	const empresas_telefonesController = new empresas_telefonesController(app.datasource.models.empresas_telefones);

	app.route('/empresas_telefones*').all(app.auth.authenticate());

	app.route('/empresas_telefones')
	.get(async (req, res) => {
		const response = await empresas_telefonesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await empresas_telefonesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/empresas_telefones/:id')
	.get(async (req, res) => {
		const response = await empresas_telefonesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await empresas_telefonesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await empresas_telefonesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
