import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: suprimentos', () => {
	const suprimentos = app.datasource.models.suprimentos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultsuprimentos = {
		"nome":"hc54n",
		"descricao":"62szxi",
		"status":"nctj2",
		"createdAt":"00rpnh",
		"updatedAt":"0yhgbk"
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
			suprimentos
			.destroy({ where: {} })
			.then(() => suprimentos.create(defaultsuprimentos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /suprimentos', () => {
		it('should return a list of suprimentos', done => {
			request
			.get('/suprimentos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultsuprimentos.id);
				expect(res.body[0].nome).to.eql(defaultsuprimentos.nome);
				expect(res.body[0].descricao).to.eql(defaultsuprimentos.descricao);
				expect(res.body[0].status).to.eql(defaultsuprimentos.status);
				expect(res.body[0].createdAt).to.eql(defaultsuprimentos.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultsuprimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /suprimentos/{id}', () => {
		it('should return a suprimentos by id', done => {
			request
			.get('/suprimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultsuprimentos.id);
				expect(res.body.nome).to.eql(defaultsuprimentos.nome);
				expect(res.body.descricao).to.eql(defaultsuprimentos.descricao);
				expect(res.body.status).to.eql(defaultsuprimentos.status);
				expect(res.body.createdAt).to.eql(defaultsuprimentos.createdAt);
				expect(res.body.updatedAt).to.eql(defaultsuprimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /suprimentos', () => {
		it('should post a suprimentos', done => {
			const suprimento = {
		"nome":"xk6dvf",
		"descricao":"j88rs",
		"status":"xrl66o",
		"createdAt":"v92qe",
		"updatedAt":"wl6216"
	};

			request
			.post('/suprimentos')
			.set('Authorization', `JWT ${token}`)
			.send(suprimento)
			.end((err, res) => {
				expect(res.body.id).to.eql(suprimentos.id);
				expect(res.body.nome).to.eql(suprimentos.nome);
				expect(res.body.descricao).to.eql(suprimentos.descricao);
				expect(res.body.status).to.eql(suprimentos.status);
				expect(res.body.createdAt).to.eql(suprimentos.createdAt);
				expect(res.body.updatedAt).to.eql(suprimentos.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /suprimentos/{id}', () => {
		it('should update a suprimentos', done => {
			const suprimento = {
		"id":"1",
		"nome":"ta6yv3",
		"descricao":"3blym",
		"status":"p4jnqv",
		"createdAt":"a4dy4",
		"updatedAt":"a022gq"
	};

			request
			.put('/suprimentos/1')
			.set('Authorization', `JWT ${token}`)
			.send(suprimento)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /suprimentos/{id}', () => {
		it('should delete a suprimentos', done => {
			request
			.delete('/suprimentos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
