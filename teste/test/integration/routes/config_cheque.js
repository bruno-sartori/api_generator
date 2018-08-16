import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: config_cheque', () => {
	const config_cheque = app.datasource.models.config_cheque;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfig_cheque = {
		"custoVariavelParcelaFk":474,
		"obs":"gvxqu",
		"dataEmissao":"wc1xlk",
		"dataPredatado":"509xdq",
		"chequesFk":496
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
			config_cheque
			.destroy({ where: {} })
			.then(() => config_cheque.create(defaultconfig_cheque))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /config_cheque', () => {
		it('should return a list of config_cheque', done => {
			request
			.get('/config_cheque')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfig_cheque.id);
				expect(res.body[0].custoVariavelParcelaFk).to.eql(defaultconfig_cheque.custoVariavelParcelaFk);
				expect(res.body[0].obs).to.eql(defaultconfig_cheque.obs);
				expect(res.body[0].dataEmissao).to.eql(defaultconfig_cheque.dataEmissao);
				expect(res.body[0].dataPredatado).to.eql(defaultconfig_cheque.dataPredatado);
				expect(res.body[0].chequesFk).to.eql(defaultconfig_cheque.chequesFk);
				done(err);
			});
		});
	});

	describe('GET /config_cheque/{id}', () => {
		it('should return a config_cheque by id', done => {
			request
			.get('/config_cheque/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfig_cheque.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(defaultconfig_cheque.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(defaultconfig_cheque.obs);
				expect(res.body.dataEmissao).to.eql(defaultconfig_cheque.dataEmissao);
				expect(res.body.dataPredatado).to.eql(defaultconfig_cheque.dataPredatado);
				expect(res.body.chequesFk).to.eql(defaultconfig_cheque.chequesFk);
				done(err);
			});
		});
	});

	describe('POST /config_cheque', () => {
		it('should post a config_cheque', done => {
			const config_chequ = {
		"custoVariavelParcelaFk":764,
		"obs":"i4t5qk",
		"dataEmissao":"uuw4t",
		"dataPredatado":"42xj3",
		"chequesFk":112
	};

			request
			.post('/config_cheque')
			.set('Authorization', `JWT ${token}`)
			.send(config_chequ)
			.end((err, res) => {
				expect(res.body.id).to.eql(config_cheque.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(config_cheque.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(config_cheque.obs);
				expect(res.body.dataEmissao).to.eql(config_cheque.dataEmissao);
				expect(res.body.dataPredatado).to.eql(config_cheque.dataPredatado);
				expect(res.body.chequesFk).to.eql(config_cheque.chequesFk);
				done(err);
			});
		});
	});

	describe('PUT /config_cheque/{id}', () => {
		it('should update a config_cheque', done => {
			const config_chequ = {
		"id":"1",
		"custoVariavelParcelaFk":260,
		"obs":"q8qwn",
		"dataEmissao":"m320kj",
		"dataPredatado":"6whniu",
		"chequesFk":495
	};

			request
			.put('/config_cheque/1')
			.set('Authorization', `JWT ${token}`)
			.send(config_chequ)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /config_cheque/{id}', () => {
		it('should delete a config_cheque', done => {
			request
			.delete('/config_cheque/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
