import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_base_banco', () => {
	const federated_base_banco = app.datasource.models.federated_base_banco;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_base_banco = {
		"nome":"xd00gu",
		"codigo":"lgeo49",
		"status":"sdsaih",
		"createdAt":"adnfj",
		"updatedAt":"k3s9xi"
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
			federated_base_banco
			.destroy({ where: {} })
			.then(() => federated_base_banco.create(defaultfederated_base_banco))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_base_banco', () => {
		it('should return a list of federated_base_banco', done => {
			request
			.get('/federated_base_banco')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_base_banco.id);
				expect(res.body[0].nome).to.eql(defaultfederated_base_banco.nome);
				expect(res.body[0].codigo).to.eql(defaultfederated_base_banco.codigo);
				expect(res.body[0].status).to.eql(defaultfederated_base_banco.status);
				expect(res.body[0].createdAt).to.eql(defaultfederated_base_banco.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfederated_base_banco.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /federated_base_banco/{id}', () => {
		it('should return a federated_base_banco by id', done => {
			request
			.get('/federated_base_banco/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_base_banco.id);
				expect(res.body.nome).to.eql(defaultfederated_base_banco.nome);
				expect(res.body.codigo).to.eql(defaultfederated_base_banco.codigo);
				expect(res.body.status).to.eql(defaultfederated_base_banco.status);
				expect(res.body.createdAt).to.eql(defaultfederated_base_banco.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfederated_base_banco.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /federated_base_banco', () => {
		it('should post a federated_base_banco', done => {
			const federated_base_banc = {
		"nome":"89kz",
		"codigo":"gd9l2t",
		"status":"rzekd",
		"createdAt":"c9n0x",
		"updatedAt":"vivei"
	};

			request
			.post('/federated_base_banco')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_banc)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_base_banco.id);
				expect(res.body.nome).to.eql(federated_base_banco.nome);
				expect(res.body.codigo).to.eql(federated_base_banco.codigo);
				expect(res.body.status).to.eql(federated_base_banco.status);
				expect(res.body.createdAt).to.eql(federated_base_banco.createdAt);
				expect(res.body.updatedAt).to.eql(federated_base_banco.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /federated_base_banco/{id}', () => {
		it('should update a federated_base_banco', done => {
			const federated_base_banc = {
		"id":"1",
		"nome":"e91p3v",
		"codigo":"awctgb",
		"status":"n0u63",
		"createdAt":"w401fo",
		"updatedAt":"djnv5a"
	};

			request
			.put('/federated_base_banco/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_banc)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_base_banco/{id}', () => {
		it('should delete a federated_base_banco', done => {
			request
			.delete('/federated_base_banco/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
