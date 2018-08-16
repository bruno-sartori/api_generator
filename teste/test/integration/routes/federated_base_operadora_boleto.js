import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_base_operadora_boleto', () => {
	const federated_base_operadora_boleto = app.datasource.models.federated_base_operadora_boleto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_base_operadora_boleto = {
		"nome":"nryd2i",
		"nomeGeracao":"9kawj",
		"camposNecessarios":"gul3gv",
		"status":"pziaca",
		"createdAt":"j588vh",
		"updatedAt":"9sdsz"
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
			federated_base_operadora_boleto
			.destroy({ where: {} })
			.then(() => federated_base_operadora_boleto.create(defaultfederated_base_operadora_boleto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_base_operadora_boleto', () => {
		it('should return a list of federated_base_operadora_boleto', done => {
			request
			.get('/federated_base_operadora_boleto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_base_operadora_boleto.id);
				expect(res.body[0].nome).to.eql(defaultfederated_base_operadora_boleto.nome);
				expect(res.body[0].nomeGeracao).to.eql(defaultfederated_base_operadora_boleto.nomeGeracao);
				expect(res.body[0].camposNecessarios).to.eql(defaultfederated_base_operadora_boleto.camposNecessarios);
				expect(res.body[0].status).to.eql(defaultfederated_base_operadora_boleto.status);
				expect(res.body[0].createdAt).to.eql(defaultfederated_base_operadora_boleto.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfederated_base_operadora_boleto.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /federated_base_operadora_boleto/{id}', () => {
		it('should return a federated_base_operadora_boleto by id', done => {
			request
			.get('/federated_base_operadora_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_base_operadora_boleto.id);
				expect(res.body.nome).to.eql(defaultfederated_base_operadora_boleto.nome);
				expect(res.body.nomeGeracao).to.eql(defaultfederated_base_operadora_boleto.nomeGeracao);
				expect(res.body.camposNecessarios).to.eql(defaultfederated_base_operadora_boleto.camposNecessarios);
				expect(res.body.status).to.eql(defaultfederated_base_operadora_boleto.status);
				expect(res.body.createdAt).to.eql(defaultfederated_base_operadora_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfederated_base_operadora_boleto.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /federated_base_operadora_boleto', () => {
		it('should post a federated_base_operadora_boleto', done => {
			const federated_base_operadora_bolet = {
		"nome":"8nslwe",
		"nomeGeracao":"iun1cb",
		"camposNecessarios":"bw8ds9",
		"status":"jk7t04",
		"createdAt":"66eoxf",
		"updatedAt":"9gurn6"
	};

			request
			.post('/federated_base_operadora_boleto')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_operadora_bolet)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_base_operadora_boleto.id);
				expect(res.body.nome).to.eql(federated_base_operadora_boleto.nome);
				expect(res.body.nomeGeracao).to.eql(federated_base_operadora_boleto.nomeGeracao);
				expect(res.body.camposNecessarios).to.eql(federated_base_operadora_boleto.camposNecessarios);
				expect(res.body.status).to.eql(federated_base_operadora_boleto.status);
				expect(res.body.createdAt).to.eql(federated_base_operadora_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(federated_base_operadora_boleto.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /federated_base_operadora_boleto/{id}', () => {
		it('should update a federated_base_operadora_boleto', done => {
			const federated_base_operadora_bolet = {
		"id":"1",
		"nome":"i459rv",
		"nomeGeracao":"jxnh5g",
		"camposNecessarios":"zdnmgq",
		"status":"v5o7wj",
		"createdAt":"s80o4k",
		"updatedAt":"ztye4d"
	};

			request
			.put('/federated_base_operadora_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_base_operadora_bolet)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_base_operadora_boleto/{id}', () => {
		it('should delete a federated_base_operadora_boleto', done => {
			request
			.delete('/federated_base_operadora_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
