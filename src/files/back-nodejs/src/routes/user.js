import UserController from '../controllers/user';

export default (app) => {
	const userController = new UserController(app.datasource.models.User);

	app.route('/user*').all(app.auth.authenticate());

	app.route('/user')
	.get(async (req, res) => {
		const response = await userController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await userController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/user/:id')
	.get(async (req, res) => {
		const response = await userController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await userController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await userController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
