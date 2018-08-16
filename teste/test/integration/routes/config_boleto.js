import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: config_boleto', () => {
	const config_boleto = app.datasource.models.config_boleto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfig_boleto = {
		"custoVariavelParcelaFk":357,
		"obs":"hpgowi"
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
			config_boleto
			.destroy({ where: {} })
			.then(() => config_boleto.create(defaultconfig_boleto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /config_boleto', () => {
		it('should return a list of config_boleto', done => {
			request
			.get('/config_boleto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfig_boleto.id);
				expect(res.body[0].custoVariavelParcelaFk).to.eql(defaultconfig_boleto.custoVariavelParcelaFk);
				expect(res.body[0].obs).to.eql(defaultconfig_boleto.obs);
				done(err);
			});
		});
	});

	describe('GET /config_boleto/{id}', () => {
		it('should return a config_boleto by id', done => {
			request
			.get('/config_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfig_boleto.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(defaultconfig_boleto.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(defaultconfig_boleto.obs);
				done(err);
			});
		});
	});

	describe('POST /config_boleto', () => {
		it('should post a config_boleto', done => {
			const config_bolet = {
		"custoVariavelParcelaFk":957,
		"obs":"3t69td"
	};

			request
			.post('/config_boleto')
			.set('Authorization', `JWT ${token}`)
			.send(config_bolet)
			.end((err, res) => {
				expect(res.body.id).to.eql(config_boleto.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(config_boleto.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(config_boleto.obs);
				done(err);
			});
		});
	});

	describe('PUT /config_boleto/{id}', () => {
		it('should update a config_boleto', done => {
			const config_bolet = {
		"id":"1",
		"custoVariavelParcelaFk":197,
		"obs":"4rix16"
	};

			request
			.put('/config_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.send(config_bolet)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /config_boleto/{id}', () => {
		it('should delete a config_boleto', done => {
			request
			.delete('/config_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
