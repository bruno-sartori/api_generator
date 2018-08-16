import block_tablesController from '../controllers/block_tables';

export default (app) => {
	const block_tablesController = new block_tablesController(app.datasource.models.block_tables);

	app.route('/block_tables*').all(app.auth.authenticate());

	app.route('/block_tables')
	.get(async (req, res) => {
		const response = await block_tablesController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await block_tablesController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/block_tables/:id')
	.get(async (req, res) => {
		const response = await block_tablesController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await block_tablesController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await block_tablesController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
