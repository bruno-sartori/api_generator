import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: departamentos', () => {
	const departamentos = app.datasource.models.departamentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultdepartamentos = {
		"nome":"azlyv",
		"status":"kb0dgc",
		"createdAt":"frvp0ji",
		"updatedAt":"x3t35"
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
			departamentos
			.destroy({ where: {} })
			.then(() => departamentos.create(defaultdepartamentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /departamentos', () => {
		it('should return a list of departamentos', done => {
			request
			.get('/departamentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultdepartamentos.id);
				expect(res.body[0].nome).to.eql(defaultdepartamentos.nome);
				expect(res.body[0].status).to.eql(defaultdepartamentos.status);
				expect(res.body[0].createdAt).to.eql(defaultdepartamentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultdepartamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /departamentos/{id}', () => {
		it('should return a departamentos by id', done => {
			request
			.get('/departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultdepartamentos.id);
				expect(res.body.nome).to.eql(defaultdepartamentos.nome);
				expect(res.body.status).to.eql(defaultdepartamentos.status);
				expect(res.body.createdAt).to.eql(defaultdepartamentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultdepartamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /departamentos', () => {
		it('should post a departamentos', done => {
			const departamento = {
		"nome":"3rb7d",
		"status":"duceno",
		"createdAt":"2qpli",
		"updatedAt":"ile5aj"
	};

			request
			.post('/departamentos')
			.set('Authorization', `JWT ${token}`)
			.send(departamento)
			.end((err, res) => {
				expect(res.body.id).to.eql(departamentos.id);
				expect(res.body.nome).to.eql(departamentos.nome);
				expect(res.body.status).to.eql(departamentos.status);
				expect(res.body.createdAt).to.eql(departamentos.createdAt);
				expect(res.body.updatedAt).to.eql(departamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /departamentos/{id}', () => {
		it('should update a departamentos', done => {
			const departamento = {
		"id":"1",
		"nome":"12rjx9",
		"status":"32wrvl",
		"createdAt":"g9ub8d",
		"updatedAt":"rdp45g"
	};

			request
			.put('/departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(departamento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /departamentos/{id}', () => {
		it('should delete a departamentos', done => {
			request
			.delete('/departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
