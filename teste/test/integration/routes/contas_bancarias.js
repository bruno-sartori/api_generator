import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: contas_bancarias', () => {
	const contas_bancarias = app.datasource.models.contas_bancarias;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcontas_bancarias = {
		"agencia":"vquwe",
		"conta":"c7ifxp",
		"obs":"b8lh2d",
		"status":"hpcwyzc",
		"createdAt":"my1et5",
		"updatedAt":"xmff8q",
		"federatedBaseBancoFk":476
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
			contas_bancarias
			.destroy({ where: {} })
			.then(() => contas_bancarias.create(defaultcontas_bancarias))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /contas_bancarias', () => {
		it('should return a list of contas_bancarias', done => {
			request
			.get('/contas_bancarias')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcontas_bancarias.id);
				expect(res.body[0].agencia).to.eql(defaultcontas_bancarias.agencia);
				expect(res.body[0].conta).to.eql(defaultcontas_bancarias.conta);
				expect(res.body[0].obs).to.eql(defaultcontas_bancarias.obs);
				expect(res.body[0].status).to.eql(defaultcontas_bancarias.status);
				expect(res.body[0].createdAt).to.eql(defaultcontas_bancarias.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcontas_bancarias.updatedAt);
				expect(res.body[0].federatedBaseBancoFk).to.eql(defaultcontas_bancarias.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('GET /contas_bancarias/{id}', () => {
		it('should return a contas_bancarias by id', done => {
			request
			.get('/contas_bancarias/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcontas_bancarias.id);
				expect(res.body.agencia).to.eql(defaultcontas_bancarias.agencia);
				expect(res.body.conta).to.eql(defaultcontas_bancarias.conta);
				expect(res.body.obs).to.eql(defaultcontas_bancarias.obs);
				expect(res.body.status).to.eql(defaultcontas_bancarias.status);
				expect(res.body.createdAt).to.eql(defaultcontas_bancarias.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcontas_bancarias.updatedAt);
				expect(res.body.federatedBaseBancoFk).to.eql(defaultcontas_bancarias.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('POST /contas_bancarias', () => {
		it('should post a contas_bancarias', done => {
			const contas_bancaria = {
		"agencia":"9e5muh",
		"conta":"bv41d9",
		"obs":"sx7ju3",
		"status":"i528v",
		"createdAt":"bdhjsw",
		"updatedAt":"9w7sx",
		"federatedBaseBancoFk":655
	};

			request
			.post('/contas_bancarias')
			.set('Authorization', `JWT ${token}`)
			.send(contas_bancaria)
			.end((err, res) => {
				expect(res.body.id).to.eql(contas_bancarias.id);
				expect(res.body.agencia).to.eql(contas_bancarias.agencia);
				expect(res.body.conta).to.eql(contas_bancarias.conta);
				expect(res.body.obs).to.eql(contas_bancarias.obs);
				expect(res.body.status).to.eql(contas_bancarias.status);
				expect(res.body.createdAt).to.eql(contas_bancarias.createdAt);
				expect(res.body.updatedAt).to.eql(contas_bancarias.updatedAt);
				expect(res.body.federatedBaseBancoFk).to.eql(contas_bancarias.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('PUT /contas_bancarias/{id}', () => {
		it('should update a contas_bancarias', done => {
			const contas_bancaria = {
		"id":"1",
		"agencia":"ca3us",
		"conta":"lwrio",
		"obs":"6q87b",
		"status":"be7nci",
		"createdAt":"9drm8b",
		"updatedAt":"cg814p",
		"federatedBaseBancoFk":991
	};

			request
			.put('/contas_bancarias/1')
			.set('Authorization', `JWT ${token}`)
			.send(contas_bancaria)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /contas_bancarias/{id}', () => {
		it('should delete a contas_bancarias', done => {
			request
			.delete('/contas_bancarias/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
