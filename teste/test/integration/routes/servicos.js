import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: servicos', () => {
	const servicos = app.datasource.models.servicos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultservicos = {
		"nome":"g9gi6d",
		"valor":"k1m47r",
		"status":"sptxy",
		"createdAt":"zqkdgq",
		"updatedAt":"724krj"
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
			servicos
			.destroy({ where: {} })
			.then(() => servicos.create(defaultservicos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /servicos', () => {
		it('should return a list of servicos', done => {
			request
			.get('/servicos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultservicos.id);
				expect(res.body[0].nome).to.eql(defaultservicos.nome);
				expect(res.body[0].valor).to.eql(defaultservicos.valor);
				expect(res.body[0].status).to.eql(defaultservicos.status);
				expect(res.body[0].createdAt).to.eql(defaultservicos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultservicos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /servicos/{id}', () => {
		it('should return a servicos by id', done => {
			request
			.get('/servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultservicos.id);
				expect(res.body.nome).to.eql(defaultservicos.nome);
				expect(res.body.valor).to.eql(defaultservicos.valor);
				expect(res.body.status).to.eql(defaultservicos.status);
				expect(res.body.createdAt).to.eql(defaultservicos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultservicos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /servicos', () => {
		it('should post a servicos', done => {
			const servico = {
		"nome":"kljdo",
		"valor":"494lgs",
		"status":"kfhrbq",
		"createdAt":"hfsf5",
		"updatedAt":"kngev"
	};

			request
			.post('/servicos')
			.set('Authorization', `JWT ${token}`)
			.send(servico)
			.end((err, res) => {
				expect(res.body.id).to.eql(servicos.id);
				expect(res.body.nome).to.eql(servicos.nome);
				expect(res.body.valor).to.eql(servicos.valor);
				expect(res.body.status).to.eql(servicos.status);
				expect(res.body.createdAt).to.eql(servicos.createdAt);
				expect(res.body.updatedAt).to.eql(servicos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /servicos/{id}', () => {
		it('should update a servicos', done => {
			const servico = {
		"id":"1",
		"nome":"nxshas",
		"valor":"qpy41d",
		"status":"qg6fad",
		"createdAt":"8qr1n",
		"updatedAt":"wc9fkse"
	};

			request
			.put('/servicos/1')
			.set('Authorization', `JWT ${token}`)
			.send(servico)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /servicos/{id}', () => {
		it('should delete a servicos', done => {
			request
			.delete('/servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
