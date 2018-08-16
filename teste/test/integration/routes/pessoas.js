import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: pessoas', () => {
	const pessoas = app.datasource.models.pessoas;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultpessoas = {
		"nome":"8fhr6n",
		"cpfCnpj":"0sktj",
		"rgIe":"iywmfr",
		"enderecosFk":760,
		"createdAt":"mfche",
		"updatedAt":"y0983q"
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
			pessoas
			.destroy({ where: {} })
			.then(() => pessoas.create(defaultpessoas))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /pessoas', () => {
		it('should return a list of pessoas', done => {
			request
			.get('/pessoas')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultpessoas.id);
				expect(res.body[0].nome).to.eql(defaultpessoas.nome);
				expect(res.body[0].cpfCnpj).to.eql(defaultpessoas.cpfCnpj);
				expect(res.body[0].rgIe).to.eql(defaultpessoas.rgIe);
				expect(res.body[0].enderecosFk).to.eql(defaultpessoas.enderecosFk);
				expect(res.body[0].createdAt).to.eql(defaultpessoas.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultpessoas.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /pessoas/{id}', () => {
		it('should return a pessoas by id', done => {
			request
			.get('/pessoas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultpessoas.id);
				expect(res.body.nome).to.eql(defaultpessoas.nome);
				expect(res.body.cpfCnpj).to.eql(defaultpessoas.cpfCnpj);
				expect(res.body.rgIe).to.eql(defaultpessoas.rgIe);
				expect(res.body.enderecosFk).to.eql(defaultpessoas.enderecosFk);
				expect(res.body.createdAt).to.eql(defaultpessoas.createdAt);
				expect(res.body.updatedAt).to.eql(defaultpessoas.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /pessoas', () => {
		it('should post a pessoas', done => {
			const pessoa = {
		"nome":"pau9el",
		"cpfCnpj":"1nl6t",
		"rgIe":"7zka6",
		"enderecosFk":43,
		"createdAt":"5ljncj",
		"updatedAt":"knc8vm"
	};

			request
			.post('/pessoas')
			.set('Authorization', `JWT ${token}`)
			.send(pessoa)
			.end((err, res) => {
				expect(res.body.id).to.eql(pessoas.id);
				expect(res.body.nome).to.eql(pessoas.nome);
				expect(res.body.cpfCnpj).to.eql(pessoas.cpfCnpj);
				expect(res.body.rgIe).to.eql(pessoas.rgIe);
				expect(res.body.enderecosFk).to.eql(pessoas.enderecosFk);
				expect(res.body.createdAt).to.eql(pessoas.createdAt);
				expect(res.body.updatedAt).to.eql(pessoas.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /pessoas/{id}', () => {
		it('should update a pessoas', done => {
			const pessoa = {
		"id":"1",
		"nome":"53dd9r",
		"cpfCnpj":"hvzgy",
		"rgIe":"bjvgj9",
		"enderecosFk":840,
		"createdAt":"kli1m",
		"updatedAt":"kdafu"
	};

			request
			.put('/pessoas/1')
			.set('Authorization', `JWT ${token}`)
			.send(pessoa)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /pessoas/{id}', () => {
		it('should delete a pessoas', done => {
			request
			.delete('/pessoas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
