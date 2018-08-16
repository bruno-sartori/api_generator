import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos_anexos', () => {
	const atendimentos_anexos = app.datasource.models.atendimentos_anexos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos_anexos = {
		"atendimentosFk":"8kx4i",
		"name":"1lso5j",
		"extension":"5lvft",
		"size":"6f1tgkn",
		"createdAt":"imt4b",
		"path":"qttq6g",
		"description":"ycisp",
		"operadoresFk":973
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
			atendimentos_anexos
			.destroy({ where: {} })
			.then(() => atendimentos_anexos.create(defaultatendimentos_anexos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos_anexos', () => {
		it('should return a list of atendimentos_anexos', done => {
			request
			.get('/atendimentos_anexos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos_anexos.id);
				expect(res.body[0].atendimentosFk).to.eql(defaultatendimentos_anexos.atendimentosFk);
				expect(res.body[0].name).to.eql(defaultatendimentos_anexos.name);
				expect(res.body[0].extension).to.eql(defaultatendimentos_anexos.extension);
				expect(res.body[0].size).to.eql(defaultatendimentos_anexos.size);
				expect(res.body[0].createdAt).to.eql(defaultatendimentos_anexos.createdAt);
				expect(res.body[0].path).to.eql(defaultatendimentos_anexos.path);
				expect(res.body[0].description).to.eql(defaultatendimentos_anexos.description);
				expect(res.body[0].operadoresFk).to.eql(defaultatendimentos_anexos.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos_anexos/{id}', () => {
		it('should return a atendimentos_anexos by id', done => {
			request
			.get('/atendimentos_anexos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos_anexos.id);
				expect(res.body.atendimentosFk).to.eql(defaultatendimentos_anexos.atendimentosFk);
				expect(res.body.name).to.eql(defaultatendimentos_anexos.name);
				expect(res.body.extension).to.eql(defaultatendimentos_anexos.extension);
				expect(res.body.size).to.eql(defaultatendimentos_anexos.size);
				expect(res.body.createdAt).to.eql(defaultatendimentos_anexos.createdAt);
				expect(res.body.path).to.eql(defaultatendimentos_anexos.path);
				expect(res.body.description).to.eql(defaultatendimentos_anexos.description);
				expect(res.body.operadoresFk).to.eql(defaultatendimentos_anexos.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos_anexos', () => {
		it('should post a atendimentos_anexos', done => {
			const atendimentos_anexo = {
		"atendimentosFk":"u6lhhv",
		"name":"ss3lu",
		"extension":"bc0kr",
		"size":"p409nf",
		"createdAt":"8zibsm",
		"path":"vp08s",
		"description":"me7cl",
		"operadoresFk":884
	};

			request
			.post('/atendimentos_anexos')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_anexo)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos_anexos.id);
				expect(res.body.atendimentosFk).to.eql(atendimentos_anexos.atendimentosFk);
				expect(res.body.name).to.eql(atendimentos_anexos.name);
				expect(res.body.extension).to.eql(atendimentos_anexos.extension);
				expect(res.body.size).to.eql(atendimentos_anexos.size);
				expect(res.body.createdAt).to.eql(atendimentos_anexos.createdAt);
				expect(res.body.path).to.eql(atendimentos_anexos.path);
				expect(res.body.description).to.eql(atendimentos_anexos.description);
				expect(res.body.operadoresFk).to.eql(atendimentos_anexos.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos_anexos/{id}', () => {
		it('should update a atendimentos_anexos', done => {
			const atendimentos_anexo = {
		"id":"1",
		"atendimentosFk":"qb7w3",
		"name":"uyigq5",
		"extension":"8e3wj7",
		"size":"3lqj2a",
		"createdAt":"pzcs57",
		"path":"80b2v",
		"description":"88j4pw",
		"operadoresFk":91
	};

			request
			.put('/atendimentos_anexos/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_anexo)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos_anexos/{id}', () => {
		it('should delete a atendimentos_anexos', done => {
			request
			.delete('/atendimentos_anexos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
