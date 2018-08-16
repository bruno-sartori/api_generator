import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos_tipos', () => {
	const atendimentos_tipos = app.datasource.models.atendimentos_tipos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos_tipos = {
		"meta":"hi4nqn",
		"atendimentosFk":"3aywcb",
		"tiposAtendimentosFk":493,
		"clientesPlanosFk":305
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
			atendimentos_tipos
			.destroy({ where: {} })
			.then(() => atendimentos_tipos.create(defaultatendimentos_tipos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos_tipos', () => {
		it('should return a list of atendimentos_tipos', done => {
			request
			.get('/atendimentos_tipos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos_tipos.id);
				expect(res.body[0].meta).to.eql(defaultatendimentos_tipos.meta);
				expect(res.body[0].atendimentosFk).to.eql(defaultatendimentos_tipos.atendimentosFk);
				expect(res.body[0].tiposAtendimentosFk).to.eql(defaultatendimentos_tipos.tiposAtendimentosFk);
				expect(res.body[0].clientesPlanosFk).to.eql(defaultatendimentos_tipos.clientesPlanosFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos_tipos/{id}', () => {
		it('should return a atendimentos_tipos by id', done => {
			request
			.get('/atendimentos_tipos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos_tipos.id);
				expect(res.body.meta).to.eql(defaultatendimentos_tipos.meta);
				expect(res.body.atendimentosFk).to.eql(defaultatendimentos_tipos.atendimentosFk);
				expect(res.body.tiposAtendimentosFk).to.eql(defaultatendimentos_tipos.tiposAtendimentosFk);
				expect(res.body.clientesPlanosFk).to.eql(defaultatendimentos_tipos.clientesPlanosFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos_tipos', () => {
		it('should post a atendimentos_tipos', done => {
			const atendimentos_tipo = {
		"meta":"8sosum",
		"atendimentosFk":"9vevsd",
		"tiposAtendimentosFk":205,
		"clientesPlanosFk":144
	};

			request
			.post('/atendimentos_tipos')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tipo)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos_tipos.id);
				expect(res.body.meta).to.eql(atendimentos_tipos.meta);
				expect(res.body.atendimentosFk).to.eql(atendimentos_tipos.atendimentosFk);
				expect(res.body.tiposAtendimentosFk).to.eql(atendimentos_tipos.tiposAtendimentosFk);
				expect(res.body.clientesPlanosFk).to.eql(atendimentos_tipos.clientesPlanosFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos_tipos/{id}', () => {
		it('should update a atendimentos_tipos', done => {
			const atendimentos_tipo = {
		"id":"1",
		"meta":"bcmy1d",
		"atendimentosFk":"gg7t2p",
		"tiposAtendimentosFk":25,
		"clientesPlanosFk":844
	};

			request
			.put('/atendimentos_tipos/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tipo)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos_tipos/{id}', () => {
		it('should delete a atendimentos_tipos', done => {
			request
			.delete('/atendimentos_tipos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
