import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: clientes_historico', () => {
	const clientes_historico = app.datasource.models.clientes_historico;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultclientes_historico = {
		"acao":"7s521",
		"operadoresFk":287,
		"descricao":"jc1fir",
		"createdAt":"24g1i",
		"clientesFk":156
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
			clientes_historico
			.destroy({ where: {} })
			.then(() => clientes_historico.create(defaultclientes_historico))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /clientes_historico', () => {
		it('should return a list of clientes_historico', done => {
			request
			.get('/clientes_historico')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultclientes_historico.id);
				expect(res.body[0].acao).to.eql(defaultclientes_historico.acao);
				expect(res.body[0].operadoresFk).to.eql(defaultclientes_historico.operadoresFk);
				expect(res.body[0].descricao).to.eql(defaultclientes_historico.descricao);
				expect(res.body[0].createdAt).to.eql(defaultclientes_historico.createdAt);
				expect(res.body[0].clientesFk).to.eql(defaultclientes_historico.clientesFk);
				done(err);
			});
		});
	});

	describe('GET /clientes_historico/{id}', () => {
		it('should return a clientes_historico by id', done => {
			request
			.get('/clientes_historico/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultclientes_historico.id);
				expect(res.body.acao).to.eql(defaultclientes_historico.acao);
				expect(res.body.operadoresFk).to.eql(defaultclientes_historico.operadoresFk);
				expect(res.body.descricao).to.eql(defaultclientes_historico.descricao);
				expect(res.body.createdAt).to.eql(defaultclientes_historico.createdAt);
				expect(res.body.clientesFk).to.eql(defaultclientes_historico.clientesFk);
				done(err);
			});
		});
	});

	describe('POST /clientes_historico', () => {
		it('should post a clientes_historico', done => {
			const clientes_historic = {
		"acao":"2rlece",
		"operadoresFk":185,
		"descricao":"rc40lk",
		"createdAt":"18r7rm",
		"clientesFk":400
	};

			request
			.post('/clientes_historico')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_historic)
			.end((err, res) => {
				expect(res.body.id).to.eql(clientes_historico.id);
				expect(res.body.acao).to.eql(clientes_historico.acao);
				expect(res.body.operadoresFk).to.eql(clientes_historico.operadoresFk);
				expect(res.body.descricao).to.eql(clientes_historico.descricao);
				expect(res.body.createdAt).to.eql(clientes_historico.createdAt);
				expect(res.body.clientesFk).to.eql(clientes_historico.clientesFk);
				done(err);
			});
		});
	});

	describe('PUT /clientes_historico/{id}', () => {
		it('should update a clientes_historico', done => {
			const clientes_historic = {
		"id":"1",
		"acao":"i8hs15",
		"operadoresFk":909,
		"descricao":"367yc",
		"createdAt":"1us4in",
		"clientesFk":752
	};

			request
			.put('/clientes_historico/1')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_historic)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /clientes_historico/{id}', () => {
		it('should delete a clientes_historico', done => {
			request
			.delete('/clientes_historico/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
