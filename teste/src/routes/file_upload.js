import file_uploadController from '../controllers/file_upload';

export default (app) => {
	const file_uploadController = new file_uploadController(app.datasource.models.file_upload);

	app.route('/file_upload*').all(app.auth.authenticate());

	app.route('/file_upload')
	.get(async (req, res) => {
		const response = await file_uploadController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await file_uploadController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/file_upload/:id')
	.get(async (req, res) => {
		const response = await file_uploadController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await file_uploadController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await file_uploadController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
