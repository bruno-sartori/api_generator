import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: operadoras_cartao', () => {
	const operadoras_cartao = app.datasource.models.operadoras_cartao;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultoperadoras_cartao = {
		"obs":"02v82i",
		"status":"fxyykr",
		"createdAt":"8kqugm",
		"updatedAt":"nip94c",
		"federatedBaseOperadoraCartaoFk":556
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
			operadoras_cartao
			.destroy({ where: {} })
			.then(() => operadoras_cartao.create(defaultoperadoras_cartao))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /operadoras_cartao', () => {
		it('should return a list of operadoras_cartao', done => {
			request
			.get('/operadoras_cartao')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultoperadoras_cartao.id);
				expect(res.body[0].obs).to.eql(defaultoperadoras_cartao.obs);
				expect(res.body[0].status).to.eql(defaultoperadoras_cartao.status);
				expect(res.body[0].createdAt).to.eql(defaultoperadoras_cartao.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultoperadoras_cartao.updatedAt);
				expect(res.body[0].federatedBaseOperadoraCartaoFk).to.eql(defaultoperadoras_cartao.federatedBaseOperadoraCartaoFk);
				done(err);
			});
		});
	});

	describe('GET /operadoras_cartao/{id}', () => {
		it('should return a operadoras_cartao by id', done => {
			request
			.get('/operadoras_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultoperadoras_cartao.id);
				expect(res.body.obs).to.eql(defaultoperadoras_cartao.obs);
				expect(res.body.status).to.eql(defaultoperadoras_cartao.status);
				expect(res.body.createdAt).to.eql(defaultoperadoras_cartao.createdAt);
				expect(res.body.updatedAt).to.eql(defaultoperadoras_cartao.updatedAt);
				expect(res.body.federatedBaseOperadoraCartaoFk).to.eql(defaultoperadoras_cartao.federatedBaseOperadoraCartaoFk);
				done(err);
			});
		});
	});

	describe('POST /operadoras_cartao', () => {
		it('should post a operadoras_cartao', done => {
			const operadoras_carta = {
		"obs":"nir3n",
		"status":"btyv9c",
		"createdAt":"80jkts",
		"updatedAt":"eqn5x6",
		"federatedBaseOperadoraCartaoFk":406
	};

			request
			.post('/operadoras_cartao')
			.set('Authorization', `JWT ${token}`)
			.send(operadoras_carta)
			.end((err, res) => {
				expect(res.body.id).to.eql(operadoras_cartao.id);
				expect(res.body.obs).to.eql(operadoras_cartao.obs);
				expect(res.body.status).to.eql(operadoras_cartao.status);
				expect(res.body.createdAt).to.eql(operadoras_cartao.createdAt);
				expect(res.body.updatedAt).to.eql(operadoras_cartao.updatedAt);
				expect(res.body.federatedBaseOperadoraCartaoFk).to.eql(operadoras_cartao.federatedBaseOperadoraCartaoFk);
				done(err);
			});
		});
	});

	describe('PUT /operadoras_cartao/{id}', () => {
		it('should update a operadoras_cartao', done => {
			const operadoras_carta = {
		"id":"1",
		"obs":"h0wdv6",
		"status":"an14dh",
		"createdAt":"o28d3c",
		"updatedAt":"hd1fql",
		"federatedBaseOperadoraCartaoFk":703
	};

			request
			.put('/operadoras_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.send(operadoras_carta)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /operadoras_cartao/{id}', () => {
		it('should delete a operadoras_cartao', done => {
			request
			.delete('/operadoras_cartao/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
