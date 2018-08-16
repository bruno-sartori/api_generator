import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: conectividade', () => {
	const conectividade = app.datasource.models.conectividade;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconectividade = {
		"login":"plzxxr",
		"senha":"czrdza",
		"snmac":"qoqmku",
		"enderecosFk":605,
		"status":"3u3s32",
		"createdAt":"ndae1p",
		"updatedAt":"x9y57"
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
			conectividade
			.destroy({ where: {} })
			.then(() => conectividade.create(defaultconectividade))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /conectividade', () => {
		it('should return a list of conectividade', done => {
			request
			.get('/conectividade')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconectividade.id);
				expect(res.body[0].login).to.eql(defaultconectividade.login);
				expect(res.body[0].senha).to.eql(defaultconectividade.senha);
				expect(res.body[0].snmac).to.eql(defaultconectividade.snmac);
				expect(res.body[0].enderecosFk).to.eql(defaultconectividade.enderecosFk);
				expect(res.body[0].status).to.eql(defaultconectividade.status);
				expect(res.body[0].createdAt).to.eql(defaultconectividade.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultconectividade.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /conectividade/{id}', () => {
		it('should return a conectividade by id', done => {
			request
			.get('/conectividade/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconectividade.id);
				expect(res.body.login).to.eql(defaultconectividade.login);
				expect(res.body.senha).to.eql(defaultconectividade.senha);
				expect(res.body.snmac).to.eql(defaultconectividade.snmac);
				expect(res.body.enderecosFk).to.eql(defaultconectividade.enderecosFk);
				expect(res.body.status).to.eql(defaultconectividade.status);
				expect(res.body.createdAt).to.eql(defaultconectividade.createdAt);
				expect(res.body.updatedAt).to.eql(defaultconectividade.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /conectividade', () => {
		it('should post a conectividade', done => {
			const conectividad = {
		"login":"uka3qs",
		"senha":"dmw8j5",
		"snmac":"i2unxc",
		"enderecosFk":940,
		"status":"251jto",
		"createdAt":"3k06t",
		"updatedAt":"zcqzi"
	};

			request
			.post('/conectividade')
			.set('Authorization', `JWT ${token}`)
			.send(conectividad)
			.end((err, res) => {
				expect(res.body.id).to.eql(conectividade.id);
				expect(res.body.login).to.eql(conectividade.login);
				expect(res.body.senha).to.eql(conectividade.senha);
				expect(res.body.snmac).to.eql(conectividade.snmac);
				expect(res.body.enderecosFk).to.eql(conectividade.enderecosFk);
				expect(res.body.status).to.eql(conectividade.status);
				expect(res.body.createdAt).to.eql(conectividade.createdAt);
				expect(res.body.updatedAt).to.eql(conectividade.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /conectividade/{id}', () => {
		it('should update a conectividade', done => {
			const conectividad = {
		"id":"1",
		"login":"k21amr",
		"senha":"vuj8",
		"snmac":"ae69xk",
		"enderecosFk":442,
		"status":"kyux0l",
		"createdAt":"3zgb3",
		"updatedAt":"0j309c"
	};

			request
			.put('/conectividade/1')
			.set('Authorization', `JWT ${token}`)
			.send(conectividad)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /conectividade/{id}', () => {
		it('should delete a conectividade', done => {
			request
			.delete('/conectividade/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
