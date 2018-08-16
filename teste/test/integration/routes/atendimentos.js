import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos', () => {
	const atendimentos = app.datasource.models.atendimentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos = {
		"titulo":"t33w6u",
		"createdAt":"p26qnb",
		"updatedAt":"ef2fvr",
		"scheduledAt":"og7lyq",
		"canceledAt":"e1c68w",
		"closedAt":"i43fvb",
		"clientesFk":954,
		"operadoresFk":24
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
			atendimentos
			.destroy({ where: {} })
			.then(() => atendimentos.create(defaultatendimentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos', () => {
		it('should return a list of atendimentos', done => {
			request
			.get('/atendimentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos.id);
				expect(res.body[0].titulo).to.eql(defaultatendimentos.titulo);
				expect(res.body[0].createdAt).to.eql(defaultatendimentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultatendimentos.updatedAt);
				expect(res.body[0].scheduledAt).to.eql(defaultatendimentos.scheduledAt);
				expect(res.body[0].canceledAt).to.eql(defaultatendimentos.canceledAt);
				expect(res.body[0].closedAt).to.eql(defaultatendimentos.closedAt);
				expect(res.body[0].clientesFk).to.eql(defaultatendimentos.clientesFk);
				expect(res.body[0].operadoresFk).to.eql(defaultatendimentos.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos/{id}', () => {
		it('should return a atendimentos by id', done => {
			request
			.get('/atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos.id);
				expect(res.body.titulo).to.eql(defaultatendimentos.titulo);
				expect(res.body.createdAt).to.eql(defaultatendimentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultatendimentos.updatedAt);
				expect(res.body.scheduledAt).to.eql(defaultatendimentos.scheduledAt);
				expect(res.body.canceledAt).to.eql(defaultatendimentos.canceledAt);
				expect(res.body.closedAt).to.eql(defaultatendimentos.closedAt);
				expect(res.body.clientesFk).to.eql(defaultatendimentos.clientesFk);
				expect(res.body.operadoresFk).to.eql(defaultatendimentos.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos', () => {
		it('should post a atendimentos', done => {
			const atendimento = {
		"titulo":"htukdq",
		"createdAt":"7z8s2",
		"updatedAt":"haesjf",
		"scheduledAt":"d4bin",
		"canceledAt":"bvd5c",
		"closedAt":"x57oej",
		"clientesFk":891,
		"operadoresFk":136
	};

			request
			.post('/atendimentos')
			.set('Authorization', `JWT ${token}`)
			.send(atendimento)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos.id);
				expect(res.body.titulo).to.eql(atendimentos.titulo);
				expect(res.body.createdAt).to.eql(atendimentos.createdAt);
				expect(res.body.updatedAt).to.eql(atendimentos.updatedAt);
				expect(res.body.scheduledAt).to.eql(atendimentos.scheduledAt);
				expect(res.body.canceledAt).to.eql(atendimentos.canceledAt);
				expect(res.body.closedAt).to.eql(atendimentos.closedAt);
				expect(res.body.clientesFk).to.eql(atendimentos.clientesFk);
				expect(res.body.operadoresFk).to.eql(atendimentos.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos/{id}', () => {
		it('should update a atendimentos', done => {
			const atendimento = {
		"id":"1",
		"titulo":"ox2mpa",
		"createdAt":"bdk3hb",
		"updatedAt":"fkfc5k",
		"scheduledAt":"k6kxt",
		"canceledAt":"fy219i",
		"closedAt":"cbck2f",
		"clientesFk":976,
		"operadoresFk":890
	};

			request
			.put('/atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos/{id}', () => {
		it('should delete a atendimentos', done => {
			request
			.delete('/atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
