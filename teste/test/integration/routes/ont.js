import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: ont', () => {
	const ont = app.datasource.models.ont;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultont = {
		"nome":"hqe0m",
		"createdAt":"3mz72w",
		"updatedAt":"x79dt7"
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
			ont
			.destroy({ where: {} })
			.then(() => ont.create(defaultont))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /ont', () => {
		it('should return a list of ont', done => {
			request
			.get('/ont')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultont.id);
				expect(res.body[0].nome).to.eql(defaultont.nome);
				expect(res.body[0].createdAt).to.eql(defaultont.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultont.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /ont/{id}', () => {
		it('should return a ont by id', done => {
			request
			.get('/ont/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultont.id);
				expect(res.body.nome).to.eql(defaultont.nome);
				expect(res.body.createdAt).to.eql(defaultont.createdAt);
				expect(res.body.updatedAt).to.eql(defaultont.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /ont', () => {
		it('should post a ont', done => {
			const on = {
		"nome":"510eo9",
		"createdAt":"e2n2oq",
		"updatedAt":"ziomj5"
	};

			request
			.post('/ont')
			.set('Authorization', `JWT ${token}`)
			.send(on)
			.end((err, res) => {
				expect(res.body.id).to.eql(ont.id);
				expect(res.body.nome).to.eql(ont.nome);
				expect(res.body.createdAt).to.eql(ont.createdAt);
				expect(res.body.updatedAt).to.eql(ont.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /ont/{id}', () => {
		it('should update a ont', done => {
			const on = {
		"id":"1",
		"nome":"ubpo5",
		"createdAt":"t1qm1b",
		"updatedAt":"8cjm2"
	};

			request
			.put('/ont/1')
			.set('Authorization', `JWT ${token}`)
			.send(on)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /ont/{id}', () => {
		it('should delete a ont', done => {
			request
			.delete('/ont/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
