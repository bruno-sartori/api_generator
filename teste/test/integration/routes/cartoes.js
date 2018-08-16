import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: cartoes', () => {
	const cartoes = app.datasource.models.cartoes;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcartoes = {
		"numero":"txszw",
		"valor":"isdusy",
		"status":"9guikc",
		"createdAt":"53bf8r",
		"updatedAt":"syzl2",
		"contasBancariasFk":655
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
			cartoes
			.destroy({ where: {} })
			.then(() => cartoes.create(defaultcartoes))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /cartoes', () => {
		it('should return a list of cartoes', done => {
			request
			.get('/cartoes')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcartoes.id);
				expect(res.body[0].numero).to.eql(defaultcartoes.numero);
				expect(res.body[0].valor).to.eql(defaultcartoes.valor);
				expect(res.body[0].status).to.eql(defaultcartoes.status);
				expect(res.body[0].createdAt).to.eql(defaultcartoes.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcartoes.updatedAt);
				expect(res.body[0].contasBancariasFk).to.eql(defaultcartoes.contasBancariasFk);
				done(err);
			});
		});
	});

	describe('GET /cartoes/{id}', () => {
		it('should return a cartoes by id', done => {
			request
			.get('/cartoes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcartoes.id);
				expect(res.body.numero).to.eql(defaultcartoes.numero);
				expect(res.body.valor).to.eql(defaultcartoes.valor);
				expect(res.body.status).to.eql(defaultcartoes.status);
				expect(res.body.createdAt).to.eql(defaultcartoes.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcartoes.updatedAt);
				expect(res.body.contasBancariasFk).to.eql(defaultcartoes.contasBancariasFk);
				done(err);
			});
		});
	});

	describe('POST /cartoes', () => {
		it('should post a cartoes', done => {
			const cartoe = {
		"numero":"2o2yw9",
		"valor":"krc7xo",
		"status":"zm06b",
		"createdAt":"b9bqqi",
		"updatedAt":"dtlylo",
		"contasBancariasFk":103
	};

			request
			.post('/cartoes')
			.set('Authorization', `JWT ${token}`)
			.send(cartoe)
			.end((err, res) => {
				expect(res.body.id).to.eql(cartoes.id);
				expect(res.body.numero).to.eql(cartoes.numero);
				expect(res.body.valor).to.eql(cartoes.valor);
				expect(res.body.status).to.eql(cartoes.status);
				expect(res.body.createdAt).to.eql(cartoes.createdAt);
				expect(res.body.updatedAt).to.eql(cartoes.updatedAt);
				expect(res.body.contasBancariasFk).to.eql(cartoes.contasBancariasFk);
				done(err);
			});
		});
	});

	describe('PUT /cartoes/{id}', () => {
		it('should update a cartoes', done => {
			const cartoe = {
		"id":"1",
		"numero":"k1mir8",
		"valor":"juft5n",
		"status":"nyjdxo",
		"createdAt":"z79jub",
		"updatedAt":"81dezm",
		"contasBancariasFk":125
	};

			request
			.put('/cartoes/1')
			.set('Authorization', `JWT ${token}`)
			.send(cartoe)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /cartoes/{id}', () => {
		it('should delete a cartoes', done => {
			request
			.delete('/cartoes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
