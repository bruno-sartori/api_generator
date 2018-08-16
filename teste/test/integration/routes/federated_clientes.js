import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_clientes', () => {
	const federated_clientes = app.datasource.models.federated_clientes;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_clientes = {
		"tipoPessoa":"1m1ik7",
		"cpfCnpj":"as14wlw5nm",
		"nome":"jc2xw8",
		"login":"osm0s",
		"senha":"rt95iq",
		"status":"i7f10u",
		"createdAt":"2uowl7",
		"updatedAt":"d7ftxj"
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
			federated_clientes
			.destroy({ where: {} })
			.then(() => federated_clientes.create(defaultfederated_clientes))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_clientes', () => {
		it('should return a list of federated_clientes', done => {
			request
			.get('/federated_clientes')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_clientes.id);
				expect(res.body[0].tipoPessoa).to.eql(defaultfederated_clientes.tipoPessoa);
				expect(res.body[0].cpfCnpj).to.eql(defaultfederated_clientes.cpfCnpj);
				expect(res.body[0].nome).to.eql(defaultfederated_clientes.nome);
				expect(res.body[0].login).to.eql(defaultfederated_clientes.login);
				expect(res.body[0].senha).to.eql(defaultfederated_clientes.senha);
				expect(res.body[0].status).to.eql(defaultfederated_clientes.status);
				expect(res.body[0].createdAt).to.eql(defaultfederated_clientes.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfederated_clientes.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /federated_clientes/{id}', () => {
		it('should return a federated_clientes by id', done => {
			request
			.get('/federated_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_clientes.id);
				expect(res.body.tipoPessoa).to.eql(defaultfederated_clientes.tipoPessoa);
				expect(res.body.cpfCnpj).to.eql(defaultfederated_clientes.cpfCnpj);
				expect(res.body.nome).to.eql(defaultfederated_clientes.nome);
				expect(res.body.login).to.eql(defaultfederated_clientes.login);
				expect(res.body.senha).to.eql(defaultfederated_clientes.senha);
				expect(res.body.status).to.eql(defaultfederated_clientes.status);
				expect(res.body.createdAt).to.eql(defaultfederated_clientes.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfederated_clientes.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /federated_clientes', () => {
		it('should post a federated_clientes', done => {
			const federated_cliente = {
		"tipoPessoa":"b25rvm",
		"cpfCnpj":"beec0i",
		"nome":"xw0zut",
		"login":"ahy0b",
		"senha":"wy7o5i",
		"status":"4te1fs",
		"createdAt":"lt2i55",
		"updatedAt":"kig3a"
	};

			request
			.post('/federated_clientes')
			.set('Authorization', `JWT ${token}`)
			.send(federated_cliente)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_clientes.id);
				expect(res.body.tipoPessoa).to.eql(federated_clientes.tipoPessoa);
				expect(res.body.cpfCnpj).to.eql(federated_clientes.cpfCnpj);
				expect(res.body.nome).to.eql(federated_clientes.nome);
				expect(res.body.login).to.eql(federated_clientes.login);
				expect(res.body.senha).to.eql(federated_clientes.senha);
				expect(res.body.status).to.eql(federated_clientes.status);
				expect(res.body.createdAt).to.eql(federated_clientes.createdAt);
				expect(res.body.updatedAt).to.eql(federated_clientes.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /federated_clientes/{id}', () => {
		it('should update a federated_clientes', done => {
			const federated_cliente = {
		"id":"1",
		"tipoPessoa":"4vzzm9",
		"cpfCnpj":"jr0bcbp",
		"nome":"h56989",
		"login":"zdu6bs",
		"senha":"7fxg8",
		"status":"1s2e1s",
		"createdAt":"y8zm6e",
		"updatedAt":"1z1c62"
	};

			request
			.put('/federated_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_cliente)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_clientes/{id}', () => {
		it('should delete a federated_clientes', done => {
			request
			.delete('/federated_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
