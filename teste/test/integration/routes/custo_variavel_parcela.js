import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: custo_variavel_parcela', () => {
	const custo_variavel_parcela = app.datasource.models.custo_variavel_parcela;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcusto_variavel_parcela = {
		"custoVariavelFk":283,
		"configured":"jendc",
		"tipoPagamento":"n143wa",
		"numParcela":"fpwsw",
		"dataVencimento":"rtoo9b",
		"dataPagamento":"xo7sgm",
		"valorParcela":"zh53f8",
		"valorPago":"h901ne",
		"historico":"sawtsm",
		"juros":"33e0ne"
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
			custo_variavel_parcela
			.destroy({ where: {} })
			.then(() => custo_variavel_parcela.create(defaultcusto_variavel_parcela))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /custo_variavel_parcela', () => {
		it('should return a list of custo_variavel_parcela', done => {
			request
			.get('/custo_variavel_parcela')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcusto_variavel_parcela.id);
				expect(res.body[0].custoVariavelFk).to.eql(defaultcusto_variavel_parcela.custoVariavelFk);
				expect(res.body[0].configured).to.eql(defaultcusto_variavel_parcela.configured);
				expect(res.body[0].tipoPagamento).to.eql(defaultcusto_variavel_parcela.tipoPagamento);
				expect(res.body[0].numParcela).to.eql(defaultcusto_variavel_parcela.numParcela);
				expect(res.body[0].dataVencimento).to.eql(defaultcusto_variavel_parcela.dataVencimento);
				expect(res.body[0].dataPagamento).to.eql(defaultcusto_variavel_parcela.dataPagamento);
				expect(res.body[0].valorParcela).to.eql(defaultcusto_variavel_parcela.valorParcela);
				expect(res.body[0].valorPago).to.eql(defaultcusto_variavel_parcela.valorPago);
				expect(res.body[0].historico).to.eql(defaultcusto_variavel_parcela.historico);
				expect(res.body[0].juros).to.eql(defaultcusto_variavel_parcela.juros);
				done(err);
			});
		});
	});

	describe('GET /custo_variavel_parcela/{id}', () => {
		it('should return a custo_variavel_parcela by id', done => {
			request
			.get('/custo_variavel_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcusto_variavel_parcela.id);
				expect(res.body.custoVariavelFk).to.eql(defaultcusto_variavel_parcela.custoVariavelFk);
				expect(res.body.configured).to.eql(defaultcusto_variavel_parcela.configured);
				expect(res.body.tipoPagamento).to.eql(defaultcusto_variavel_parcela.tipoPagamento);
				expect(res.body.numParcela).to.eql(defaultcusto_variavel_parcela.numParcela);
				expect(res.body.dataVencimento).to.eql(defaultcusto_variavel_parcela.dataVencimento);
				expect(res.body.dataPagamento).to.eql(defaultcusto_variavel_parcela.dataPagamento);
				expect(res.body.valorParcela).to.eql(defaultcusto_variavel_parcela.valorParcela);
				expect(res.body.valorPago).to.eql(defaultcusto_variavel_parcela.valorPago);
				expect(res.body.historico).to.eql(defaultcusto_variavel_parcela.historico);
				expect(res.body.juros).to.eql(defaultcusto_variavel_parcela.juros);
				done(err);
			});
		});
	});

	describe('POST /custo_variavel_parcela', () => {
		it('should post a custo_variavel_parcela', done => {
			const custo_variavel_parcel = {
		"custoVariavelFk":490,
		"configured":"2hxkp",
		"tipoPagamento":"t5erkw",
		"numParcela":"sdvenk",
		"dataVencimento":"shl609",
		"dataPagamento":"wax7kf",
		"valorParcela":"ljpq5b",
		"valorPago":"qjfphw",
		"historico":"sujosg",
		"juros":"lmahs"
	};

			request
			.post('/custo_variavel_parcela')
			.set('Authorization', `JWT ${token}`)
			.send(custo_variavel_parcel)
			.end((err, res) => {
				expect(res.body.id).to.eql(custo_variavel_parcela.id);
				expect(res.body.custoVariavelFk).to.eql(custo_variavel_parcela.custoVariavelFk);
				expect(res.body.configured).to.eql(custo_variavel_parcela.configured);
				expect(res.body.tipoPagamento).to.eql(custo_variavel_parcela.tipoPagamento);
				expect(res.body.numParcela).to.eql(custo_variavel_parcela.numParcela);
				expect(res.body.dataVencimento).to.eql(custo_variavel_parcela.dataVencimento);
				expect(res.body.dataPagamento).to.eql(custo_variavel_parcela.dataPagamento);
				expect(res.body.valorParcela).to.eql(custo_variavel_parcela.valorParcela);
				expect(res.body.valorPago).to.eql(custo_variavel_parcela.valorPago);
				expect(res.body.historico).to.eql(custo_variavel_parcela.historico);
				expect(res.body.juros).to.eql(custo_variavel_parcela.juros);
				done(err);
			});
		});
	});

	describe('PUT /custo_variavel_parcela/{id}', () => {
		it('should update a custo_variavel_parcela', done => {
			const custo_variavel_parcel = {
		"id":"1",
		"custoVariavelFk":61,
		"configured":"1dsk0n",
		"tipoPagamento":"q2es6",
		"numParcela":"qnuk3s",
		"dataVencimento":"t3v3wf",
		"dataPagamento":"09hu7k",
		"valorParcela":"uurm42n",
		"valorPago":"1ifhgm",
		"historico":"3nflrt",
		"juros":"g4fn1t"
	};

			request
			.put('/custo_variavel_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.send(custo_variavel_parcel)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /custo_variavel_parcela/{id}', () => {
		it('should delete a custo_variavel_parcela', done => {
			request
			.delete('/custo_variavel_parcela/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
