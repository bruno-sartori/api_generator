import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: recebimento_estorno', () => {
	const recebimento_estorno = app.datasource.models.recebimento_estorno;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultrecebimento_estorno = {
		"contasReceberFk":72,
		"motivo":"8vaw3e",
		"linha":18,
		"operadoresFk":645,
		"dataEstorno":"qfyfyl"
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
			recebimento_estorno
			.destroy({ where: {} })
			.then(() => recebimento_estorno.create(defaultrecebimento_estorno))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /recebimento_estorno', () => {
		it('should return a list of recebimento_estorno', done => {
			request
			.get('/recebimento_estorno')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultrecebimento_estorno.id);
				expect(res.body[0].contasReceberFk).to.eql(defaultrecebimento_estorno.contasReceberFk);
				expect(res.body[0].motivo).to.eql(defaultrecebimento_estorno.motivo);
				expect(res.body[0].linha).to.eql(defaultrecebimento_estorno.linha);
				expect(res.body[0].operadoresFk).to.eql(defaultrecebimento_estorno.operadoresFk);
				expect(res.body[0].dataEstorno).to.eql(defaultrecebimento_estorno.dataEstorno);
				done(err);
			});
		});
	});

	describe('GET /recebimento_estorno/{id}', () => {
		it('should return a recebimento_estorno by id', done => {
			request
			.get('/recebimento_estorno/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultrecebimento_estorno.id);
				expect(res.body.contasReceberFk).to.eql(defaultrecebimento_estorno.contasReceberFk);
				expect(res.body.motivo).to.eql(defaultrecebimento_estorno.motivo);
				expect(res.body.linha).to.eql(defaultrecebimento_estorno.linha);
				expect(res.body.operadoresFk).to.eql(defaultrecebimento_estorno.operadoresFk);
				expect(res.body.dataEstorno).to.eql(defaultrecebimento_estorno.dataEstorno);
				done(err);
			});
		});
	});

	describe('POST /recebimento_estorno', () => {
		it('should post a recebimento_estorno', done => {
			const recebimento_estorn = {
		"contasReceberFk":378,
		"motivo":"63jh9v",
		"linha":787,
		"operadoresFk":610,
		"dataEstorno":"bqs9a"
	};

			request
			.post('/recebimento_estorno')
			.set('Authorization', `JWT ${token}`)
			.send(recebimento_estorn)
			.end((err, res) => {
				expect(res.body.id).to.eql(recebimento_estorno.id);
				expect(res.body.contasReceberFk).to.eql(recebimento_estorno.contasReceberFk);
				expect(res.body.motivo).to.eql(recebimento_estorno.motivo);
				expect(res.body.linha).to.eql(recebimento_estorno.linha);
				expect(res.body.operadoresFk).to.eql(recebimento_estorno.operadoresFk);
				expect(res.body.dataEstorno).to.eql(recebimento_estorno.dataEstorno);
				done(err);
			});
		});
	});

	describe('PUT /recebimento_estorno/{id}', () => {
		it('should update a recebimento_estorno', done => {
			const recebimento_estorn = {
		"id":"1",
		"contasReceberFk":934,
		"motivo":"79lmi",
		"linha":786,
		"operadoresFk":758,
		"dataEstorno":"09x45t"
	};

			request
			.put('/recebimento_estorno/1')
			.set('Authorization', `JWT ${token}`)
			.send(recebimento_estorn)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /recebimento_estorno/{id}', () => {
		it('should delete a recebimento_estorno', done => {
			request
			.delete('/recebimento_estorno/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
