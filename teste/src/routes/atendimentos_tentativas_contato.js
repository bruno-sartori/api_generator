import atendimentos_tentativas_contatoController from '../controllers/atendimentos_tentativas_contato';

export default (app) => {
	const atendimentos_tentativas_contatoController = new atendimentos_tentativas_contatoController(app.datasource.models.atendimentos_tentativas_contato);

	app.route('/atendimentos_tentativas_contato*').all(app.auth.authenticate());

	app.route('/atendimentos_tentativas_contato')
	.get(async (req, res) => {
		const response = await atendimentos_tentativas_contatoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await atendimentos_tentativas_contatoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/atendimentos_tentativas_contato/:id')
	.get(async (req, res) => {
		const response = await atendimentos_tentativas_contatoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await atendimentos_tentativas_contatoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await atendimentos_tentativas_contatoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
