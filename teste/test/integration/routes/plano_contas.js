import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: plano_contas', () => {
	const plano_contas = app.datasource.models.plano_contas;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultplano_contas = {
		"nome":"pfa0un",
		"status":"ec0xcn",
		"createdAt":"jwmtnv",
		"updatedAt":"0wltjr"
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
			plano_contas
			.destroy({ where: {} })
			.then(() => plano_contas.create(defaultplano_contas))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /plano_contas', () => {
		it('should return a list of plano_contas', done => {
			request
			.get('/plano_contas')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultplano_contas.id);
				expect(res.body[0].nome).to.eql(defaultplano_contas.nome);
				expect(res.body[0].status).to.eql(defaultplano_contas.status);
				expect(res.body[0].createdAt).to.eql(defaultplano_contas.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultplano_contas.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /plano_contas/{id}', () => {
		it('should return a plano_contas by id', done => {
			request
			.get('/plano_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultplano_contas.id);
				expect(res.body.nome).to.eql(defaultplano_contas.nome);
				expect(res.body.status).to.eql(defaultplano_contas.status);
				expect(res.body.createdAt).to.eql(defaultplano_contas.createdAt);
				expect(res.body.updatedAt).to.eql(defaultplano_contas.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /plano_contas', () => {
		it('should post a plano_contas', done => {
			const plano_conta = {
		"nome":"va68s",
		"status":"9t8ey",
		"createdAt":"iw1bpm",
		"updatedAt":"pb4998"
	};

			request
			.post('/plano_contas')
			.set('Authorization', `JWT ${token}`)
			.send(plano_conta)
			.end((err, res) => {
				expect(res.body.id).to.eql(plano_contas.id);
				expect(res.body.nome).to.eql(plano_contas.nome);
				expect(res.body.status).to.eql(plano_contas.status);
				expect(res.body.createdAt).to.eql(plano_contas.createdAt);
				expect(res.body.updatedAt).to.eql(plano_contas.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /plano_contas/{id}', () => {
		it('should update a plano_contas', done => {
			const plano_conta = {
		"id":"1",
		"nome":"4li8ic",
		"status":"mudsrp",
		"createdAt":"ul76zk",
		"updatedAt":"6td6kl"
	};

			request
			.put('/plano_contas/1')
			.set('Authorization', `JWT ${token}`)
			.send(plano_conta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /plano_contas/{id}', () => {
		it('should delete a plano_contas', done => {
			request
			.delete('/plano_contas/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
