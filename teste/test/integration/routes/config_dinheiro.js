import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: config_dinheiro', () => {
	const config_dinheiro = app.datasource.models.config_dinheiro;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfig_dinheiro = {
		"custoVariavelParcelaFk":752,
		"obs":"kugzst"
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
			config_dinheiro
			.destroy({ where: {} })
			.then(() => config_dinheiro.create(defaultconfig_dinheiro))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /config_dinheiro', () => {
		it('should return a list of config_dinheiro', done => {
			request
			.get('/config_dinheiro')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfig_dinheiro.id);
				expect(res.body[0].custoVariavelParcelaFk).to.eql(defaultconfig_dinheiro.custoVariavelParcelaFk);
				expect(res.body[0].obs).to.eql(defaultconfig_dinheiro.obs);
				done(err);
			});
		});
	});

	describe('GET /config_dinheiro/{id}', () => {
		it('should return a config_dinheiro by id', done => {
			request
			.get('/config_dinheiro/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfig_dinheiro.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(defaultconfig_dinheiro.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(defaultconfig_dinheiro.obs);
				done(err);
			});
		});
	});

	describe('POST /config_dinheiro', () => {
		it('should post a config_dinheiro', done => {
			const config_dinheir = {
		"custoVariavelParcelaFk":642,
		"obs":"gpmrnp"
	};

			request
			.post('/config_dinheiro')
			.set('Authorization', `JWT ${token}`)
			.send(config_dinheir)
			.end((err, res) => {
				expect(res.body.id).to.eql(config_dinheiro.id);
				expect(res.body.custoVariavelParcelaFk).to.eql(config_dinheiro.custoVariavelParcelaFk);
				expect(res.body.obs).to.eql(config_dinheiro.obs);
				done(err);
			});
		});
	});

	describe('PUT /config_dinheiro/{id}', () => {
		it('should update a config_dinheiro', done => {
			const config_dinheir = {
		"id":"1",
		"custoVariavelParcelaFk":852,
		"obs":"8re5zg"
	};

			request
			.put('/config_dinheiro/1')
			.set('Authorization', `JWT ${token}`)
			.send(config_dinheir)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /config_dinheiro/{id}', () => {
		it('should delete a config_dinheiro', done => {
			request
			.delete('/config_dinheiro/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
