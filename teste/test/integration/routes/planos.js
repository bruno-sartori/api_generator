import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: planos', () => {
	const planos = app.datasource.models.planos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultplanos = {
		"nome":"1ypd2",
		"valor":"cp0w",
		"periodo":437,
		"prioridade":841,
		"obs":"fbiu2",
		"status":"d2k5mc",
		"createdAt":"jjv0mf",
		"updatedAt":"rf759i"
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
			planos
			.destroy({ where: {} })
			.then(() => planos.create(defaultplanos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /planos', () => {
		it('should return a list of planos', done => {
			request
			.get('/planos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultplanos.id);
				expect(res.body[0].nome).to.eql(defaultplanos.nome);
				expect(res.body[0].valor).to.eql(defaultplanos.valor);
				expect(res.body[0].periodo).to.eql(defaultplanos.periodo);
				expect(res.body[0].prioridade).to.eql(defaultplanos.prioridade);
				expect(res.body[0].obs).to.eql(defaultplanos.obs);
				expect(res.body[0].status).to.eql(defaultplanos.status);
				expect(res.body[0].createdAt).to.eql(defaultplanos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultplanos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /planos/{id}', () => {
		it('should return a planos by id', done => {
			request
			.get('/planos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultplanos.id);
				expect(res.body.nome).to.eql(defaultplanos.nome);
				expect(res.body.valor).to.eql(defaultplanos.valor);
				expect(res.body.periodo).to.eql(defaultplanos.periodo);
				expect(res.body.prioridade).to.eql(defaultplanos.prioridade);
				expect(res.body.obs).to.eql(defaultplanos.obs);
				expect(res.body.status).to.eql(defaultplanos.status);
				expect(res.body.createdAt).to.eql(defaultplanos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultplanos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /planos', () => {
		it('should post a planos', done => {
			const plano = {
		"nome":"2o971s",
		"valor":"p3ohpf",
		"periodo":965,
		"prioridade":107,
		"obs":"zzo9nj",
		"status":"tvrkfk",
		"createdAt":"gft6q",
		"updatedAt":"5xgmq"
	};

			request
			.post('/planos')
			.set('Authorization', `JWT ${token}`)
			.send(plano)
			.end((err, res) => {
				expect(res.body.id).to.eql(planos.id);
				expect(res.body.nome).to.eql(planos.nome);
				expect(res.body.valor).to.eql(planos.valor);
				expect(res.body.periodo).to.eql(planos.periodo);
				expect(res.body.prioridade).to.eql(planos.prioridade);
				expect(res.body.obs).to.eql(planos.obs);
				expect(res.body.status).to.eql(planos.status);
				expect(res.body.createdAt).to.eql(planos.createdAt);
				expect(res.body.updatedAt).to.eql(planos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /planos/{id}', () => {
		it('should update a planos', done => {
			const plano = {
		"id":"1",
		"nome":"eizecp",
		"valor":"tx2e5e",
		"periodo":358,
		"prioridade":829,
		"obs":"e5dkkb",
		"status":"28kyg8",
		"createdAt":"69jwkl",
		"updatedAt":"8f1c6k"
	};

			request
			.put('/planos/1')
			.set('Authorization', `JWT ${token}`)
			.send(plano)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /planos/{id}', () => {
		it('should delete a planos', done => {
			request
			.delete('/planos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
