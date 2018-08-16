import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: clientes_anexo', () => {
	const clientes_anexo = app.datasource.models.clientes_anexo;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultclientes_anexo = {
		"name":"og7dj8",
		"extension":"wl7hb",
		"size":"lfydad",
		"createdAt":"tbta3g",
		"path":"0yibxr",
		"description":"c8lst2",
		"clientesFk":406,
		"operadoresFk":660
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
			clientes_anexo
			.destroy({ where: {} })
			.then(() => clientes_anexo.create(defaultclientes_anexo))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /clientes_anexo', () => {
		it('should return a list of clientes_anexo', done => {
			request
			.get('/clientes_anexo')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultclientes_anexo.id);
				expect(res.body[0].name).to.eql(defaultclientes_anexo.name);
				expect(res.body[0].extension).to.eql(defaultclientes_anexo.extension);
				expect(res.body[0].size).to.eql(defaultclientes_anexo.size);
				expect(res.body[0].createdAt).to.eql(defaultclientes_anexo.createdAt);
				expect(res.body[0].path).to.eql(defaultclientes_anexo.path);
				expect(res.body[0].description).to.eql(defaultclientes_anexo.description);
				expect(res.body[0].clientesFk).to.eql(defaultclientes_anexo.clientesFk);
				expect(res.body[0].operadoresFk).to.eql(defaultclientes_anexo.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /clientes_anexo/{id}', () => {
		it('should return a clientes_anexo by id', done => {
			request
			.get('/clientes_anexo/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultclientes_anexo.id);
				expect(res.body.name).to.eql(defaultclientes_anexo.name);
				expect(res.body.extension).to.eql(defaultclientes_anexo.extension);
				expect(res.body.size).to.eql(defaultclientes_anexo.size);
				expect(res.body.createdAt).to.eql(defaultclientes_anexo.createdAt);
				expect(res.body.path).to.eql(defaultclientes_anexo.path);
				expect(res.body.description).to.eql(defaultclientes_anexo.description);
				expect(res.body.clientesFk).to.eql(defaultclientes_anexo.clientesFk);
				expect(res.body.operadoresFk).to.eql(defaultclientes_anexo.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /clientes_anexo', () => {
		it('should post a clientes_anexo', done => {
			const clientes_anex = {
		"name":"e0gwe7",
		"extension":"0xq7s3s",
		"size":"0o7tsi",
		"createdAt":"ubds6q",
		"path":"r7hzih",
		"description":"3xt5v",
		"clientesFk":402,
		"operadoresFk":962
	};

			request
			.post('/clientes_anexo')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_anex)
			.end((err, res) => {
				expect(res.body.id).to.eql(clientes_anexo.id);
				expect(res.body.name).to.eql(clientes_anexo.name);
				expect(res.body.extension).to.eql(clientes_anexo.extension);
				expect(res.body.size).to.eql(clientes_anexo.size);
				expect(res.body.createdAt).to.eql(clientes_anexo.createdAt);
				expect(res.body.path).to.eql(clientes_anexo.path);
				expect(res.body.description).to.eql(clientes_anexo.description);
				expect(res.body.clientesFk).to.eql(clientes_anexo.clientesFk);
				expect(res.body.operadoresFk).to.eql(clientes_anexo.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /clientes_anexo/{id}', () => {
		it('should update a clientes_anexo', done => {
			const clientes_anex = {
		"id":"1",
		"name":"7fwo8m",
		"extension":"uyjsvv",
		"size":"hlgns9",
		"createdAt":"osxorl",
		"path":"z6ru01l",
		"description":"q42a8",
		"clientesFk":626,
		"operadoresFk":402
	};

			request
			.put('/clientes_anexo/1')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_anex)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /clientes_anexo/{id}', () => {
		it('should delete a clientes_anexo', done => {
			request
			.delete('/clientes_anexo/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
