import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: operadoras_boleto', () => {
	const operadoras_boleto = app.datasource.models.operadoras_boleto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultoperadoras_boleto = {
		"convenio":"np9l3a",
		"carteira":"615leq",
		"agencia":"o65ga",
		"conta":"ksrxm",
		"obs":"gc2vr",
		"status":"adpxg",
		"createdAt":"wp88k",
		"updatedAt":"v38thm",
		"federatedBaseOperadoraBoletoFk":952
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
			operadoras_boleto
			.destroy({ where: {} })
			.then(() => operadoras_boleto.create(defaultoperadoras_boleto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /operadoras_boleto', () => {
		it('should return a list of operadoras_boleto', done => {
			request
			.get('/operadoras_boleto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultoperadoras_boleto.id);
				expect(res.body[0].convenio).to.eql(defaultoperadoras_boleto.convenio);
				expect(res.body[0].carteira).to.eql(defaultoperadoras_boleto.carteira);
				expect(res.body[0].agencia).to.eql(defaultoperadoras_boleto.agencia);
				expect(res.body[0].conta).to.eql(defaultoperadoras_boleto.conta);
				expect(res.body[0].obs).to.eql(defaultoperadoras_boleto.obs);
				expect(res.body[0].status).to.eql(defaultoperadoras_boleto.status);
				expect(res.body[0].createdAt).to.eql(defaultoperadoras_boleto.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultoperadoras_boleto.updatedAt);
				expect(res.body[0].federatedBaseOperadoraBoletoFk).to.eql(defaultoperadoras_boleto.federatedBaseOperadoraBoletoFk);
				done(err);
			});
		});
	});

	describe('GET /operadoras_boleto/{id}', () => {
		it('should return a operadoras_boleto by id', done => {
			request
			.get('/operadoras_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultoperadoras_boleto.id);
				expect(res.body.convenio).to.eql(defaultoperadoras_boleto.convenio);
				expect(res.body.carteira).to.eql(defaultoperadoras_boleto.carteira);
				expect(res.body.agencia).to.eql(defaultoperadoras_boleto.agencia);
				expect(res.body.conta).to.eql(defaultoperadoras_boleto.conta);
				expect(res.body.obs).to.eql(defaultoperadoras_boleto.obs);
				expect(res.body.status).to.eql(defaultoperadoras_boleto.status);
				expect(res.body.createdAt).to.eql(defaultoperadoras_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(defaultoperadoras_boleto.updatedAt);
				expect(res.body.federatedBaseOperadoraBoletoFk).to.eql(defaultoperadoras_boleto.federatedBaseOperadoraBoletoFk);
				done(err);
			});
		});
	});

	describe('POST /operadoras_boleto', () => {
		it('should post a operadoras_boleto', done => {
			const operadoras_bolet = {
		"convenio":"m1ntx",
		"carteira":"qsvizs",
		"agencia":"7fdsw",
		"conta":"9vzdad",
		"obs":"xg9le",
		"status":"8f7clb",
		"createdAt":"sz3xop",
		"updatedAt":"t6t54f",
		"federatedBaseOperadoraBoletoFk":151
	};

			request
			.post('/operadoras_boleto')
			.set('Authorization', `JWT ${token}`)
			.send(operadoras_bolet)
			.end((err, res) => {
				expect(res.body.id).to.eql(operadoras_boleto.id);
				expect(res.body.convenio).to.eql(operadoras_boleto.convenio);
				expect(res.body.carteira).to.eql(operadoras_boleto.carteira);
				expect(res.body.agencia).to.eql(operadoras_boleto.agencia);
				expect(res.body.conta).to.eql(operadoras_boleto.conta);
				expect(res.body.obs).to.eql(operadoras_boleto.obs);
				expect(res.body.status).to.eql(operadoras_boleto.status);
				expect(res.body.createdAt).to.eql(operadoras_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(operadoras_boleto.updatedAt);
				expect(res.body.federatedBaseOperadoraBoletoFk).to.eql(operadoras_boleto.federatedBaseOperadoraBoletoFk);
				done(err);
			});
		});
	});

	describe('PUT /operadoras_boleto/{id}', () => {
		it('should update a operadoras_boleto', done => {
			const operadoras_bolet = {
		"id":"1",
		"convenio":"s6ew9h",
		"carteira":"qdds9h",
		"agencia":"rtyoag",
		"conta":"rvg2r7",
		"obs":"n1zajv",
		"status":"cj447d",
		"createdAt":"vzhoef",
		"updatedAt":"qmc5o",
		"federatedBaseOperadoraBoletoFk":167
	};

			request
			.put('/operadoras_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.send(operadoras_bolet)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /operadoras_boleto/{id}', () => {
		it('should delete a operadoras_boleto', done => {
			request
			.delete('/operadoras_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
