import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: Books', () => {
	const Books = app.datasource.models.Books;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultBooks = {
		"name":"m7fw3"
	};

	let token;

	beforeEach(done => {
		User
		.destroy({ where: {} })
		.then(() => User.create({
		name: 'Bruno Sartori',
		email: 'brunosartori.webmaster@gmail.com',
		password: 'bukassas9',
		}))
		.then(user => {
			Books
			.destroy({ where: {} })
			.then(() => Books.create(defaultBooks))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /books', () => {
		it('should return a list of books', done => {
			request
			.get('/books')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultBooks.id);
				expect(res.body[0].name).to.eql(defaultBooks.name);
				done(err);
			});
		});
	});

	describe('GET /books/{id}', () => {
		it('should return a Books by id', done => {
			request
			.get('/books/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultBooks.id);
				expect(res.body.name).to.eql(defaultBooks.name);
				done(err);
			});
		});
	});

	describe('POST /books', () => {
		it('should post a Books', done => {
			const book = {
		"name":"p6a7g"
	};

			request
			.post('/books')
			.set('Authorization', `JWT ${token}`)
			.send(book)
			.end((err, res) => {
				expect(res.body.id).to.eql(books.id);
				expect(res.body.name).to.eql(books.name);
				done(err);
			});
		});
	});

	describe('PUT /books/{id}', () => {
		it('should update a books', done => {
			const book = {
		"id":"1",
		"name":"kb8bcj"
	};

			request
			.put('/books/1')
			.set('Authorization', `JWT ${token}`)
			.send(book)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /books/{id}', () => {
		it('should delete a books', done => {
			request
			.delete('/books/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
