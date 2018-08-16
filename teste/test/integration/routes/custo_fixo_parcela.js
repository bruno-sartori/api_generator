import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: custo_fixo_parcela', () => {
	const custo_fixo_parcela = app.datasource.models.custo_fixo_parcela;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcusto_fixo_parcela = {
		"custoFixoFk":489,
		"numParcela":"ghzavt",
		"dataVencimento":"thwfo",
		"dataPagamento":"0vqzfr",
		"valorParcela":"64oceq",
		"valorPago":"0ooyr",
		"notaFiscal":"rzeeh8",
		"juros":"chtetv",
		"historico":"c3rit7",
		"status":"nm0jj"
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
			custo_fixo_parcela
			.destroy({ where: {} })
			.then(() => custo_fixo_parcela.create(defaultcusto_fixo_parcela))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /custo_fixo_parcela', () => {
		it('should return a list of custo_fixo_parcela', done => {
			request
			.get('/custo_fixo_parcela')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcusto_fixo_parcela.id);
				expect(res.body[0].custoFixoFk).to.eql(defaultcusto_fixo_parcela.custoFixoFk);
				expect(res.body[0].numParcela).to.eql(defaultcusto_fixo_parcela.numParcela);
				expect(res.body[0].dataVencimento).to.eql(defaultcusto_fixo_parcela.dataVencimento);
				expect(res.body[0].dataPagamento).to.eql(defaultcusto_fixo_parcela.dataPagamento);
				expect(res.body[0].valorParcela).to.eql(defaultcusto_fixo_parcela.valorParcela);
				expect(res.body[0].valorPago).to.eql(defaultcusto_fixo_parcela.valorPago);
				expect(res.body[0].notaFiscal).to.eql(defaultcusto_fixo_parcela.notaFiscal);
				expect(res.body[0].juros).to.eql(defaultcusto_fixo_parcela.juros);
				expect(res.body[0].historico).to.eql(defaultcusto_fixo_parcela.historico);
				expect(res.body[0].status).to.eql(defaultcusto_fixo_parcela.status);
				done(err);
			});
		});
	});

	describe('GET /custo_fixo_parcela/{id}', () => {
		it('should return a custo_fixo_parcela by id', done => {
			request
			.get('/custo_fixo_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcusto_fixo_parcela.id);
				expect(res.body.custoFixoFk).to.eql(defaultcusto_fixo_parcela.custoFixoFk);
				expect(res.body.numParcela).to.eql(defaultcusto_fixo_parcela.numParcela);
				expect(res.body.dataVencimento).to.eql(defaultcusto_fixo_parcela.dataVencimento);
				expect(res.body.dataPagamento).to.eql(defaultcusto_fixo_parcela.dataPagamento);
				expect(res.body.valorParcela).to.eql(defaultcusto_fixo_parcela.valorParcela);
				expect(res.body.valorPago).to.eql(defaultcusto_fixo_parcela.valorPago);
				expect(res.body.notaFiscal).to.eql(defaultcusto_fixo_parcela.notaFiscal);
				expect(res.body.juros).to.eql(defaultcusto_fixo_parcela.juros);
				expect(res.body.historico).to.eql(defaultcusto_fixo_parcela.historico);
				expect(res.body.status).to.eql(defaultcusto_fixo_parcela.status);
				done(err);
			});
		});
	});

	describe('POST /custo_fixo_parcela', () => {
		it('should post a custo_fixo_parcela', done => {
			const custo_fixo_parcel = {
		"custoFixoFk":780,
		"numParcela":"tobi",
		"dataVencimento":"gdjf4j",
		"dataPagamento":"u9j0l",
		"valorParcela":"cbwzws",
		"valorPago":"e5iscc",
		"notaFiscal":"otuh1c",
		"juros":"axy8xh",
		"historico":"ebz4dk",
		"status":"zh92rb"
	};

			request
			.post('/custo_fixo_parcela')
			.set('Authorization', `JWT ${token}`)
			.send(custo_fixo_parcel)
			.end((err, res) => {
				expect(res.body.id).to.eql(custo_fixo_parcela.id);
				expect(res.body.custoFixoFk).to.eql(custo_fixo_parcela.custoFixoFk);
				expect(res.body.numParcela).to.eql(custo_fixo_parcela.numParcela);
				expect(res.body.dataVencimento).to.eql(custo_fixo_parcela.dataVencimento);
				expect(res.body.dataPagamento).to.eql(custo_fixo_parcela.dataPagamento);
				expect(res.body.valorParcela).to.eql(custo_fixo_parcela.valorParcela);
				expect(res.body.valorPago).to.eql(custo_fixo_parcela.valorPago);
				expect(res.body.notaFiscal).to.eql(custo_fixo_parcela.notaFiscal);
				expect(res.body.juros).to.eql(custo_fixo_parcela.juros);
				expect(res.body.historico).to.eql(custo_fixo_parcela.historico);
				expect(res.body.status).to.eql(custo_fixo_parcela.status);
				done(err);
			});
		});
	});

	describe('PUT /custo_fixo_parcela/{id}', () => {
		it('should update a custo_fixo_parcela', done => {
			const custo_fixo_parcel = {
		"id":"1",
		"custoFixoFk":441,
		"numParcela":"zgst7q",
		"dataVencimento":"hohtdu",
		"dataPagamento":"p81lea",
		"valorParcela":"gud7fc",
		"valorPago":"z5tik",
		"notaFiscal":"2x1kgq",
		"juros":"4vqbfh",
		"historico":"84kld",
		"status":"ads8gb"
	};

			request
			.put('/custo_fixo_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.send(custo_fixo_parcel)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /custo_fixo_parcela/{id}', () => {
		it('should delete a custo_fixo_parcela', done => {
			request
			.delete('/custo_fixo_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
