import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: empresas', () => {
	const empresas = app.datasource.models.empresas;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultempresas = {
		"cnpj":"d2y4s",
		"razaoSocial":"2nllve",
		"nomeFantasia":"v6vzg9",
		"ie":"zunqor",
		"site":"o9rsn",
		"logoPath":"416zvs",
		"status":"53f3h9",
		"enderecosFk":63,
		"createdAt":"jhswpqc",
		"updatedAt":"6zfuo"
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
			empresas
			.destroy({ where: {} })
			.then(() => empresas.create(defaultempresas))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /empresas', () => {
		it('should return a list of empresas', done => {
			request
			.get('/empresas')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultempresas.id);
				expect(res.body[0].cnpj).to.eql(defaultempresas.cnpj);
				expect(res.body[0].razaoSocial).to.eql(defaultempresas.razaoSocial);
				expect(res.body[0].nomeFantasia).to.eql(defaultempresas.nomeFantasia);
				expect(res.body[0].ie).to.eql(defaultempresas.ie);
				expect(res.body[0].site).to.eql(defaultempresas.site);
				expect(res.body[0].logoPath).to.eql(defaultempresas.logoPath);
				expect(res.body[0].status).to.eql(defaultempresas.status);
				expect(res.body[0].enderecosFk).to.eql(defaultempresas.enderecosFk);
				expect(res.body[0].createdAt).to.eql(defaultempresas.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultempresas.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /empresas/{id}', () => {
		it('should return a empresas by id', done => {
			request
			.get('/empresas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultempresas.id);
				expect(res.body.cnpj).to.eql(defaultempresas.cnpj);
				expect(res.body.razaoSocial).to.eql(defaultempresas.razaoSocial);
				expect(res.body.nomeFantasia).to.eql(defaultempresas.nomeFantasia);
				expect(res.body.ie).to.eql(defaultempresas.ie);
				expect(res.body.site).to.eql(defaultempresas.site);
				expect(res.body.logoPath).to.eql(defaultempresas.logoPath);
				expect(res.body.status).to.eql(defaultempresas.status);
				expect(res.body.enderecosFk).to.eql(defaultempresas.enderecosFk);
				expect(res.body.createdAt).to.eql(defaultempresas.createdAt);
				expect(res.body.updatedAt).to.eql(defaultempresas.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /empresas', () => {
		it('should post a empresas', done => {
			const empresa = {
		"cnpj":"8su23e",
		"razaoSocial":"u2nrj5",
		"nomeFantasia":"jdwnf",
		"ie":"4igdze",
		"site":"pqf25",
		"logoPath":"9t3ila",
		"status":"vvhz1o",
		"enderecosFk":796,
		"createdAt":"gu96ij",
		"updatedAt":"sggxbj"
	};

			request
			.post('/empresas')
			.set('Authorization', `JWT ${token}`)
			.send(empresa)
			.end((err, res) => {
				expect(res.body.id).to.eql(empresas.id);
				expect(res.body.cnpj).to.eql(empresas.cnpj);
				expect(res.body.razaoSocial).to.eql(empresas.razaoSocial);
				expect(res.body.nomeFantasia).to.eql(empresas.nomeFantasia);
				expect(res.body.ie).to.eql(empresas.ie);
				expect(res.body.site).to.eql(empresas.site);
				expect(res.body.logoPath).to.eql(empresas.logoPath);
				expect(res.body.status).to.eql(empresas.status);
				expect(res.body.enderecosFk).to.eql(empresas.enderecosFk);
				expect(res.body.createdAt).to.eql(empresas.createdAt);
				expect(res.body.updatedAt).to.eql(empresas.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /empresas/{id}', () => {
		it('should update a empresas', done => {
			const empresa = {
		"id":"1",
		"cnpj":"jxpl1a",
		"razaoSocial":"lbcd64",
		"nomeFantasia":"ouo4s",
		"ie":"zp0bq",
		"site":"iz5zr",
		"logoPath":"q0362",
		"status":"0897sj",
		"enderecosFk":807,
		"createdAt":"m6d5rb",
		"updatedAt":"omaisq"
	};

			request
			.put('/empresas/1')
			.set('Authorization', `JWT ${token}`)
			.send(empresa)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /empresas/{id}', () => {
		it('should delete a empresas', done => {
			request
			.delete('/empresas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
