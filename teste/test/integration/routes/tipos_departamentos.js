import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: tipos_departamentos', () => {
	const tipos_departamentos = app.datasource.models.tipos_departamentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttipos_departamentos = {
		"nome":"r53cgb",
		"status":"zu2906",
		"createdAt":"bornze",
		"updatedAt":"4cf3uj"
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
			tipos_departamentos
			.destroy({ where: {} })
			.then(() => tipos_departamentos.create(defaulttipos_departamentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /tipos_departamentos', () => {
		it('should return a list of tipos_departamentos', done => {
			request
			.get('/tipos_departamentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttipos_departamentos.id);
				expect(res.body[0].nome).to.eql(defaulttipos_departamentos.nome);
				expect(res.body[0].status).to.eql(defaulttipos_departamentos.status);
				expect(res.body[0].createdAt).to.eql(defaulttipos_departamentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttipos_departamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /tipos_departamentos/{id}', () => {
		it('should return a tipos_departamentos by id', done => {
			request
			.get('/tipos_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttipos_departamentos.id);
				expect(res.body.nome).to.eql(defaulttipos_departamentos.nome);
				expect(res.body.status).to.eql(defaulttipos_departamentos.status);
				expect(res.body.createdAt).to.eql(defaulttipos_departamentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttipos_departamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /tipos_departamentos', () => {
		it('should post a tipos_departamentos', done => {
			const tipos_departamento = {
		"nome":"0udbzx",
		"status":"33r0lh",
		"createdAt":"t8l1px",
		"updatedAt":"kf39o"
	};

			request
			.post('/tipos_departamentos')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_departamento)
			.end((err, res) => {
				expect(res.body.id).to.eql(tipos_departamentos.id);
				expect(res.body.nome).to.eql(tipos_departamentos.nome);
				expect(res.body.status).to.eql(tipos_departamentos.status);
				expect(res.body.createdAt).to.eql(tipos_departamentos.createdAt);
				expect(res.body.updatedAt).to.eql(tipos_departamentos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /tipos_departamentos/{id}', () => {
		it('should update a tipos_departamentos', done => {
			const tipos_departamento = {
		"id":"1",
		"nome":"182sts",
		"status":"z4tvct",
		"createdAt":"4kzjpi",
		"updatedAt":"vji2fa"
	};

			request
			.put('/tipos_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_departamento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /tipos_departamentos/{id}', () => {
		it('should delete a tipos_departamentos', done => {
			request
			.delete('/tipos_departamentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
