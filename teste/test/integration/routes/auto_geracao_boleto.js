import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: auto_geracao_boleto', () => {
	const auto_geracao_boleto = app.datasource.models.auto_geracao_boleto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultauto_geracao_boleto = {
		"createdAt":"3mo13",
		"updatedAt":"g9xur6",
		"operadoresFk":497
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
			auto_geracao_boleto
			.destroy({ where: {} })
			.then(() => auto_geracao_boleto.create(defaultauto_geracao_boleto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /auto_geracao_boleto', () => {
		it('should return a list of auto_geracao_boleto', done => {
			request
			.get('/auto_geracao_boleto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultauto_geracao_boleto.id);
				expect(res.body[0].createdAt).to.eql(defaultauto_geracao_boleto.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultauto_geracao_boleto.updatedAt);
				expect(res.body[0].operadoresFk).to.eql(defaultauto_geracao_boleto.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /auto_geracao_boleto/{id}', () => {
		it('should return a auto_geracao_boleto by id', done => {
			request
			.get('/auto_geracao_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultauto_geracao_boleto.id);
				expect(res.body.createdAt).to.eql(defaultauto_geracao_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(defaultauto_geracao_boleto.updatedAt);
				expect(res.body.operadoresFk).to.eql(defaultauto_geracao_boleto.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /auto_geracao_boleto', () => {
		it('should post a auto_geracao_boleto', done => {
			const auto_geracao_bolet = {
		"createdAt":"vg7nd",
		"updatedAt":"7xx4kj",
		"operadoresFk":121
	};

			request
			.post('/auto_geracao_boleto')
			.set('Authorization', `JWT ${token}`)
			.send(auto_geracao_bolet)
			.end((err, res) => {
				expect(res.body.id).to.eql(auto_geracao_boleto.id);
				expect(res.body.createdAt).to.eql(auto_geracao_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(auto_geracao_boleto.updatedAt);
				expect(res.body.operadoresFk).to.eql(auto_geracao_boleto.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /auto_geracao_boleto/{id}', () => {
		it('should update a auto_geracao_boleto', done => {
			const auto_geracao_bolet = {
		"id":"1",
		"createdAt":"tu60v7",
		"updatedAt":"1jf9u4",
		"operadoresFk":838
	};

			request
			.put('/auto_geracao_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.send(auto_geracao_bolet)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /auto_geracao_boleto/{id}', () => {
		it('should delete a auto_geracao_boleto', done => {
			request
			.delete('/auto_geracao_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
