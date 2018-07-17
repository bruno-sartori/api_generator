import BooksController from '../controllers/Books';

export default (app) => {
	const booksController = new BooksController(app.datasource.models.Books);

	app.route('/books*').all(app.auth.authenticate());

	app.route('/books')
	.get(async (req, res) => {
		const response = await booksController.getAll();
		res.status(response.statusCode).json(response.data);
	})
	.post(async (req, res) => {
		const response = await booksController.create(req.body);
		res.status(response.statusCode).json(response.data);
	});

	app.route('/books/:id')
	.get(async (req, res) => {
		const response = await booksController.getById(req.params);
		res.status(response.statusCode).json(response.data);
	})
	.put(async (req, res) => {
		const response = await booksController.update(req.body, req.params);
		res.status(response.statusCode).json(response.data);
	})
	.delete(async (req, res) => {
		const response = await booksController.delete(req.params);
		res.status(response.statusCode).json(response.data);
	});
};
