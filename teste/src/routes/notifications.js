import notificationsController from '../controllers/notifications';

export default (app) => {
	const notificationsController = new notificationsController(app.datasource.models.notifications);

	app.route('/notifications*').all(app.auth.authenticate());

	app.route('/notifications')
	.get(async (req, res) => {
		const response = await notificationsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await notificationsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/notifications/:id')
	.get(async (req, res) => {
		const response = await notificationsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await notificationsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await notificationsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
