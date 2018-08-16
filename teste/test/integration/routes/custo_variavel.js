import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: custo_variavel', () => {
	const custo_variavel = app.datasource.models.custo_variavel;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcusto_variavel = {
		"tipo":"sen3k",
		"notaFiscal":"ts5ar",
		"dataCusto":"sbhji",
		"totalParcelas":644,
		"valorTotal":"nghdha",
		"totalServico":"lopgv",
		"totalSuprimento":"3bmm1",
		"frete":"w1bn2j",
		"subgrupoFrete":87,
		"valorFrete":"v8zgf",
		"incluirFrete":"e19igt",
		"primeiroVencimento":"mlj3sx",
		"totalParcelamento":"hn2t",
		"planoContasFk":882,
		"grupoContasFk":24,
		"subgrupoContasFk":753,
		"historico":"y9z6c1",
		"credorFornecedor":584,
		"credorFuncionario":354,
		"tipoCredor":"llprjr",
		"obs":"qarfzj",
		"createdAt":"sx55jf",
		"updatedAt":"nyj55"
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
			custo_variavel
			.destroy({ where: {} })
			.then(() => custo_variavel.create(defaultcusto_variavel))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /custo_variavel', () => {
		it('should return a list of custo_variavel', done => {
			request
			.get('/custo_variavel')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcusto_variavel.id);
				expect(res.body[0].tipo).to.eql(defaultcusto_variavel.tipo);
				expect(res.body[0].notaFiscal).to.eql(defaultcusto_variavel.notaFiscal);
				expect(res.body[0].dataCusto).to.eql(defaultcusto_variavel.dataCusto);
				expect(res.body[0].totalParcelas).to.eql(defaultcusto_variavel.totalParcelas);
				expect(res.body[0].valorTotal).to.eql(defaultcusto_variavel.valorTotal);
				expect(res.body[0].totalServico).to.eql(defaultcusto_variavel.totalServico);
				expect(res.body[0].totalSuprimento).to.eql(defaultcusto_variavel.totalSuprimento);
				expect(res.body[0].frete).to.eql(defaultcusto_variavel.frete);
				expect(res.body[0].subgrupoFrete).to.eql(defaultcusto_variavel.subgrupoFrete);
				expect(res.body[0].valorFrete).to.eql(defaultcusto_variavel.valorFrete);
				expect(res.body[0].incluirFrete).to.eql(defaultcusto_variavel.incluirFrete);
				expect(res.body[0].primeiroVencimento).to.eql(defaultcusto_variavel.primeiroVencimento);
				expect(res.body[0].totalParcelamento).to.eql(defaultcusto_variavel.totalParcelamento);
				expect(res.body[0].planoContasFk).to.eql(defaultcusto_variavel.planoContasFk);
				expect(res.body[0].grupoContasFk).to.eql(defaultcusto_variavel.grupoContasFk);
				expect(res.body[0].subgrupoContasFk).to.eql(defaultcusto_variavel.subgrupoContasFk);
				expect(res.body[0].historico).to.eql(defaultcusto_variavel.historico);
				expect(res.body[0].credorFornecedor).to.eql(defaultcusto_variavel.credorFornecedor);
				expect(res.body[0].credorFuncionario).to.eql(defaultcusto_variavel.credorFuncionario);
				expect(res.body[0].tipoCredor).to.eql(defaultcusto_variavel.tipoCredor);
				expect(res.body[0].obs).to.eql(defaultcusto_variavel.obs);
				expect(res.body[0].createdAt).to.eql(defaultcusto_variavel.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcusto_variavel.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /custo_variavel/{id}', () => {
		it('should return a custo_variavel by id', done => {
			request
			.get('/custo_variavel/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcusto_variavel.id);
				expect(res.body.tipo).to.eql(defaultcusto_variavel.tipo);
				expect(res.body.notaFiscal).to.eql(defaultcusto_variavel.notaFiscal);
				expect(res.body.dataCusto).to.eql(defaultcusto_variavel.dataCusto);
				expect(res.body.totalParcelas).to.eql(defaultcusto_variavel.totalParcelas);
				expect(res.body.valorTotal).to.eql(defaultcusto_variavel.valorTotal);
				expect(res.body.totalServico).to.eql(defaultcusto_variavel.totalServico);
				expect(res.body.totalSuprimento).to.eql(defaultcusto_variavel.totalSuprimento);
				expect(res.body.frete).to.eql(defaultcusto_variavel.frete);
				expect(res.body.subgrupoFrete).to.eql(defaultcusto_variavel.subgrupoFrete);
				expect(res.body.valorFrete).to.eql(defaultcusto_variavel.valorFrete);
				expect(res.body.incluirFrete).to.eql(defaultcusto_variavel.incluirFrete);
				expect(res.body.primeiroVencimento).to.eql(defaultcusto_variavel.primeiroVencimento);
				expect(res.body.totalParcelamento).to.eql(defaultcusto_variavel.totalParcelamento);
				expect(res.body.planoContasFk).to.eql(defaultcusto_variavel.planoContasFk);
				expect(res.body.grupoContasFk).to.eql(defaultcusto_variavel.grupoContasFk);
				expect(res.body.subgrupoContasFk).to.eql(defaultcusto_variavel.subgrupoContasFk);
				expect(res.body.historico).to.eql(defaultcusto_variavel.historico);
				expect(res.body.credorFornecedor).to.eql(defaultcusto_variavel.credorFornecedor);
				expect(res.body.credorFuncionario).to.eql(defaultcusto_variavel.credorFuncionario);
				expect(res.body.tipoCredor).to.eql(defaultcusto_variavel.tipoCredor);
				expect(res.body.obs).to.eql(defaultcusto_variavel.obs);
				expect(res.body.createdAt).to.eql(defaultcusto_variavel.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcusto_variavel.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /custo_variavel', () => {
		it('should post a custo_variavel', done => {
			const custo_variave = {
		"tipo":"int3h",
		"notaFiscal":"ktze4",
		"dataCusto":"yqvix9",
		"totalParcelas":151,
		"valorTotal":"o8xbwi",
		"totalServico":"wqlspr",
		"totalSuprimento":"ftsznm",
		"frete":"fte8hc",
		"subgrupoFrete":459,
		"valorFrete":"0k0ovd",
		"incluirFrete":"oq0c0i",
		"primeiroVencimento":"28nkan",
		"totalParcelamento":"hvo6np",
		"planoContasFk":914,
		"grupoContasFk":620,
		"subgrupoContasFk":736,
		"historico":"bll5ca",
		"credorFornecedor":690,
		"credorFuncionario":225,
		"tipoCredor":"5bfw4",
		"obs":"k9v79m",
		"createdAt":"vkw2kd",
		"updatedAt":"rvjdke"
	};

			request
			.post('/custo_variavel')
			.set('Authorization', `JWT ${token}`)
			.send(custo_variave)
			.end((err, res) => {
				expect(res.body.id).to.eql(custo_variavel.id);
				expect(res.body.tipo).to.eql(custo_variavel.tipo);
				expect(res.body.notaFiscal).to.eql(custo_variavel.notaFiscal);
				expect(res.body.dataCusto).to.eql(custo_variavel.dataCusto);
				expect(res.body.totalParcelas).to.eql(custo_variavel.totalParcelas);
				expect(res.body.valorTotal).to.eql(custo_variavel.valorTotal);
				expect(res.body.totalServico).to.eql(custo_variavel.totalServico);
				expect(res.body.totalSuprimento).to.eql(custo_variavel.totalSuprimento);
				expect(res.body.frete).to.eql(custo_variavel.frete);
				expect(res.body.subgrupoFrete).to.eql(custo_variavel.subgrupoFrete);
				expect(res.body.valorFrete).to.eql(custo_variavel.valorFrete);
				expect(res.body.incluirFrete).to.eql(custo_variavel.incluirFrete);
				expect(res.body.primeiroVencimento).to.eql(custo_variavel.primeiroVencimento);
				expect(res.body.totalParcelamento).to.eql(custo_variavel.totalParcelamento);
				expect(res.body.planoContasFk).to.eql(custo_variavel.planoContasFk);
				expect(res.body.grupoContasFk).to.eql(custo_variavel.grupoContasFk);
				expect(res.body.subgrupoContasFk).to.eql(custo_variavel.subgrupoContasFk);
				expect(res.body.historico).to.eql(custo_variavel.historico);
				expect(res.body.credorFornecedor).to.eql(custo_variavel.credorFornecedor);
				expect(res.body.credorFuncionario).to.eql(custo_variavel.credorFuncionario);
				expect(res.body.tipoCredor).to.eql(custo_variavel.tipoCredor);
				expect(res.body.obs).to.eql(custo_variavel.obs);
				expect(res.body.createdAt).to.eql(custo_variavel.createdAt);
				expect(res.body.updatedAt).to.eql(custo_variavel.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /custo_variavel/{id}', () => {
		it('should update a custo_variavel', done => {
			const custo_variave = {
		"id":"1",
		"tipo":"mad0d6",
		"notaFiscal":"6yrb2n",
		"dataCusto":"d1yihk",
		"totalParcelas":49,
		"valorTotal":"ptshmc",
		"totalServico":"gdfu8y",
		"totalSuprimento":"avr7ni",
		"frete":"l7qydf",
		"subgrupoFrete":585,
		"valorFrete":"pf9cqm",
		"incluirFrete":"7jni3e",
		"primeiroVencimento":"7tt1qa",
		"totalParcelamento":"3w22yf",
		"planoContasFk":785,
		"grupoContasFk":192,
		"subgrupoContasFk":216,
		"historico":"y18aki",
		"credorFornecedor":690,
		"credorFuncionario":116,
		"tipoCredor":"5ka9n",
		"obs":"wch5g5",
		"createdAt":"ghxkpn",
		"updatedAt":"gr9wn"
	};

			request
			.put('/custo_variavel/1')
			.set('Authorization', `JWT ${token}`)
			.send(custo_variave)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /custo_variavel/{id}', () => {
		it('should delete a custo_variavel', done => {
			request
			.delete('/custo_variavel/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
