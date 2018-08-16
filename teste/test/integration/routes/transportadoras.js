import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: transportadoras', () => {
	const transportadoras = app.datasource.models.transportadoras;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttransportadoras = {
		"nomeFantasia":"rlm0gw",
		"tipoPessoa":"gfe1e",
		"obs":"j2wkbe",
		"status":"wvd74",
		"createdAt":"de71r",
		"updatedAt":"snww7g3",
		"pessoasFk":695
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
			transportadoras
			.destroy({ where: {} })
			.then(() => transportadoras.create(defaulttransportadoras))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /transportadoras', () => {
		it('should return a list of transportadoras', done => {
			request
			.get('/transportadoras')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttransportadoras.id);
				expect(res.body[0].nomeFantasia).to.eql(defaulttransportadoras.nomeFantasia);
				expect(res.body[0].tipoPessoa).to.eql(defaulttransportadoras.tipoPessoa);
				expect(res.body[0].obs).to.eql(defaulttransportadoras.obs);
				expect(res.body[0].status).to.eql(defaulttransportadoras.status);
				expect(res.body[0].createdAt).to.eql(defaulttransportadoras.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttransportadoras.updatedAt);
				expect(res.body[0].pessoasFk).to.eql(defaulttransportadoras.pessoasFk);
				done(err);
			});
		});
	});

	describe('GET /transportadoras/{id}', () => {
		it('should return a transportadoras by id', done => {
			request
			.get('/transportadoras/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttransportadoras.id);
				expect(res.body.nomeFantasia).to.eql(defaulttransportadoras.nomeFantasia);
				expect(res.body.tipoPessoa).to.eql(defaulttransportadoras.tipoPessoa);
				expect(res.body.obs).to.eql(defaulttransportadoras.obs);
				expect(res.body.status).to.eql(defaulttransportadoras.status);
				expect(res.body.createdAt).to.eql(defaulttransportadoras.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttransportadoras.updatedAt);
				expect(res.body.pessoasFk).to.eql(defaulttransportadoras.pessoasFk);
				done(err);
			});
		});
	});

	describe('POST /transportadoras', () => {
		it('should post a transportadoras', done => {
			const transportadora = {
		"nomeFantasia":"nidt6r",
		"tipoPessoa":"1xcuhn",
		"obs":"df6p88",
		"status":"2v5yc",
		"createdAt":"8yz8ir",
		"updatedAt":"z03qmf",
		"pessoasFk":278
	};

			request
			.post('/transportadoras')
			.set('Authorization', `JWT ${token}`)
			.send(transportadora)
			.end((err, res) => {
				expect(res.body.id).to.eql(transportadoras.id);
				expect(res.body.nomeFantasia).to.eql(transportadoras.nomeFantasia);
				expect(res.body.tipoPessoa).to.eql(transportadoras.tipoPessoa);
				expect(res.body.obs).to.eql(transportadoras.obs);
				expect(res.body.status).to.eql(transportadoras.status);
				expect(res.body.createdAt).to.eql(transportadoras.createdAt);
				expect(res.body.updatedAt).to.eql(transportadoras.updatedAt);
				expect(res.body.pessoasFk).to.eql(transportadoras.pessoasFk);
				done(err);
			});
		});
	});

	describe('PUT /transportadoras/{id}', () => {
		it('should update a transportadoras', done => {
			const transportadora = {
		"id":"1",
		"nomeFantasia":"829yxb",
		"tipoPessoa":"j5d3be",
		"obs":"cxnbkc",
		"status":"d6i5ij",
		"createdAt":"zf6h8m",
		"updatedAt":"5afq6r",
		"pessoasFk":224
	};

			request
			.put('/transportadoras/1')
			.set('Authorization', `JWT ${token}`)
			.send(transportadora)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /transportadoras/{id}', () => {
		it('should delete a transportadoras', done => {
			request
			.delete('/transportadoras/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
