import UsersController from '../controllers/Users';

export default (app) => {
	const usersController = new UsersController(app.datasource.models.Users);

	app.route('/users*').all(app.auth.authenticate());

	app.route('/users')
	.get(async (req, res) => {
		const response = await usersController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await usersController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/users/:id')
	.get(async (req, res) => {
		const response = await usersController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await usersController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await usersController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
