import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: pessoas_telefones', () => {
	const pessoas_telefones = app.datasource.models.pessoas_telefones;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultpessoas_telefones = {
		"telefone":"hdwflr",
		"tiposTelefonesFk":260,
		"pessoasFk":568,
		"status":"nktv4q",
		"createdAt":"b8ntgy",
		"updatedAt":"z2p38t"
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
			pessoas_telefones
			.destroy({ where: {} })
			.then(() => pessoas_telefones.create(defaultpessoas_telefones))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /pessoas_telefones', () => {
		it('should return a list of pessoas_telefones', done => {
			request
			.get('/pessoas_telefones')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultpessoas_telefones.id);
				expect(res.body[0].telefone).to.eql(defaultpessoas_telefones.telefone);
				expect(res.body[0].tiposTelefonesFk).to.eql(defaultpessoas_telefones.tiposTelefonesFk);
				expect(res.body[0].pessoasFk).to.eql(defaultpessoas_telefones.pessoasFk);
				expect(res.body[0].status).to.eql(defaultpessoas_telefones.status);
				expect(res.body[0].createdAt).to.eql(defaultpessoas_telefones.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultpessoas_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /pessoas_telefones/{id}', () => {
		it('should return a pessoas_telefones by id', done => {
			request
			.get('/pessoas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultpessoas_telefones.id);
				expect(res.body.telefone).to.eql(defaultpessoas_telefones.telefone);
				expect(res.body.tiposTelefonesFk).to.eql(defaultpessoas_telefones.tiposTelefonesFk);
				expect(res.body.pessoasFk).to.eql(defaultpessoas_telefones.pessoasFk);
				expect(res.body.status).to.eql(defaultpessoas_telefones.status);
				expect(res.body.createdAt).to.eql(defaultpessoas_telefones.createdAt);
				expect(res.body.updatedAt).to.eql(defaultpessoas_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /pessoas_telefones', () => {
		it('should post a pessoas_telefones', done => {
			const pessoas_telefone = {
		"telefone":"myucp",
		"tiposTelefonesFk":719,
		"pessoasFk":560,
		"status":"i49ee3o",
		"createdAt":"espr54",
		"updatedAt":"jrzqs"
	};

			request
			.post('/pessoas_telefones')
			.set('Authorization', `JWT ${token}`)
			.send(pessoas_telefone)
			.end((err, res) => {
				expect(res.body.id).to.eql(pessoas_telefones.id);
				expect(res.body.telefone).to.eql(pessoas_telefones.telefone);
				expect(res.body.tiposTelefonesFk).to.eql(pessoas_telefones.tiposTelefonesFk);
				expect(res.body.pessoasFk).to.eql(pessoas_telefones.pessoasFk);
				expect(res.body.status).to.eql(pessoas_telefones.status);
				expect(res.body.createdAt).to.eql(pessoas_telefones.createdAt);
				expect(res.body.updatedAt).to.eql(pessoas_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /pessoas_telefones/{id}', () => {
		it('should update a pessoas_telefones', done => {
			const pessoas_telefone = {
		"id":"1",
		"telefone":"rd494t",
		"tiposTelefonesFk":900,
		"pessoasFk":302,
		"status":"nb0c6",
		"createdAt":"vskmamb",
		"updatedAt":"cpmcab"
	};

			request
			.put('/pessoas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.send(pessoas_telefone)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /pessoas_telefones/{id}', () => {
		it('should delete a pessoas_telefones', done => {
			request
			.delete('/pessoas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
