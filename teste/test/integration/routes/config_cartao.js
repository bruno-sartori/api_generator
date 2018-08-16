import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: config_cartao', () => {
	const config_cartao = app.datasource.models.config_cartao;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfig_cartao = {
		"custoVariavelParcelaFk":918,
		"obs":"uz5us8",
		"numeroAutenticacao":"izz4x4",
		"cartoesFk":198
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
			config_cartao
			.destroy({ where: {} })
			.then(() => config_cartao.create(defaultconfig_cartao))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /config_cartao', () => {
		it('should return a list of config_cartao', done => {
			request
			.get('/config_cartao')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfig_cartao.id);
				expect(res.body[0].custoVariavelParcelaFk).to.eql(defaultconfig_cartao.custoVariavelParcelaFk);
				expect(res.body[0].obs).to.eql(defaultconfig_cartao.obs);
				expect(res.body[0].numeroAutenticacao).to.eql(defaultconfig_cartao.numeroAutenticacao);
				expect(res.body[0].cartoesFk).to.eql(defaultconfig_cartao.cartoesFk);
				done(err);
			});
		});
	});

	describe('GET /config_cartao/{id}', () => {
		it('should return a config_cartao by id', done => {
			request
			.get('/config_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfig_cartao.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(defaultconfig_cartao.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(defaultconfig_cartao.obs);
				expect(res.body.numeroAutenticacao).to.eql(defaultconfig_cartao.numeroAutenticacao);
				expect(res.body.cartoesFk).to.eql(defaultconfig_cartao.cartoesFk);
				done(err);
			});
		});
	});

	describe('POST /config_cartao', () => {
		it('should post a config_cartao', done => {
			const config_carta = {
		"custoVariavelParcelaFk":314,
		"obs":"68g5z",
		"numeroAutenticacao":"cefwom",
		"cartoesFk":330
	};

			request
			.post('/config_cartao')
			.set('Authorization', `JWT ${token}`)
			.send(config_carta)
			.end((err, res) => {
				expect(res.body.id).to.eql(config_cartao.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(config_cartao.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(config_cartao.obs);
				expect(res.body.numeroAutenticacao).to.eql(config_cartao.numeroAutenticacao);
				expect(res.body.cartoesFk).to.eql(config_cartao.cartoesFk);
				done(err);
			});
		});
	});

	describe('PUT /config_cartao/{id}', () => {
		it('should update a config_cartao', done => {
			const config_carta = {
		"id":"1",
		"custoVariavelParcelaFk":693,
		"obs":"kiywd",
		"numeroAutenticacao":"z15f",
		"cartoesFk":245
	};

			request
			.put('/config_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.send(config_carta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /config_cartao/{id}', () => {
		it('should delete a config_cartao', done => {
			request
			.delete('/config_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
