import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: tipos_atendimentos', () => {
	const tipos_atendimentos = app.datasource.models.tipos_atendimentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttipos_atendimentos = {
		"nome":"somvk",
		"status":"60rbmo",
		"createdAt":"xs43qm",
		"updatedAt":"7h36u"
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
			tipos_atendimentos
			.destroy({ where: {} })
			.then(() => tipos_atendimentos.create(defaulttipos_atendimentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /tipos_atendimentos', () => {
		it('should return a list of tipos_atendimentos', done => {
			request
			.get('/tipos_atendimentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttipos_atendimentos.id);
				expect(res.body[0].nome).to.eql(defaulttipos_atendimentos.nome);
				expect(res.body[0].status).to.eql(defaulttipos_atendimentos.status);
				expect(res.body[0].createdAt).to.eql(defaulttipos_atendimentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttipos_atendimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /tipos_atendimentos/{id}', () => {
		it('should return a tipos_atendimentos by id', done => {
			request
			.get('/tipos_atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttipos_atendimentos.id);
				expect(res.body.nome).to.eql(defaulttipos_atendimentos.nome);
				expect(res.body.status).to.eql(defaulttipos_atendimentos.status);
				expect(res.body.createdAt).to.eql(defaulttipos_atendimentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttipos_atendimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /tipos_atendimentos', () => {
		it('should post a tipos_atendimentos', done => {
			const tipos_atendimento = {
		"nome":"jh5jz",
		"status":"duosq",
		"createdAt":"v9xvc",
		"updatedAt":"2rsdm4"
	};

			request
			.post('/tipos_atendimentos')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_atendimento)
			.end((err, res) => {
				expect(res.body.id).to.eql(tipos_atendimentos.id);
				expect(res.body.nome).to.eql(tipos_atendimentos.nome);
				expect(res.body.status).to.eql(tipos_atendimentos.status);
				expect(res.body.createdAt).to.eql(tipos_atendimentos.createdAt);
				expect(res.body.updatedAt).to.eql(tipos_atendimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /tipos_atendimentos/{id}', () => {
		it('should update a tipos_atendimentos', done => {
			const tipos_atendimento = {
		"id":"1",
		"nome":"ut00kc",
		"status":"17f5u",
		"createdAt":"w02idy",
		"updatedAt":"1n6hae"
	};

			request
			.put('/tipos_atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_atendimento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /tipos_atendimentos/{id}', () => {
		it('should delete a tipos_atendimentos', done => {
			request
			.delete('/tipos_atendimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
