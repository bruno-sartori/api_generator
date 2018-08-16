import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: grupo_clientes', () => {
	const grupo_clientes = app.datasource.models.grupo_clientes;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultgrupo_clientes = {
		"nome":"wsfmbh",
		"createdAt":"fobokd",
		"updatedAt":"fx1c88",
		"status":"j36nv"
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
			grupo_clientes
			.destroy({ where: {} })
			.then(() => grupo_clientes.create(defaultgrupo_clientes))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /grupo_clientes', () => {
		it('should return a list of grupo_clientes', done => {
			request
			.get('/grupo_clientes')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultgrupo_clientes.id);
				expect(res.body[0].nome).to.eql(defaultgrupo_clientes.nome);
				expect(res.body[0].createdAt).to.eql(defaultgrupo_clientes.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultgrupo_clientes.updatedAt);
				expect(res.body[0].status).to.eql(defaultgrupo_clientes.status);
				done(err);
			});
		});
	});

	describe('GET /grupo_clientes/{id}', () => {
		it('should return a grupo_clientes by id', done => {
			request
			.get('/grupo_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultgrupo_clientes.id);
				expect(res.body.nome).to.eql(defaultgrupo_clientes.nome);
				expect(res.body.createdAt).to.eql(defaultgrupo_clientes.createdAt);
				expect(res.body.updatedAt).to.eql(defaultgrupo_clientes.updatedAt);
				expect(res.body.status).to.eql(defaultgrupo_clientes.status);
				done(err);
			});
		});
	});

	describe('POST /grupo_clientes', () => {
		it('should post a grupo_clientes', done => {
			const grupo_cliente = {
		"nome":"hfhg3",
		"createdAt":"rjw4l",
		"updatedAt":"z0xjqd",
		"status":"lbrha"
	};

			request
			.post('/grupo_clientes')
			.set('Authorization', `JWT ${token}`)
			.send(grupo_cliente)
			.end((err, res) => {
				expect(res.body.id).to.eql(grupo_clientes.id);
				expect(res.body.nome).to.eql(grupo_clientes.nome);
				expect(res.body.createdAt).to.eql(grupo_clientes.createdAt);
				expect(res.body.updatedAt).to.eql(grupo_clientes.updatedAt);
				expect(res.body.status).to.eql(grupo_clientes.status);
				done(err);
			});
		});
	});

	describe('PUT /grupo_clientes/{id}', () => {
		it('should update a grupo_clientes', done => {
			const grupo_cliente = {
		"id":"1",
		"nome":"0q1k5",
		"createdAt":"hn5yas",
		"updatedAt":"okw5x4",
		"status":"bt2wui"
	};

			request
			.put('/grupo_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.send(grupo_cliente)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /grupo_clientes/{id}', () => {
		it('should delete a grupo_clientes', done => {
			request
			.delete('/grupo_clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
