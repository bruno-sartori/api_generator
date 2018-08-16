import tipos_tentativas_contatoController from '../controllers/tipos_tentativas_contato';

export default (app) => {
	const tipos_tentativas_contatoController = new tipos_tentativas_contatoController(app.datasource.models.tipos_tentativas_contato);

	app.route('/tipos_tentativas_contato*').all(app.auth.authenticate());

	app.route('/tipos_tentativas_contato')
	.get(async (req, res) => {
		const response = await tipos_tentativas_contatoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await tipos_tentativas_contatoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/tipos_tentativas_contato/:id')
	.get(async (req, res) => {
		const response = await tipos_tentativas_contatoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await tipos_tentativas_contatoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await tipos_tentativas_contatoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
