import federated_notificationsController from '../controllers/federated_notifications';

export default (app) => {
	const federated_notificationsController = new federated_notificationsController(app.datasource.models.federated_notifications);

	app.route('/federated_notifications*').all(app.auth.authenticate());

	app.route('/federated_notifications')
	.get(async (req, res) => {
		const response = await federated_notificationsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await federated_notificationsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/federated_notifications/:id')
	.get(async (req, res) => {
		const response = await federated_notificationsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await federated_notificationsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await federated_notificationsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
