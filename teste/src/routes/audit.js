import auditController from '../controllers/audit';

export default (app) => {
	const auditController = new auditController(app.datasource.models.audit);

	app.route('/audit*').all(app.auth.authenticate());

	app.route('/audit')
	.get(async (req, res) => {
		const response = await auditController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await auditController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/audit/:id')
	.get(async (req, res) => {
		const response = await auditController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await auditController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await auditController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
