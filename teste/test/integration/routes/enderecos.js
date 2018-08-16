import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: enderecos', () => {
	const enderecos = app.datasource.models.enderecos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultenderecos = {
		"numero":"fvgwhi",
		"complemento":"zygn8",
		"pontoReferencia":"7jvjhp",
		"cep":"v350c3l",
		"createdAt":"t3o5vp",
		"updatedAt":"yo5vt",
		"logradourosFk":369
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
			enderecos
			.destroy({ where: {} })
			.then(() => enderecos.create(defaultenderecos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /enderecos', () => {
		it('should return a list of enderecos', done => {
			request
			.get('/enderecos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultenderecos.id);
				expect(res.body[0].numero).to.eql(defaultenderecos.numero);
				expect(res.body[0].complemento).to.eql(defaultenderecos.complemento);
				expect(res.body[0].pontoReferencia).to.eql(defaultenderecos.pontoReferencia);
				expect(res.body[0].cep).to.eql(defaultenderecos.cep);
				expect(res.body[0].createdAt).to.eql(defaultenderecos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultenderecos.updatedAt);
				expect(res.body[0].logradourosFk).to.eql(defaultenderecos.logradourosFk);
				done(err);
			});
		});
	});

	describe('GET /enderecos/{id}', () => {
		it('should return a enderecos by id', done => {
			request
			.get('/enderecos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultenderecos.id);
				expect(res.body.numero).to.eql(defaultenderecos.numero);
				expect(res.body.complemento).to.eql(defaultenderecos.complemento);
				expect(res.body.pontoReferencia).to.eql(defaultenderecos.pontoReferencia);
				expect(res.body.cep).to.eql(defaultenderecos.cep);
				expect(res.body.createdAt).to.eql(defaultenderecos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultenderecos.updatedAt);
				expect(res.body.logradourosFk).to.eql(defaultenderecos.logradourosFk);
				done(err);
			});
		});
	});

	describe('POST /enderecos', () => {
		it('should post a enderecos', done => {
			const endereco = {
		"numero":"87qbqp",
		"complemento":"amytjp",
		"pontoReferencia":"r6vff",
		"cep":"xu9l8j",
		"createdAt":"mmnrsb",
		"updatedAt":"1wpxy",
		"logradourosFk":54
	};

			request
			.post('/enderecos')
			.set('Authorization', `JWT ${token}`)
			.send(endereco)
			.end((err, res) => {
				expect(res.body.id).to.eql(enderecos.id);
				expect(res.body.numero).to.eql(enderecos.numero);
				expect(res.body.complemento).to.eql(enderecos.complemento);
				expect(res.body.pontoReferencia).to.eql(enderecos.pontoReferencia);
				expect(res.body.cep).to.eql(enderecos.cep);
				expect(res.body.createdAt).to.eql(enderecos.createdAt);
				expect(res.body.updatedAt).to.eql(enderecos.updatedAt);
				expect(res.body.logradourosFk).to.eql(enderecos.logradourosFk);
				done(err);
			});
		});
	});

	describe('PUT /enderecos/{id}', () => {
		it('should update a enderecos', done => {
			const endereco = {
		"id":"1",
		"numero":"83p27c",
		"complemento":"0amtok",
		"pontoReferencia":"eftji9",
		"cep":"3bmqw5",
		"createdAt":"7q8kpp",
		"updatedAt":"bfhgb6",
		"logradourosFk":227
	};

			request
			.put('/enderecos/1')
			.set('Authorization', `JWT ${token}`)
			.send(endereco)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /enderecos/{id}', () => {
		it('should delete a enderecos', done => {
			request
			.delete('/enderecos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
