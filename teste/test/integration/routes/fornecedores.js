import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: fornecedores', () => {
	const fornecedores = app.datasource.models.fornecedores;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfornecedores = {
		"nomeFantasia":"ta2g5b",
		"tipoPessoa":"w5z9u",
		"obs":"brn0p",
		"status":"wglhm9",
		"createdAt":"hb3qi",
		"updatedAt":"t210j",
		"pessoasFk":754
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
			fornecedores
			.destroy({ where: {} })
			.then(() => fornecedores.create(defaultfornecedores))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /fornecedores', () => {
		it('should return a list of fornecedores', done => {
			request
			.get('/fornecedores')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfornecedores.id);
				expect(res.body[0].nomeFantasia).to.eql(defaultfornecedores.nomeFantasia);
				expect(res.body[0].tipoPessoa).to.eql(defaultfornecedores.tipoPessoa);
				expect(res.body[0].obs).to.eql(defaultfornecedores.obs);
				expect(res.body[0].status).to.eql(defaultfornecedores.status);
				expect(res.body[0].createdAt).to.eql(defaultfornecedores.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfornecedores.updatedAt);
				expect(res.body[0].pessoasFk).to.eql(defaultfornecedores.pessoasFk);
				done(err);
			});
		});
	});

	describe('GET /fornecedores/{id}', () => {
		it('should return a fornecedores by id', done => {
			request
			.get('/fornecedores/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfornecedores.id);
				expect(res.body.nomeFantasia).to.eql(defaultfornecedores.nomeFantasia);
				expect(res.body.tipoPessoa).to.eql(defaultfornecedores.tipoPessoa);
				expect(res.body.obs).to.eql(defaultfornecedores.obs);
				expect(res.body.status).to.eql(defaultfornecedores.status);
				expect(res.body.createdAt).to.eql(defaultfornecedores.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfornecedores.updatedAt);
				expect(res.body.pessoasFk).to.eql(defaultfornecedores.pessoasFk);
				done(err);
			});
		});
	});

	describe('POST /fornecedores', () => {
		it('should post a fornecedores', done => {
			const fornecedore = {
		"nomeFantasia":"jybg6",
		"tipoPessoa":"nas8hx",
		"obs":"yu6x7jw",
		"status":"grgmi",
		"createdAt":"ibsrnm",
		"updatedAt":"665mvj",
		"pessoasFk":161
	};

			request
			.post('/fornecedores')
			.set('Authorization', `JWT ${token}`)
			.send(fornecedore)
			.end((err, res) => {
				expect(res.body.id).to.eql(fornecedores.id);
				expect(res.body.nomeFantasia).to.eql(fornecedores.nomeFantasia);
				expect(res.body.tipoPessoa).to.eql(fornecedores.tipoPessoa);
				expect(res.body.obs).to.eql(fornecedores.obs);
				expect(res.body.status).to.eql(fornecedores.status);
				expect(res.body.createdAt).to.eql(fornecedores.createdAt);
				expect(res.body.updatedAt).to.eql(fornecedores.updatedAt);
				expect(res.body.pessoasFk).to.eql(fornecedores.pessoasFk);
				done(err);
			});
		});
	});

	describe('PUT /fornecedores/{id}', () => {
		it('should update a fornecedores', done => {
			const fornecedore = {
		"id":"1",
		"nomeFantasia":"xxxf8j",
		"tipoPessoa":"gjck9",
		"obs":"ii1uwd",
		"status":"g2vbde",
		"createdAt":"i6257",
		"updatedAt":"oqehch",
		"pessoasFk":131
	};

			request
			.put('/fornecedores/1')
			.set('Authorization', `JWT ${token}`)
			.send(fornecedore)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /fornecedores/{id}', () => {
		it('should delete a fornecedores', done => {
			request
			.delete('/fornecedores/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
