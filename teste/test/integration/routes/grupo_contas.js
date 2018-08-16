import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: grupo_contas', () => {
	const grupo_contas = app.datasource.models.grupo_contas;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultgrupo_contas = {
		"nome":"h1yp9v",
		"status":"xu4xgk",
		"createdAt":"wt95co",
		"updatedAt":"v2d8qn",
		"planoContasFk":585
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
			grupo_contas
			.destroy({ where: {} })
			.then(() => grupo_contas.create(defaultgrupo_contas))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /grupo_contas', () => {
		it('should return a list of grupo_contas', done => {
			request
			.get('/grupo_contas')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultgrupo_contas.id);
				expect(res.body[0].nome).to.eql(defaultgrupo_contas.nome);
				expect(res.body[0].status).to.eql(defaultgrupo_contas.status);
				expect(res.body[0].createdAt).to.eql(defaultgrupo_contas.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultgrupo_contas.updatedAt);
				expect(res.body[0].planoContasFk).to.eql(defaultgrupo_contas.planoContasFk);
				done(err);
			});
		});
	});

	describe('GET /grupo_contas/{id}', () => {
		it('should return a grupo_contas by id', done => {
			request
			.get('/grupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultgrupo_contas.id);
				expect(res.body.nome).to.eql(defaultgrupo_contas.nome);
				expect(res.body.status).to.eql(defaultgrupo_contas.status);
				expect(res.body.createdAt).to.eql(defaultgrupo_contas.createdAt);
				expect(res.body.updatedAt).to.eql(defaultgrupo_contas.updatedAt);
				expect(res.body.planoContasFk).to.eql(defaultgrupo_contas.planoContasFk);
				done(err);
			});
		});
	});

	describe('POST /grupo_contas', () => {
		it('should post a grupo_contas', done => {
			const grupo_conta = {
		"nome":"p5v7ef",
		"status":"rtbwxm",
		"createdAt":"ea9fzb",
		"updatedAt":"z9en97",
		"planoContasFk":437
	};

			request
			.post('/grupo_contas')
			.set('Authorization', `JWT ${token}`)
			.send(grupo_conta)
			.end((err, res) => {
				expect(res.body.id).to.eql(grupo_contas.id);
				expect(res.body.nome).to.eql(grupo_contas.nome);
				expect(res.body.status).to.eql(grupo_contas.status);
				expect(res.body.createdAt).to.eql(grupo_contas.createdAt);
				expect(res.body.updatedAt).to.eql(grupo_contas.updatedAt);
				expect(res.body.planoContasFk).to.eql(grupo_contas.planoContasFk);
				done(err);
			});
		});
	});

	describe('PUT /grupo_contas/{id}', () => {
		it('should update a grupo_contas', done => {
			const grupo_conta = {
		"id":"1",
		"nome":"b6mzy",
		"status":"2dvu6f",
		"createdAt":"gd08i",
		"updatedAt":"6yh5bf",
		"planoContasFk":174
	};

			request
			.put('/grupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.send(grupo_conta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /grupo_contas/{id}', () => {
		it('should delete a grupo_contas', done => {
			request
			.delete('/grupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
