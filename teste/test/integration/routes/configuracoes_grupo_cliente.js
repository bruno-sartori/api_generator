import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: configuracoes_grupo_cliente', () => {
	const configuracoes_grupo_cliente = app.datasource.models.configuracoes_grupo_cliente;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfiguracoes_grupo_cliente = {
		"grupoClientesFk":583
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
			configuracoes_grupo_cliente
			.destroy({ where: {} })
			.then(() => configuracoes_grupo_cliente.create(defaultconfiguracoes_grupo_cliente))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /configuracoes_grupo_cliente', () => {
		it('should return a list of configuracoes_grupo_cliente', done => {
			request
			.get('/configuracoes_grupo_cliente')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfiguracoes_grupo_cliente.id);
				expect(res.body[0].grupoClientesFk).to.eql(defaultconfiguracoes_grupo_cliente.grupoClientesFk);
				done(err);
			});
		});
	});

	describe('GET /configuracoes_grupo_cliente/{id}', () => {
		it('should return a configuracoes_grupo_cliente by id', done => {
			request
			.get('/configuracoes_grupo_cliente/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfiguracoes_grupo_cliente.id);
				expect(res.body.grupoClientesFk).to.eql(defaultconfiguracoes_grupo_cliente.grupoClientesFk);
				done(err);
			});
		});
	});

	describe('POST /configuracoes_grupo_cliente', () => {
		it('should post a configuracoes_grupo_cliente', done => {
			const configuracoes_grupo_client = {
		"grupoClientesFk":25
	};

			request
			.post('/configuracoes_grupo_cliente')
			.set('Authorization', `JWT ${token}`)
			.send(configuracoes_grupo_client)
			.end((err, res) => {
				expect(res.body.id).to.eql(configuracoes_grupo_cliente.id);
				expect(res.body.grupoClientesFk).to.eql(configuracoes_grupo_cliente.grupoClientesFk);
				done(err);
			});
		});
	});

	describe('PUT /configuracoes_grupo_cliente/{id}', () => {
		it('should update a configuracoes_grupo_cliente', done => {
			const configuracoes_grupo_client = {
		"id":"1",
		"grupoClientesFk":698
	};

			request
			.put('/configuracoes_grupo_cliente/1')
			.set('Authorization', `JWT ${token}`)
			.send(configuracoes_grupo_client)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /configuracoes_grupo_cliente/{id}', () => {
		it('should delete a configuracoes_grupo_cliente', done => {
			request
			.delete('/configuracoes_grupo_cliente/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
