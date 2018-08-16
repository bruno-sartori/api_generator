import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: recebimento_cobranca', () => {
	const recebimento_cobranca = app.datasource.models.recebimento_cobranca;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultrecebimento_cobranca = {
		"contasReceberFk":246,
		"descricao":"sr4lmn",
		"operadoresFk":603,
		"dataCobranca":"mhbrk"
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
			recebimento_cobranca
			.destroy({ where: {} })
			.then(() => recebimento_cobranca.create(defaultrecebimento_cobranca))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /recebimento_cobranca', () => {
		it('should return a list of recebimento_cobranca', done => {
			request
			.get('/recebimento_cobranca')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultrecebimento_cobranca.id);
				expect(res.body[0].contasReceberFk).to.eql(defaultrecebimento_cobranca.contasReceberFk);
				expect(res.body[0].descricao).to.eql(defaultrecebimento_cobranca.descricao);
				expect(res.body[0].operadoresFk).to.eql(defaultrecebimento_cobranca.operadoresFk);
				expect(res.body[0].dataCobranca).to.eql(defaultrecebimento_cobranca.dataCobranca);
				done(err);
			});
		});
	});

	describe('GET /recebimento_cobranca/{id}', () => {
		it('should return a recebimento_cobranca by id', done => {
			request
			.get('/recebimento_cobranca/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultrecebimento_cobranca.id);
				expect(res.body.contasReceberFk).to.eql(defaultrecebimento_cobranca.contasReceberFk);
				expect(res.body.descricao).to.eql(defaultrecebimento_cobranca.descricao);
				expect(res.body.operadoresFk).to.eql(defaultrecebimento_cobranca.operadoresFk);
				expect(res.body.dataCobranca).to.eql(defaultrecebimento_cobranca.dataCobranca);
				done(err);
			});
		});
	});

	describe('POST /recebimento_cobranca', () => {
		it('should post a recebimento_cobranca', done => {
			const recebimento_cobranc = {
		"contasReceberFk":546,
		"descricao":"1w25vv",
		"operadoresFk":972,
		"dataCobranca":"6ljenm"
	};

			request
			.post('/recebimento_cobranca')
			.set('Authorization', `JWT ${token}`)
			.send(recebimento_cobranc)
			.end((err, res) => {
				expect(res.body.id).to.eql(recebimento_cobranca.id);
				expect(res.body.contasReceberFk).to.eql(recebimento_cobranca.contasReceberFk);
				expect(res.body.descricao).to.eql(recebimento_cobranca.descricao);
				expect(res.body.operadoresFk).to.eql(recebimento_cobranca.operadoresFk);
				expect(res.body.dataCobranca).to.eql(recebimento_cobranca.dataCobranca);
				done(err);
			});
		});
	});

	describe('PUT /recebimento_cobranca/{id}', () => {
		it('should update a recebimento_cobranca', done => {
			const recebimento_cobranc = {
		"id":"1",
		"contasReceberFk":172,
		"descricao":"wtji1",
		"operadoresFk":881,
		"dataCobranca":"gql49h"
	};

			request
			.put('/recebimento_cobranca/1')
			.set('Authorization', `JWT ${token}`)
			.send(recebimento_cobranc)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /recebimento_cobranca/{id}', () => {
		it('should delete a recebimento_cobranca', done => {
			request
			.delete('/recebimento_cobranca/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
