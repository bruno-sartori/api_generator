import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: tipos_tentativas_contato', () => {
	const tipos_tentativas_contato = app.datasource.models.tipos_tentativas_contato;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttipos_tentativas_contato = {
		"nome":"r12k8v",
		"status":"ibdu49",
		"createdAt":"w4i9u",
		"updatedAt":"0suv9f"
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
			tipos_tentativas_contato
			.destroy({ where: {} })
			.then(() => tipos_tentativas_contato.create(defaulttipos_tentativas_contato))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /tipos_tentativas_contato', () => {
		it('should return a list of tipos_tentativas_contato', done => {
			request
			.get('/tipos_tentativas_contato')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttipos_tentativas_contato.id);
				expect(res.body[0].nome).to.eql(defaulttipos_tentativas_contato.nome);
				expect(res.body[0].status).to.eql(defaulttipos_tentativas_contato.status);
				expect(res.body[0].createdAt).to.eql(defaulttipos_tentativas_contato.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttipos_tentativas_contato.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /tipos_tentativas_contato/{id}', () => {
		it('should return a tipos_tentativas_contato by id', done => {
			request
			.get('/tipos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttipos_tentativas_contato.id);
				expect(res.body.nome).to.eql(defaulttipos_tentativas_contato.nome);
				expect(res.body.status).to.eql(defaulttipos_tentativas_contato.status);
				expect(res.body.createdAt).to.eql(defaulttipos_tentativas_contato.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttipos_tentativas_contato.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /tipos_tentativas_contato', () => {
		it('should post a tipos_tentativas_contato', done => {
			const tipos_tentativas_contat = {
		"nome":"2eu3l1j",
		"status":"d3az3o",
		"createdAt":"a8av3",
		"updatedAt":"t6fv4g"
	};

			request
			.post('/tipos_tentativas_contato')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_tentativas_contat)
			.end((err, res) => {
				expect(res.body.id).to.eql(tipos_tentativas_contato.id);
				expect(res.body.nome).to.eql(tipos_tentativas_contato.nome);
				expect(res.body.status).to.eql(tipos_tentativas_contato.status);
				expect(res.body.createdAt).to.eql(tipos_tentativas_contato.createdAt);
				expect(res.body.updatedAt).to.eql(tipos_tentativas_contato.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /tipos_tentativas_contato/{id}', () => {
		it('should update a tipos_tentativas_contato', done => {
			const tipos_tentativas_contat = {
		"id":"1",
		"nome":"xr295to",
		"status":"dshw7n",
		"createdAt":"59884",
		"updatedAt":"erxu2"
	};

			request
			.put('/tipos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_tentativas_contat)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /tipos_tentativas_contato/{id}', () => {
		it('should delete a tipos_tentativas_contato', done => {
			request
			.delete('/tipos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
