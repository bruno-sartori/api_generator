import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: operadores', () => {
	const operadores = app.datasource.models.operadores;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultoperadores = {
		"login":"e3l9y4",
		"senha":"1fwvmu",
		"obs":"vgqarl",
		"status":"7ye2j8",
		"email":"cw8g5",
		"senhaEmail":"23s985",
		"hostImap":"e4upw",
		"createdAt":"yx9hj8",
		"updatedAt":"2t0g4l",
		"portalClientesFk":981,
		"pessoasFk":65,
		"criadoPor":"il8d1u"
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
			operadores
			.destroy({ where: {} })
			.then(() => operadores.create(defaultoperadores))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /operadores', () => {
		it('should return a list of operadores', done => {
			request
			.get('/operadores')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultoperadores.id);
				expect(res.body[0].login).to.eql(defaultoperadores.login);
				expect(res.body[0].senha).to.eql(defaultoperadores.senha);
				expect(res.body[0].obs).to.eql(defaultoperadores.obs);
				expect(res.body[0].status).to.eql(defaultoperadores.status);
				expect(res.body[0].email).to.eql(defaultoperadores.email);
				expect(res.body[0].senhaEmail).to.eql(defaultoperadores.senhaEmail);
				expect(res.body[0].hostImap).to.eql(defaultoperadores.hostImap);
				expect(res.body[0].createdAt).to.eql(defaultoperadores.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultoperadores.updatedAt);
				expect(res.body[0].portalClientesFk).to.eql(defaultoperadores.portalClientesFk);
				expect(res.body[0].pessoasFk).to.eql(defaultoperadores.pessoasFk);
				expect(res.body[0].criadoPor).to.eql(defaultoperadores.criadoPor);
				done(err);
			});
		});
	});

	describe('GET /operadores/{id}', () => {
		it('should return a operadores by id', done => {
			request
			.get('/operadores/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultoperadores.id);
				expect(res.body.login).to.eql(defaultoperadores.login);
				expect(res.body.senha).to.eql(defaultoperadores.senha);
				expect(res.body.obs).to.eql(defaultoperadores.obs);
				expect(res.body.status).to.eql(defaultoperadores.status);
				expect(res.body.email).to.eql(defaultoperadores.email);
				expect(res.body.senhaEmail).to.eql(defaultoperadores.senhaEmail);
				expect(res.body.hostImap).to.eql(defaultoperadores.hostImap);
				expect(res.body.createdAt).to.eql(defaultoperadores.createdAt);
				expect(res.body.updatedAt).to.eql(defaultoperadores.updatedAt);
				expect(res.body.portalClientesFk).to.eql(defaultoperadores.portalClientesFk);
				expect(res.body.pessoasFk).to.eql(defaultoperadores.pessoasFk);
				expect(res.body.criadoPor).to.eql(defaultoperadores.criadoPor);
				done(err);
			});
		});
	});

	describe('POST /operadores', () => {
		it('should post a operadores', done => {
			const operadore = {
		"login":"9xcn9a",
		"senha":"hwp89g",
		"obs":"7k0hc",
		"status":"exayvk",
		"email":"0la7lm",
		"senhaEmail":"tfy9nf",
		"hostImap":"1f8lcdq",
		"createdAt":"jlypsj",
		"updatedAt":"7uo2fg",
		"portalClientesFk":925,
		"pessoasFk":55,
		"criadoPor":"mmbl1k"
	};

			request
			.post('/operadores')
			.set('Authorization', `JWT ${token}`)
			.send(operadore)
			.end((err, res) => {
				expect(res.body.id).to.eql(operadores.id);
				expect(res.body.login).to.eql(operadores.login);
				expect(res.body.senha).to.eql(operadores.senha);
				expect(res.body.obs).to.eql(operadores.obs);
				expect(res.body.status).to.eql(operadores.status);
				expect(res.body.email).to.eql(operadores.email);
				expect(res.body.senhaEmail).to.eql(operadores.senhaEmail);
				expect(res.body.hostImap).to.eql(operadores.hostImap);
				expect(res.body.createdAt).to.eql(operadores.createdAt);
				expect(res.body.updatedAt).to.eql(operadores.updatedAt);
				expect(res.body.portalClientesFk).to.eql(operadores.portalClientesFk);
				expect(res.body.pessoasFk).to.eql(operadores.pessoasFk);
				expect(res.body.criadoPor).to.eql(operadores.criadoPor);
				done(err);
			});
		});
	});

	describe('PUT /operadores/{id}', () => {
		it('should update a operadores', done => {
			const operadore = {
		"id":"1",
		"login":"dnn5eo",
		"senha":"d9qnfl",
		"obs":"6fe0a8",
		"status":"a7xltp",
		"email":"v8gq7pn",
		"senhaEmail":"nksvti",
		"hostImap":"6rbsjw",
		"createdAt":"nbs6ig",
		"updatedAt":"ggzifkp",
		"portalClientesFk":733,
		"pessoasFk":607,
		"criadoPor":"ta6jam"
	};

			request
			.put('/operadores/1')
			.set('Authorization', `JWT ${token}`)
			.send(operadore)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /operadores/{id}', () => {
		it('should delete a operadores', done => {
			request
			.delete('/operadores/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
