import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: bloqueio_liberacao', () => {
	const bloqueio_liberacao = app.datasource.models.bloqueio_liberacao;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultbloqueio_liberacao = {
		"createdAt":"jwm0u",
		"operadoresFk":776,
		"tipo":"e7y9q",
		"totalExecutados":997
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
			bloqueio_liberacao
			.destroy({ where: {} })
			.then(() => bloqueio_liberacao.create(defaultbloqueio_liberacao))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /bloqueio_liberacao', () => {
		it('should return a list of bloqueio_liberacao', done => {
			request
			.get('/bloqueio_liberacao')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultbloqueio_liberacao.id);
				expect(res.body[0].createdAt).to.eql(defaultbloqueio_liberacao.createdAt);
				expect(res.body[0].operadoresFk).to.eql(defaultbloqueio_liberacao.operadoresFk);
				expect(res.body[0].tipo).to.eql(defaultbloqueio_liberacao.tipo);
				expect(res.body[0].totalExecutados).to.eql(defaultbloqueio_liberacao.totalExecutados);
				done(err);
			});
		});
	});

	describe('GET /bloqueio_liberacao/{id}', () => {
		it('should return a bloqueio_liberacao by id', done => {
			request
			.get('/bloqueio_liberacao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultbloqueio_liberacao.id);
				expect(res.body.createdAt).to.eql(defaultbloqueio_liberacao.createdAt);
				expect(res.body.operadoresFk).to.eql(defaultbloqueio_liberacao.operadoresFk);
				expect(res.body.tipo).to.eql(defaultbloqueio_liberacao.tipo);
				expect(res.body.totalExecutados).to.eql(defaultbloqueio_liberacao.totalExecutados);
				done(err);
			});
		});
	});

	describe('POST /bloqueio_liberacao', () => {
		it('should post a bloqueio_liberacao', done => {
			const bloqueio_liberaca = {
		"createdAt":"8yffwd",
		"operadoresFk":144,
		"tipo":"0yvudq",
		"totalExecutados":721
	};

			request
			.post('/bloqueio_liberacao')
			.set('Authorization', `JWT ${token}`)
			.send(bloqueio_liberaca)
			.end((err, res) => {
				expect(res.body.id).to.eql(bloqueio_liberacao.id);
				expect(res.body.createdAt).to.eql(bloqueio_liberacao.createdAt);
				expect(res.body.operadoresFk).to.eql(bloqueio_liberacao.operadoresFk);
				expect(res.body.tipo).to.eql(bloqueio_liberacao.tipo);
				expect(res.body.totalExecutados).to.eql(bloqueio_liberacao.totalExecutados);
				done(err);
			});
		});
	});

	describe('PUT /bloqueio_liberacao/{id}', () => {
		it('should update a bloqueio_liberacao', done => {
			const bloqueio_liberaca = {
		"id":"1",
		"createdAt":"fa04mc",
		"operadoresFk":335,
		"tipo":"k0imjm",
		"totalExecutados":334
	};

			request
			.put('/bloqueio_liberacao/1')
			.set('Authorization', `JWT ${token}`)
			.send(bloqueio_liberaca)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /bloqueio_liberacao/{id}', () => {
		it('should delete a bloqueio_liberacao', done => {
			request
			.delete('/bloqueio_liberacao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
