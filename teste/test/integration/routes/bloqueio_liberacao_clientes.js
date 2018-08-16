import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: bloqueio_liberacao_clientes', () => {
	const bloqueio_liberacao_clientes = app.datasource.models.bloqueio_liberacao_clientes;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultbloqueio_liberacao_clientes = {
		"clientesFk":912,
		"bloqueioLiberacaoFk":891
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
			bloqueio_liberacao_clientes
			.destroy({ where: {} })
			.then(() => bloqueio_liberacao_clientes.create(defaultbloqueio_liberacao_clientes))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /bloqueio_liberacao_clientes', () => {
		it('should return a list of bloqueio_liberacao_clientes', done => {
			request
			.get('/bloqueio_liberacao_clientes')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].clientesFk).to.eql(defaultbloqueio_liberacao_clientes.clientesFk);
				expect(res.body[0].bloqueioLiberacaoFk).to.eql(defaultbloqueio_liberacao_clientes.bloqueioLiberacaoFk);
				done(err);
			});
		});
	});

	describe('GET /bloqueio_liberacao_clientes/{id}', () => {
		it('should return a bloqueio_liberacao_clientes by id', done => {
			request
			.get('/bloqueio_liberacao_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.clientesFk).to.eql(defaultbloqueio_liberacao_clientes.clientesFk);
				expect(res.body.bloqueioLiberacaoFk).to.eql(defaultbloqueio_liberacao_clientes.bloqueioLiberacaoFk);
				done(err);
			});
		});
	});

	describe('POST /bloqueio_liberacao_clientes', () => {
		it('should post a bloqueio_liberacao_clientes', done => {
			const bloqueio_liberacao_cliente = {
		"clientesFk":239,
		"bloqueioLiberacaoFk":858
	};

			request
			.post('/bloqueio_liberacao_clientes')
			.set('Authorization', `JWT ${token}`)
			.send(bloqueio_liberacao_cliente)
			.end((err, res) => {
				expect(res.body.clientesFk).to.eql(bloqueio_liberacao_clientes.clientesFk);
				expect(res.body.bloqueioLiberacaoFk).to.eql(bloqueio_liberacao_clientes.bloqueioLiberacaoFk);
				done(err);
			});
		});
	});

	describe('PUT /bloqueio_liberacao_clientes/{id}', () => {
		it('should update a bloqueio_liberacao_clientes', done => {
			const bloqueio_liberacao_cliente = {
		"clientesFk":200,
		"bloqueioLiberacaoFk":38
	};

			request
			.put('/bloqueio_liberacao_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.send(bloqueio_liberacao_cliente)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /bloqueio_liberacao_clientes/{id}', () => {
		it('should delete a bloqueio_liberacao_clientes', done => {
			request
			.delete('/bloqueio_liberacao_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
