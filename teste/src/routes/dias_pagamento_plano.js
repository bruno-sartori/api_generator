import dias_pagamento_planoController from '../controllers/dias_pagamento_plano';

export default (app) => {
	const dias_pagamento_planoController = new dias_pagamento_planoController(app.datasource.models.dias_pagamento_plano);

	app.route('/dias_pagamento_plano*').all(app.auth.authenticate());

	app.route('/dias_pagamento_plano')
	.get(async (req, res) => {
		const response = await dias_pagamento_planoController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await dias_pagamento_planoController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/dias_pagamento_plano/:id')
	.get(async (req, res) => {
		const response = await dias_pagamento_planoController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await dias_pagamento_planoController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await dias_pagamento_planoController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
