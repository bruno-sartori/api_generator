import knex_migrations_lockController from '../controllers/knex_migrations_lock';

export default (app) => {
	const knex_migrations_lockController = new knex_migrations_lockController(app.datasource.models.knex_migrations_lock);

	app.route('/knex_migrations_lock*').all(app.auth.authenticate());

	app.route('/knex_migrations_lock')
	.get(async (req, res) => {
		const response = await knex_migrations_lockController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await knex_migrations_lockController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/knex_migrations_lock/:id')
	.get(async (req, res) => {
		const response = await knex_migrations_lockController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await knex_migrations_lockController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await knex_migrations_lockController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
