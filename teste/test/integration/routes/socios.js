import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: socios', () => {
	const socios = app.datasource.models.socios;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultsocios = {
		"dataNascimento":"a3tsz2",
		"agencia":"oh2ki",
		"conta":"jjj6sp",
		"obs":"p8vwc",
		"status":"cfrva7",
		"createdAt":"qsnk7g",
		"updatedAt":"3wj67u",
		"pessoasFk":425,
		"federatedBaseBancoFk":72
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
			socios
			.destroy({ where: {} })
			.then(() => socios.create(defaultsocios))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /socios', () => {
		it('should return a list of socios', done => {
			request
			.get('/socios')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultsocios.id);
				expect(res.body[0].dataNascimento).to.eql(defaultsocios.dataNascimento);
				expect(res.body[0].agencia).to.eql(defaultsocios.agencia);
				expect(res.body[0].conta).to.eql(defaultsocios.conta);
				expect(res.body[0].obs).to.eql(defaultsocios.obs);
				expect(res.body[0].status).to.eql(defaultsocios.status);
				expect(res.body[0].createdAt).to.eql(defaultsocios.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultsocios.updatedAt);
				expect(res.body[0].pessoasFk).to.eql(defaultsocios.pessoasFk);
				expect(res.body[0].federatedBaseBancoFk).to.eql(defaultsocios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('GET /socios/{id}', () => {
		it('should return a socios by id', done => {
			request
			.get('/socios/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultsocios.id);
				expect(res.body.dataNascimento).to.eql(defaultsocios.dataNascimento);
				expect(res.body.agencia).to.eql(defaultsocios.agencia);
				expect(res.body.conta).to.eql(defaultsocios.conta);
				expect(res.body.obs).to.eql(defaultsocios.obs);
				expect(res.body.status).to.eql(defaultsocios.status);
				expect(res.body.createdAt).to.eql(defaultsocios.createdAt);
				expect(res.body.updatedAt).to.eql(defaultsocios.updatedAt);
				expect(res.body.pessoasFk).to.eql(defaultsocios.pessoasFk);
				expect(res.body.federatedBaseBancoFk).to.eql(defaultsocios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('POST /socios', () => {
		it('should post a socios', done => {
			const socio = {
		"dataNascimento":"ndha4s",
		"agencia":"zhfzqp",
		"conta":"9ua18a",
		"obs":"6pj7tq",
		"status":"phwh3h",
		"createdAt":"56mn98d",
		"updatedAt":"8z1ga",
		"pessoasFk":518,
		"federatedBaseBancoFk":5
	};

			request
			.post('/socios')
			.set('Authorization', `JWT ${token}`)
			.send(socio)
			.end((err, res) => {
				expect(res.body.id).to.eql(socios.id);
				expect(res.body.dataNascimento).to.eql(socios.dataNascimento);
				expect(res.body.agencia).to.eql(socios.agencia);
				expect(res.body.conta).to.eql(socios.conta);
				expect(res.body.obs).to.eql(socios.obs);
				expect(res.body.status).to.eql(socios.status);
				expect(res.body.createdAt).to.eql(socios.createdAt);
				expect(res.body.updatedAt).to.eql(socios.updatedAt);
				expect(res.body.pessoasFk).to.eql(socios.pessoasFk);
				expect(res.body.federatedBaseBancoFk).to.eql(socios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('PUT /socios/{id}', () => {
		it('should update a socios', done => {
			const socio = {
		"id":"1",
		"dataNascimento":"4rfu9j",
		"agencia":"epdmxq",
		"conta":"qy4u2x",
		"obs":"3ijeob",
		"status":"v5y1b",
		"createdAt":"ixls7",
		"updatedAt":"f9poi",
		"pessoasFk":814,
		"federatedBaseBancoFk":125
	};

			request
			.put('/socios/1')
			.set('Authorization', `JWT ${token}`)
			.send(socio)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /socios/{id}', () => {
		it('should delete a socios', done => {
			request
			.delete('/socios/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
