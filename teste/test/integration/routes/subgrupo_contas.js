import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: subgrupo_contas', () => {
	const subgrupo_contas = app.datasource.models.subgrupo_contas;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultsubgrupo_contas = {
		"nome":"fh0guk",
		"status":"xrhvj",
		"createdAt":"orv1i9",
		"updatedAt":"al39jm",
		"grupoContasFk":665
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
			subgrupo_contas
			.destroy({ where: {} })
			.then(() => subgrupo_contas.create(defaultsubgrupo_contas))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /subgrupo_contas', () => {
		it('should return a list of subgrupo_contas', done => {
			request
			.get('/subgrupo_contas')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultsubgrupo_contas.id);
				expect(res.body[0].nome).to.eql(defaultsubgrupo_contas.nome);
				expect(res.body[0].status).to.eql(defaultsubgrupo_contas.status);
				expect(res.body[0].createdAt).to.eql(defaultsubgrupo_contas.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultsubgrupo_contas.updatedAt);
				expect(res.body[0].grupoContasFk).to.eql(defaultsubgrupo_contas.grupoContasFk);
				done(err);
			});
		});
	});

	describe('GET /subgrupo_contas/{id}', () => {
		it('should return a subgrupo_contas by id', done => {
			request
			.get('/subgrupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultsubgrupo_contas.id);
				expect(res.body.nome).to.eql(defaultsubgrupo_contas.nome);
				expect(res.body.status).to.eql(defaultsubgrupo_contas.status);
				expect(res.body.createdAt).to.eql(defaultsubgrupo_contas.createdAt);
				expect(res.body.updatedAt).to.eql(defaultsubgrupo_contas.updatedAt);
				expect(res.body.grupoContasFk).to.eql(defaultsubgrupo_contas.grupoContasFk);
				done(err);
			});
		});
	});

	describe('POST /subgrupo_contas', () => {
		it('should post a subgrupo_contas', done => {
			const subgrupo_conta = {
		"nome":"hs5fol",
		"status":"j15o8k",
		"createdAt":"v5ivso",
		"updatedAt":"r1v4yvh",
		"grupoContasFk":941
	};

			request
			.post('/subgrupo_contas')
			.set('Authorization', `JWT ${token}`)
			.send(subgrupo_conta)
			.end((err, res) => {
				expect(res.body.id).to.eql(subgrupo_contas.id);
				expect(res.body.nome).to.eql(subgrupo_contas.nome);
				expect(res.body.status).to.eql(subgrupo_contas.status);
				expect(res.body.createdAt).to.eql(subgrupo_contas.createdAt);
				expect(res.body.updatedAt).to.eql(subgrupo_contas.updatedAt);
				expect(res.body.grupoContasFk).to.eql(subgrupo_contas.grupoContasFk);
				done(err);
			});
		});
	});

	describe('PUT /subgrupo_contas/{id}', () => {
		it('should update a subgrupo_contas', done => {
			const subgrupo_conta = {
		"id":"1",
		"nome":"gnjldr",
		"status":"mjcegj",
		"createdAt":"slrykp",
		"updatedAt":"ozqpld",
		"grupoContasFk":824
	};

			request
			.put('/subgrupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.send(subgrupo_conta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /subgrupo_contas/{id}', () => {
		it('should delete a subgrupo_contas', done => {
			request
			.delete('/subgrupo_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
