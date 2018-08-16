import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: cheques', () => {
	const cheques = app.datasource.models.cheques;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcheques = {
		"numero":"ot2119",
		"valor":"1q1cmj",
		"dataEmissao":"olr07",
		"dataPredatado":"rvmyr",
		"status":"qiv1ae",
		"createdAt":"gt91bd",
		"updatedAt":"0f1jyr",
		"contasBancariasFk":41,
		"empresasFk":366
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
			cheques
			.destroy({ where: {} })
			.then(() => cheques.create(defaultcheques))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /cheques', () => {
		it('should return a list of cheques', done => {
			request
			.get('/cheques')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcheques.id);
				expect(res.body[0].numero).to.eql(defaultcheques.numero);
				expect(res.body[0].valor).to.eql(defaultcheques.valor);
				expect(res.body[0].dataEmissao).to.eql(defaultcheques.dataEmissao);
				expect(res.body[0].dataPredatado).to.eql(defaultcheques.dataPredatado);
				expect(res.body[0].status).to.eql(defaultcheques.status);
				expect(res.body[0].createdAt).to.eql(defaultcheques.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcheques.updatedAt);
				expect(res.body[0].contasBancariasFk).to.eql(defaultcheques.contasBancariasFk);
				expect(res.body[0].empresasFk).to.eql(defaultcheques.empresasFk);
				done(err);
			});
		});
	});

	describe('GET /cheques/{id}', () => {
		it('should return a cheques by id', done => {
			request
			.get('/cheques/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcheques.id);
				expect(res.body.numero).to.eql(defaultcheques.numero);
				expect(res.body.valor).to.eql(defaultcheques.valor);
				expect(res.body.dataEmissao).to.eql(defaultcheques.dataEmissao);
				expect(res.body.dataPredatado).to.eql(defaultcheques.dataPredatado);
				expect(res.body.status).to.eql(defaultcheques.status);
				expect(res.body.createdAt).to.eql(defaultcheques.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcheques.updatedAt);
				expect(res.body.contasBancariasFk).to.eql(defaultcheques.contasBancariasFk);
				expect(res.body.empresasFk).to.eql(defaultcheques.empresasFk);
				done(err);
			});
		});
	});

	describe('POST /cheques', () => {
		it('should post a cheques', done => {
			const cheque = {
		"numero":"xilii",
		"valor":"pstbfo",
		"dataEmissao":"fv2s1a",
		"dataPredatado":"olux6i",
		"status":"qdrc9",
		"createdAt":"32gebb",
		"updatedAt":"o65hyh",
		"contasBancariasFk":243,
		"empresasFk":673
	};

			request
			.post('/cheques')
			.set('Authorization', `JWT ${token}`)
			.send(cheque)
			.end((err, res) => {
				expect(res.body.id).to.eql(cheques.id);
				expect(res.body.numero).to.eql(cheques.numero);
				expect(res.body.valor).to.eql(cheques.valor);
				expect(res.body.dataEmissao).to.eql(cheques.dataEmissao);
				expect(res.body.dataPredatado).to.eql(cheques.dataPredatado);
				expect(res.body.status).to.eql(cheques.status);
				expect(res.body.createdAt).to.eql(cheques.createdAt);
				expect(res.body.updatedAt).to.eql(cheques.updatedAt);
				expect(res.body.contasBancariasFk).to.eql(cheques.contasBancariasFk);
				expect(res.body.empresasFk).to.eql(cheques.empresasFk);
				done(err);
			});
		});
	});

	describe('PUT /cheques/{id}', () => {
		it('should update a cheques', done => {
			const cheque = {
		"id":"1",
		"numero":"tn8jlf",
		"valor":"8yzw1c",
		"dataEmissao":"7t9x7u",
		"dataPredatado":"ljoakb",
		"status":"i0epkc",
		"createdAt":"wqjlqb",
		"updatedAt":"mo2r1h",
		"contasBancariasFk":183,
		"empresasFk":64
	};

			request
			.put('/cheques/1')
			.set('Authorization', `JWT ${token}`)
			.send(cheque)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /cheques/{id}', () => {
		it('should delete a cheques', done => {
			request
			.delete('/cheques/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
