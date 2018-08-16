import knex_migrationsController from '../controllers/knex_migrations';

export default (app) => {
	const knex_migrationsController = new knex_migrationsController(app.datasource.models.knex_migrations);

	app.route('/knex_migrations*').all(app.auth.authenticate());

	app.route('/knex_migrations')
	.get(async (req, res) => {
		const response = await knex_migrationsController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await knex_migrationsController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/knex_migrations/:id')
	.get(async (req, res) => {
		const response = await knex_migrationsController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await knex_migrationsController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await knex_migrationsController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
