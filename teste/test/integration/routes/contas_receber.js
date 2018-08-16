import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: contas_receber', () => {
	const contas_receber = app.datasource.models.contas_receber;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcontas_receber = {
		"obs":"8km3w",
		"referencia":"nlfoab",
		"valorReceber":"q9r7bb",
		"valorRecebido":"7xazv",
		"valorTarifa":"8ifsc8",
		"dataVencimento":"l7wfnk",
		"dataRecebimento":"h89ygc",
		"tipoRecebimento":"x7ezog",
		"atraso":112,
		"createdAt":"hswg8y",
		"updatedAt":"uyayno",
		"status":"kgqt99",
		"atendimentosFk":"g8vhmp",
		"operadorAbriu":373,
		"operadorFechou":169,
		"chequeNumero":"u6vgz",
		"chequeDataEmissao":"kzq4pi",
		"chequeDataPredatado":"a5n7oh",
		"chequeAgencia":"k747x9",
		"chequeConta":"plo8lk",
		"chequeTipoPessoa":"f3l0f",
		"chequeEmitente":"iffa0o",
		"chequeEmitenteCpfCnpj":"u6a8bl",
		"chequeFederatedBaseBancoFk":674,
		"cartaoNumeroAutenticacao":"i5rps7",
		"cartaoTipo":"sqno9",
		"cartaoOperadorasCartaoFk":643,
		"simplesMora":"zaphid",
		"simplesMulta":"3nijq",
		"boletoFlagRemessa":"wy9dej",
		"boletoOcorrencia":"8u7mml",
		"boletoTipoOcorrencia":774,
		"boletoDescricaoOcorrencia":"852xe",
		"boletoDataCredito":"277q4v",
		"boletoNossoNumero":"1jigi1",
		"boletoNumeroDocumento":"r9qbh",
		"boletoLinhaDigitavel":"39x24",
		"boletoInstrucoes":"pty4vn",
		"boletoMora":"s4925",
		"boletoMulta":"h8thpo",
		"boletoOperadorasBoletoFk":943
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
			contas_receber
			.destroy({ where: {} })
			.then(() => contas_receber.create(defaultcontas_receber))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /contas_receber', () => {
		it('should return a list of contas_receber', done => {
			request
			.get('/contas_receber')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcontas_receber.id);
				expect(res.body[0].obs).to.eql(defaultcontas_receber.obs);
				expect(res.body[0].referencia).to.eql(defaultcontas_receber.referencia);
				expect(res.body[0].valorReceber).to.eql(defaultcontas_receber.valorReceber);
				expect(res.body[0].valorRecebido).to.eql(defaultcontas_receber.valorRecebido);
				expect(res.body[0].valorTarifa).to.eql(defaultcontas_receber.valorTarifa);
				expect(res.body[0].dataVencimento).to.eql(defaultcontas_receber.dataVencimento);
				expect(res.body[0].dataRecebimento).to.eql(defaultcontas_receber.dataRecebimento);
				expect(res.body[0].tipoRecebimento).to.eql(defaultcontas_receber.tipoRecebimento);
				expect(res.body[0].atraso).to.eql(defaultcontas_receber.atraso);
				expect(res.body[0].createdAt).to.eql(defaultcontas_receber.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcontas_receber.updatedAt);
				expect(res.body[0].status).to.eql(defaultcontas_receber.status);
				expect(res.body[0].atendimentosFk).to.eql(defaultcontas_receber.atendimentosFk);
				expect(res.body[0].operadorAbriu).to.eql(defaultcontas_receber.operadorAbriu);
				expect(res.body[0].operadorFechou).to.eql(defaultcontas_receber.operadorFechou);
				expect(res.body[0].chequeNumero).to.eql(defaultcontas_receber.chequeNumero);
				expect(res.body[0].chequeDataEmissao).to.eql(defaultcontas_receber.chequeDataEmissao);
				expect(res.body[0].chequeDataPredatado).to.eql(defaultcontas_receber.chequeDataPredatado);
				expect(res.body[0].chequeAgencia).to.eql(defaultcontas_receber.chequeAgencia);
				expect(res.body[0].chequeConta).to.eql(defaultcontas_receber.chequeConta);
				expect(res.body[0].chequeTipoPessoa).to.eql(defaultcontas_receber.chequeTipoPessoa);
				expect(res.body[0].chequeEmitente).to.eql(defaultcontas_receber.chequeEmitente);
				expect(res.body[0].chequeEmitenteCpfCnpj).to.eql(defaultcontas_receber.chequeEmitenteCpfCnpj);
				expect(res.body[0].chequeFederatedBaseBancoFk).to.eql(defaultcontas_receber.chequeFederatedBaseBancoFk);
				expect(res.body[0].cartaoNumeroAutenticacao).to.eql(defaultcontas_receber.cartaoNumeroAutenticacao);
				expect(res.body[0].cartaoTipo).to.eql(defaultcontas_receber.cartaoTipo);
				expect(res.body[0].cartaoOperadorasCartaoFk).to.eql(defaultcontas_receber.cartaoOperadorasCartaoFk);
				expect(res.body[0].simplesMora).to.eql(defaultcontas_receber.simplesMora);
				expect(res.body[0].simplesMulta).to.eql(defaultcontas_receber.simplesMulta);
				expect(res.body[0].boletoFlagRemessa).to.eql(defaultcontas_receber.boletoFlagRemessa);
				expect(res.body[0].boletoOcorrencia).to.eql(defaultcontas_receber.boletoOcorrencia);
				expect(res.body[0].boletoTipoOcorrencia).to.eql(defaultcontas_receber.boletoTipoOcorrencia);
				expect(res.body[0].boletoDescricaoOcorrencia).to.eql(defaultcontas_receber.boletoDescricaoOcorrencia);
				expect(res.body[0].boletoDataCredito).to.eql(defaultcontas_receber.boletoDataCredito);
				expect(res.body[0].boletoNossoNumero).to.eql(defaultcontas_receber.boletoNossoNumero);
				expect(res.body[0].boletoNumeroDocumento).to.eql(defaultcontas_receber.boletoNumeroDocumento);
				expect(res.body[0].boletoLinhaDigitavel).to.eql(defaultcontas_receber.boletoLinhaDigitavel);
				expect(res.body[0].boletoInstrucoes).to.eql(defaultcontas_receber.boletoInstrucoes);
				expect(res.body[0].boletoMora).to.eql(defaultcontas_receber.boletoMora);
				expect(res.body[0].boletoMulta).to.eql(defaultcontas_receber.boletoMulta);
				expect(res.body[0].boletoOperadorasBoletoFk).to.eql(defaultcontas_receber.boletoOperadorasBoletoFk);
				done(err);
			});
		});
	});

	describe('GET /contas_receber/{id}', () => {
		it('should return a contas_receber by id', done => {
			request
			.get('/contas_receber/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcontas_receber.id);
				expect(res.body.obs).to.eql(defaultcontas_receber.obs);
				expect(res.body.referencia).to.eql(defaultcontas_receber.referencia);
				expect(res.body.valorReceber).to.eql(defaultcontas_receber.valorReceber);
				expect(res.body.valorRecebido).to.eql(defaultcontas_receber.valorRecebido);
				expect(res.body.valorTarifa).to.eql(defaultcontas_receber.valorTarifa);
				expect(res.body.dataVencimento).to.eql(defaultcontas_receber.dataVencimento);
				expect(res.body.dataRecebimento).to.eql(defaultcontas_receber.dataRecebimento);
				expect(res.body.tipoRecebimento).to.eql(defaultcontas_receber.tipoRecebimento);
				expect(res.body.atraso).to.eql(defaultcontas_receber.atraso);
				expect(res.body.createdAt).to.eql(defaultcontas_receber.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcontas_receber.updatedAt);
				expect(res.body.status).to.eql(defaultcontas_receber.status);
				expect(res.body.atendimentosFk).to.eql(defaultcontas_receber.atendimentosFk);
				expect(res.body.operadorAbriu).to.eql(defaultcontas_receber.operadorAbriu);
				expect(res.body.operadorFechou).to.eql(defaultcontas_receber.operadorFechou);
				expect(res.body.chequeNumero).to.eql(defaultcontas_receber.chequeNumero);
				expect(res.body.chequeDataEmissao).to.eql(defaultcontas_receber.chequeDataEmissao);
				expect(res.body.chequeDataPredatado).to.eql(defaultcontas_receber.chequeDataPredatado);
				expect(res.body.chequeAgencia).to.eql(defaultcontas_receber.chequeAgencia);
				expect(res.body.chequeConta).to.eql(defaultcontas_receber.chequeConta);
				expect(res.body.chequeTipoPessoa).to.eql(defaultcontas_receber.chequeTipoPessoa);
				expect(res.body.chequeEmitente).to.eql(defaultcontas_receber.chequeEmitente);
				expect(res.body.chequeEmitenteCpfCnpj).to.eql(defaultcontas_receber.chequeEmitenteCpfCnpj);
				expect(res.body.chequeFederatedBaseBancoFk).to.eql(defaultcontas_receber.chequeFederatedBaseBancoFk);
				expect(res.body.cartaoNumeroAutenticacao).to.eql(defaultcontas_receber.cartaoNumeroAutenticacao);
				expect(res.body.cartaoTipo).to.eql(defaultcontas_receber.cartaoTipo);
				expect(res.body.cartaoOperadorasCartaoFk).to.eql(defaultcontas_receber.cartaoOperadorasCartaoFk);
				expect(res.body.simplesMora).to.eql(defaultcontas_receber.simplesMora);
				expect(res.body.simplesMulta).to.eql(defaultcontas_receber.simplesMulta);
				expect(res.body.boletoFlagRemessa).to.eql(defaultcontas_receber.boletoFlagRemessa);
				expect(res.body.boletoOcorrencia).to.eql(defaultcontas_receber.boletoOcorrencia);
				expect(res.body.boletoTipoOcorrencia).to.eql(defaultcontas_receber.boletoTipoOcorrencia);
				expect(res.body.boletoDescricaoOcorrencia).to.eql(defaultcontas_receber.boletoDescricaoOcorrencia);
				expect(res.body.boletoDataCredito).to.eql(defaultcontas_receber.boletoDataCredito);
				expect(res.body.boletoNossoNumero).to.eql(defaultcontas_receber.boletoNossoNumero);
				expect(res.body.boletoNumeroDocumento).to.eql(defaultcontas_receber.boletoNumeroDocumento);
				expect(res.body.boletoLinhaDigitavel).to.eql(defaultcontas_receber.boletoLinhaDigitavel);
				expect(res.body.boletoInstrucoes).to.eql(defaultcontas_receber.boletoInstrucoes);
				expect(res.body.boletoMora).to.eql(defaultcontas_receber.boletoMora);
				expect(res.body.boletoMulta).to.eql(defaultcontas_receber.boletoMulta);
				expect(res.body.boletoOperadorasBoletoFk).to.eql(defaultcontas_receber.boletoOperadorasBoletoFk);
				done(err);
			});
		});
	});

	describe('POST /contas_receber', () => {
		it('should post a contas_receber', done => {
			const contas_recebe = {
		"obs":"jqxwa8",
		"referencia":"avo3ca",
		"valorReceber":"zg10sn",
		"valorRecebido":"rqohb",
		"valorTarifa":"myg09",
		"dataVencimento":"py174w",
		"dataRecebimento":"rpv1n8",
		"tipoRecebimento":"lqx71c",
		"atraso":274,
		"createdAt":"vbtdph",
		"updatedAt":"emr62",
		"status":"pk2jx9",
		"atendimentosFk":"tqqvi",
		"operadorAbriu":518,
		"operadorFechou":266,
		"chequeNumero":"4x7w2g",
		"chequeDataEmissao":"mdp5bl",
		"chequeDataPredatado":"25d0se",
		"chequeAgencia":"pwti6",
		"chequeConta":"wqjj49",
		"chequeTipoPessoa":"v4g6x4",
		"chequeEmitente":"rlutr",
		"chequeEmitenteCpfCnpj":"x3dqt",
		"chequeFederatedBaseBancoFk":331,
		"cartaoNumeroAutenticacao":"jt5lqd",
		"cartaoTipo":"5yjar",
		"cartaoOperadorasCartaoFk":495,
		"simplesMora":"vxmkv",
		"simplesMulta":"fifuro",
		"boletoFlagRemessa":"4dlkqw",
		"boletoOcorrencia":"xsr1xd",
		"boletoTipoOcorrencia":712,
		"boletoDescricaoOcorrencia":"9w7h7b",
		"boletoDataCredito":"t31j1p",
		"boletoNossoNumero":"isqlxa",
		"boletoNumeroDocumento":"txsq8x",
		"boletoLinhaDigitavel":"1kb3sm",
		"boletoInstrucoes":"69yzu",
		"boletoMora":"tm0rgo",
		"boletoMulta":"tme87vh",
		"boletoOperadorasBoletoFk":442
	};

			request
			.post('/contas_receber')
			.set('Authorization', `JWT ${token}`)
			.send(contas_recebe)
			.end((err, res) => {
				expect(res.body.id).to.eql(contas_receber.id);
				expect(res.body.obs).to.eql(contas_receber.obs);
				expect(res.body.referencia).to.eql(contas_receber.referencia);
				expect(res.body.valorReceber).to.eql(contas_receber.valorReceber);
				expect(res.body.valorRecebido).to.eql(contas_receber.valorRecebido);
				expect(res.body.valorTarifa).to.eql(contas_receber.valorTarifa);
				expect(res.body.dataVencimento).to.eql(contas_receber.dataVencimento);
				expect(res.body.dataRecebimento).to.eql(contas_receber.dataRecebimento);
				expect(res.body.tipoRecebimento).to.eql(contas_receber.tipoRecebimento);
				expect(res.body.atraso).to.eql(contas_receber.atraso);
				expect(res.body.createdAt).to.eql(contas_receber.createdAt);
				expect(res.body.updatedAt).to.eql(contas_receber.updatedAt);
				expect(res.body.status).to.eql(contas_receber.status);
				expect(res.body.atendimentosFk).to.eql(contas_receber.atendimentosFk);
				expect(res.body.operadorAbriu).to.eql(contas_receber.operadorAbriu);
				expect(res.body.operadorFechou).to.eql(contas_receber.operadorFechou);
				expect(res.body.chequeNumero).to.eql(contas_receber.chequeNumero);
				expect(res.body.chequeDataEmissao).to.eql(contas_receber.chequeDataEmissao);
				expect(res.body.chequeDataPredatado).to.eql(contas_receber.chequeDataPredatado);
				expect(res.body.chequeAgencia).to.eql(contas_receber.chequeAgencia);
				expect(res.body.chequeConta).to.eql(contas_receber.chequeConta);
				expect(res.body.chequeTipoPessoa).to.eql(contas_receber.chequeTipoPessoa);
				expect(res.body.chequeEmitente).to.eql(contas_receber.chequeEmitente);
				expect(res.body.chequeEmitenteCpfCnpj).to.eql(contas_receber.chequeEmitenteCpfCnpj);
				expect(res.body.chequeFederatedBaseBancoFk).to.eql(contas_receber.chequeFederatedBaseBancoFk);
				expect(res.body.cartaoNumeroAutenticacao).to.eql(contas_receber.cartaoNumeroAutenticacao);
				expect(res.body.cartaoTipo).to.eql(contas_receber.cartaoTipo);
				expect(res.body.cartaoOperadorasCartaoFk).to.eql(contas_receber.cartaoOperadorasCartaoFk);
				expect(res.body.simplesMora).to.eql(contas_receber.simplesMora);
				expect(res.body.simplesMulta).to.eql(contas_receber.simplesMulta);
				expect(res.body.boletoFlagRemessa).to.eql(contas_receber.boletoFlagRemessa);
				expect(res.body.boletoOcorrencia).to.eql(contas_receber.boletoOcorrencia);
				expect(res.body.boletoTipoOcorrencia).to.eql(contas_receber.boletoTipoOcorrencia);
				expect(res.body.boletoDescricaoOcorrencia).to.eql(contas_receber.boletoDescricaoOcorrencia);
				expect(res.body.boletoDataCredito).to.eql(contas_receber.boletoDataCredito);
				expect(res.body.boletoNossoNumero).to.eql(contas_receber.boletoNossoNumero);
				expect(res.body.boletoNumeroDocumento).to.eql(contas_receber.boletoNumeroDocumento);
				expect(res.body.boletoLinhaDigitavel).to.eql(contas_receber.boletoLinhaDigitavel);
				expect(res.body.boletoInstrucoes).to.eql(contas_receber.boletoInstrucoes);
				expect(res.body.boletoMora).to.eql(contas_receber.boletoMora);
				expect(res.body.boletoMulta).to.eql(contas_receber.boletoMulta);
				expect(res.body.boletoOperadorasBoletoFk).to.eql(contas_receber.boletoOperadorasBoletoFk);
				done(err);
			});
		});
	});

	describe('PUT /contas_receber/{id}', () => {
		it('should update a contas_receber', done => {
			const contas_recebe = {
		"id":"1",
		"obs":"mr8zpl",
		"referencia":"ncyej",
		"valorReceber":"720uu",
		"valorRecebido":"it0q9",
		"valorTarifa":"6xmcff",
		"dataVencimento":"qbo7q",
		"dataRecebimento":"cq9e89",
		"tipoRecebimento":"9rqk6",
		"atraso":832,
		"createdAt":"cdn4nf",
		"updatedAt":"zyfq8",
		"status":"et6ezp",
		"atendimentosFk":"3fvcq",
		"operadorAbriu":106,
		"operadorFechou":754,
		"chequeNumero":"e2n75q",
		"chequeDataEmissao":"5j68rt",
		"chequeDataPredatado":"vso9m5",
		"chequeAgencia":"1sfr1",
		"chequeConta":"tifxwb",
		"chequeTipoPessoa":"1mcaac",
		"chequeEmitente":"l9zvid",
		"chequeEmitenteCpfCnpj":"s0goor",
		"chequeFederatedBaseBancoFk":28,
		"cartaoNumeroAutenticacao":"tjtg4t",
		"cartaoTipo":"59sxui",
		"cartaoOperadorasCartaoFk":120,
		"simplesMora":"ye4oir",
		"simplesMulta":"sn20pw",
		"boletoFlagRemessa":"7utu17",
		"boletoOcorrencia":"im4fu",
		"boletoTipoOcorrencia":863,
		"boletoDescricaoOcorrencia":"3k2e91",
		"boletoDataCredito":"dwrtvd",
		"boletoNossoNumero":"zqwyr",
		"boletoNumeroDocumento":"oh9tdy",
		"boletoLinhaDigitavel":"7zfx1a",
		"boletoInstrucoes":"74iv8",
		"boletoMora":"r61q6l",
		"boletoMulta":"iuw9yn",
		"boletoOperadorasBoletoFk":986
	};

			request
			.put('/contas_receber/1')
			.set('Authorization', `JWT ${token}`)
			.send(contas_recebe)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /contas_receber/{id}', () => {
		it('should delete a contas_receber', done => {
			request
			.delete('/contas_receber/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
