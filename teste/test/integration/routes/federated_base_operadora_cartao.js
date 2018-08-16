import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_base_operadora_cartao', () => {
	const federated_base_operadora_cartao = app.datasource.models.federated_base_operadora_cartao;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_base_operadora_cartao = {
		"nome":"ibpal",
		"status":"gfw3cb",
		"createdAt":"564xfk",
		"updatedAt":"u0wc0c"
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
			federated_base_operadora_cartao
			.destroy({ where: {} })
			.then(() => federated_base_operadora_cartao.create(defaultfederated_base_operadora_cartao))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_base_operadora_cartao', () => {
		it('should return a list of federated_base_operadora_cartao', done => {
			request
			.get('/federated_base_operadora_cartao')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_base_operadora_cartao.id);
				expect(res.body[0].nome).to.eql(defaultfederated_base_operadora_cartao.nome);
				expect(res.body[0].status).to.eql(defaultfederated_base_operadora_cartao.status);
				expect(res.body[0].createdAt).to.eql(defaultfederated_base_operadora_cartao.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfederated_base_operadora_cartao.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /federated_base_operadora_cartao/{id}', () => {
		it('should return a federated_base_operadora_cartao by id', done => {
			request
			.get('/federated_base_operadora_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_base_operadora_cartao.id);
				expect(res.body.nome).to.eql(defaultfederated_base_operadora_cartao.nome);
				expect(res.body.status).to.eql(defaultfederated_base_operadora_cartao.status);
				expect(res.body.createdAt).to.eql(defaultfederated_base_operadora_cartao.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfederated_base_operadora_cartao.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /federated_base_operadora_cartao', () => {
		it('should post a federated_base_operadora_cartao', done => {
			const federated_base_operadora_carta = {
		"nome":"9skvph",
		"status":"ni0iof",
		"createdAt":"7ogl3s",
		"updatedAt":"kfo047"
	};

			request
			.post('/federated_base_operadora_cartao')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_operadora_carta)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_base_operadora_cartao.id);
				expect(res.body.nome).to.eql(federated_base_operadora_cartao.nome);
				expect(res.body.status).to.eql(federated_base_operadora_cartao.status);
				expect(res.body.createdAt).to.eql(federated_base_operadora_cartao.createdAt);
				expect(res.body.updatedAt).to.eql(federated_base_operadora_cartao.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /federated_base_operadora_cartao/{id}', () => {
		it('should update a federated_base_operadora_cartao', done => {
			const federated_base_operadora_carta = {
		"id":"1",
		"nome":"mkr33t",
		"status":"2wobe",
		"createdAt":"mm08m",
		"updatedAt":"tdou7e"
	};

			request
			.put('/federated_base_operadora_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_operadora_carta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_base_operadora_cartao/{id}', () => {
		it('should delete a federated_base_operadora_cartao', done => {
			request
			.delete('/federated_base_operadora_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
