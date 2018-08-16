import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: logradouros', () => {
	const logradouros = app.datasource.models.logradouros;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultlogradouros = {
		"logradouro":"jsugsn",
		"status":"ealgc",
		"createdAt":"leqvf",
		"updatedAt":"uclqs",
		"bairrosFk":163
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
			logradouros
			.destroy({ where: {} })
			.then(() => logradouros.create(defaultlogradouros))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /logradouros', () => {
		it('should return a list of logradouros', done => {
			request
			.get('/logradouros')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultlogradouros.id);
				expect(res.body[0].logradouro).to.eql(defaultlogradouros.logradouro);
				expect(res.body[0].status).to.eql(defaultlogradouros.status);
				expect(res.body[0].createdAt).to.eql(defaultlogradouros.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultlogradouros.updatedAt);
				expect(res.body[0].bairrosFk).to.eql(defaultlogradouros.bairrosFk);
				done(err);
			});
		});
	});

	describe('GET /logradouros/{id}', () => {
		it('should return a logradouros by id', done => {
			request
			.get('/logradouros/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultlogradouros.id);
				expect(res.body.logradouro).to.eql(defaultlogradouros.logradouro);
				expect(res.body.status).to.eql(defaultlogradouros.status);
				expect(res.body.createdAt).to.eql(defaultlogradouros.createdAt);
				expect(res.body.updatedAt).to.eql(defaultlogradouros.updatedAt);
				expect(res.body.bairrosFk).to.eql(defaultlogradouros.bairrosFk);
				done(err);
			});
		});
	});

	describe('POST /logradouros', () => {
		it('should post a logradouros', done => {
			const logradouro = {
		"logradouro":"b9nx8i",
		"status":"qpf5c",
		"createdAt":"tjvs28",
		"updatedAt":"9mz2xi",
		"bairrosFk":826
	};

			request
			.post('/logradouros')
			.set('Authorization', `JWT ${token}`)
			.send(logradouro)
			.end((err, res) => {
				expect(res.body.id).to.eql(logradouros.id);
				expect(res.body.logradouro).to.eql(logradouros.logradouro);
				expect(res.body.status).to.eql(logradouros.status);
				expect(res.body.createdAt).to.eql(logradouros.createdAt);
				expect(res.body.updatedAt).to.eql(logradouros.updatedAt);
				expect(res.body.bairrosFk).to.eql(logradouros.bairrosFk);
				done(err);
			});
		});
	});

	describe('PUT /logradouros/{id}', () => {
		it('should update a logradouros', done => {
			const logradouro = {
		"id":"1",
		"logradouro":"f12kjl",
		"status":"gxdpdm",
		"createdAt":"k9vs1k",
		"updatedAt":"xk7xrt",
		"bairrosFk":543
	};

			request
			.put('/logradouros/1')
			.set('Authorization', `JWT ${token}`)
			.send(logradouro)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /logradouros/{id}', () => {
		it('should delete a logradouros', done => {
			request
			.delete('/logradouros/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
