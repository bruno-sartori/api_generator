import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: operadores_departamentos', () => {
	const operadores_departamentos = app.datasource.models.operadores_departamentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultoperadores_departamentos = {
		"operadoresFk":147,
		"status":"kle6ih",
		"createdAt":"hfgvbi",
		"updatedAt":"e3f0zm",
		"departamentosFk":849,
		"tiposDepartamentosFk":792
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
			operadores_departamentos
			.destroy({ where: {} })
			.then(() => operadores_departamentos.create(defaultoperadores_departamentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /operadores_departamentos', () => {
		it('should return a list of operadores_departamentos', done => {
			request
			.get('/operadores_departamentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultoperadores_departamentos.id);
				expect(res.body[0].operadoresFk).to.eql(defaultoperadores_departamentos.operadoresFk);
				expect(res.body[0].status).to.eql(defaultoperadores_departamentos.status);
				expect(res.body[0].createdAt).to.eql(defaultoperadores_departamentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultoperadores_departamentos.updatedAt);
				expect(res.body[0].departamentosFk).to.eql(defaultoperadores_departamentos.departamentosFk);
				expect(res.body[0].tiposDepartamentosFk).to.eql(defaultoperadores_departamentos.tiposDepartamentosFk);
				done(err);
			});
		});
	});

	describe('GET /operadores_departamentos/{id}', () => {
		it('should return a operadores_departamentos by id', done => {
			request
			.get('/operadores_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultoperadores_departamentos.id);
				expect(res.body.operadoresFk).to.eql(defaultoperadores_departamentos.operadoresFk);
				expect(res.body.status).to.eql(defaultoperadores_departamentos.status);
				expect(res.body.createdAt).to.eql(defaultoperadores_departamentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultoperadores_departamentos.updatedAt);
				expect(res.body.departamentosFk).to.eql(defaultoperadores_departamentos.departamentosFk);
				expect(res.body.tiposDepartamentosFk).to.eql(defaultoperadores_departamentos.tiposDepartamentosFk);
				done(err);
			});
		});
	});

	describe('POST /operadores_departamentos', () => {
		it('should post a operadores_departamentos', done => {
			const operadores_departamento = {
		"operadoresFk":445,
		"status":"v5h1id",
		"createdAt":"h4695k",
		"updatedAt":"o5pd3r",
		"departamentosFk":172,
		"tiposDepartamentosFk":566
	};

			request
			.post('/operadores_departamentos')
			.set('Authorization', `JWT ${token}`)
			.send(operadores_departamento)
			.end((err, res) => {
				expect(res.body.id).to.eql(operadores_departamentos.id);
				expect(res.body.operadoresFk).to.eql(operadores_departamentos.operadoresFk);
				expect(res.body.status).to.eql(operadores_departamentos.status);
				expect(res.body.createdAt).to.eql(operadores_departamentos.createdAt);
				expect(res.body.updatedAt).to.eql(operadores_departamentos.updatedAt);
				expect(res.body.departamentosFk).to.eql(operadores_departamentos.departamentosFk);
				expect(res.body.tiposDepartamentosFk).to.eql(operadores_departamentos.tiposDepartamentosFk);
				done(err);
			});
		});
	});

	describe('PUT /operadores_departamentos/{id}', () => {
		it('should update a operadores_departamentos', done => {
			const operadores_departamento = {
		"id":"1",
		"operadoresFk":598,
		"status":"zn9nkf",
		"createdAt":"wereqk",
		"updatedAt":"g0r6rh",
		"departamentosFk":397,
		"tiposDepartamentosFk":449
	};

			request
			.put('/operadores_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(operadores_departamento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /operadores_departamentos/{id}', () => {
		it('should delete a operadores_departamentos', done => {
			request
			.delete('/operadores_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
