import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: configuracoes_financeiras', () => {
	const configuracoes_financeiras = app.datasource.models.configuracoes_financeiras;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultconfiguracoes_financeiras = {
		"multaBoleto":"cs9hsh",
		"moraBoleto":"8uxlrk8",
		"instrucaoBoleto":"5a4txv",
		"multaSimples":"zlvdof",
		"moraSimples":"ucdamk",
		"operadoraPadrao":420,
		"periodoGeracao":"4b33jh",
		"prazoProrata":824,
		"valorMinimoProrata":"bpr12",
		"vencimentoBloqueio":454,
		"intervaloLiberacaoConfianca":340,
		"unidadeLiberacaoConfianca":"04pol",
		"intervaloAlteracaoDiaPagamento":900,
		"unidadeAlteracaoDiaPagamento":"q6o6p9",
		"notificationEnabled":"flv75g",
		"notificationSound":"w01x8b",
		"createdAt":"2scc6",
		"updatedAt":"z46qj"
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
			configuracoes_financeiras
			.destroy({ where: {} })
			.then(() => configuracoes_financeiras.create(defaultconfiguracoes_financeiras))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /configuracoes_financeiras', () => {
		it('should return a list of configuracoes_financeiras', done => {
			request
			.get('/configuracoes_financeiras')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultconfiguracoes_financeiras.id);
				expect(res.body[0].multaBoleto).to.eql(defaultconfiguracoes_financeiras.multaBoleto);
				expect(res.body[0].moraBoleto).to.eql(defaultconfiguracoes_financeiras.moraBoleto);
				expect(res.body[0].instrucaoBoleto).to.eql(defaultconfiguracoes_financeiras.instrucaoBoleto);
				expect(res.body[0].multaSimples).to.eql(defaultconfiguracoes_financeiras.multaSimples);
				expect(res.body[0].moraSimples).to.eql(defaultconfiguracoes_financeiras.moraSimples);
				expect(res.body[0].operadoraPadrao).to.eql(defaultconfiguracoes_financeiras.operadoraPadrao);
				expect(res.body[0].periodoGeracao).to.eql(defaultconfiguracoes_financeiras.periodoGeracao);
				expect(res.body[0].prazoProrata).to.eql(defaultconfiguracoes_financeiras.prazoProrata);
				expect(res.body[0].valorMinimoProrata).to.eql(defaultconfiguracoes_financeiras.valorMinimoProrata);
				expect(res.body[0].vencimentoBloqueio).to.eql(defaultconfiguracoes_financeiras.vencimentoBloqueio);
				expect(res.body[0].intervaloLiberacaoConfianca).to.eql(defaultconfiguracoes_financeiras.intervaloLiberacaoConfianca);
				expect(res.body[0].unidadeLiberacaoConfianca).to.eql(defaultconfiguracoes_financeiras.unidadeLiberacaoConfianca);
				expect(res.body[0].intervaloAlteracaoDiaPagamento).to.eql(defaultconfiguracoes_financeiras.intervaloAlteracaoDiaPagamento);
				expect(res.body[0].unidadeAlteracaoDiaPagamento).to.eql(defaultconfiguracoes_financeiras.unidadeAlteracaoDiaPagamento);
				expect(res.body[0].notificationEnabled).to.eql(defaultconfiguracoes_financeiras.notificationEnabled);
				expect(res.body[0].notificationSound).to.eql(defaultconfiguracoes_financeiras.notificationSound);
				expect(res.body[0].createdAt).to.eql(defaultconfiguracoes_financeiras.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultconfiguracoes_financeiras.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /configuracoes_financeiras/{id}', () => {
		it('should return a configuracoes_financeiras by id', done => {
			request
			.get('/configuracoes_financeiras/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultconfiguracoes_financeiras.id);
				expect(res.body.multaBoleto).to.eql(defaultconfiguracoes_financeiras.multaBoleto);
				expect(res.body.moraBoleto).to.eql(defaultconfiguracoes_financeiras.moraBoleto);
				expect(res.body.instrucaoBoleto).to.eql(defaultconfiguracoes_financeiras.instrucaoBoleto);
				expect(res.body.multaSimples).to.eql(defaultconfiguracoes_financeiras.multaSimples);
				expect(res.body.moraSimples).to.eql(defaultconfiguracoes_financeiras.moraSimples);
				expect(res.body.operadoraPadrao).to.eql(defaultconfiguracoes_financeiras.operadoraPadrao);
				expect(res.body.periodoGeracao).to.eql(defaultconfiguracoes_financeiras.periodoGeracao);
				expect(res.body.prazoProrata).to.eql(defaultconfiguracoes_financeiras.prazoProrata);
				expect(res.body.valorMinimoProrata).to.eql(defaultconfiguracoes_financeiras.valorMinimoProrata);
				expect(res.body.vencimentoBloqueio).to.eql(defaultconfiguracoes_financeiras.vencimentoBloqueio);
				expect(res.body.intervaloLiberacaoConfianca).to.eql(defaultconfiguracoes_financeiras.intervaloLiberacaoConfianca);
				expect(res.body.unidadeLiberacaoConfianca).to.eql(defaultconfiguracoes_financeiras.unidadeLiberacaoConfianca);
				expect(res.body.intervaloAlteracaoDiaPagamento).to.eql(defaultconfiguracoes_financeiras.intervaloAlteracaoDiaPagamento);
				expect(res.body.unidadeAlteracaoDiaPagamento).to.eql(defaultconfiguracoes_financeiras.unidadeAlteracaoDiaPagamento);
				expect(res.body.notificationEnabled).to.eql(defaultconfiguracoes_financeiras.notificationEnabled);
				expect(res.body.notificationSound).to.eql(defaultconfiguracoes_financeiras.notificationSound);
				expect(res.body.createdAt).to.eql(defaultconfiguracoes_financeiras.createdAt);
				expect(res.body.updatedAt).to.eql(defaultconfiguracoes_financeiras.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /configuracoes_financeiras', () => {
		it('should post a configuracoes_financeiras', done => {
			const configuracoes_financeira = {
		"multaBoleto":"2l85nh",
		"moraBoleto":"uh66m",
		"instrucaoBoleto":"s0ft7",
		"multaSimples":"yxgev",
		"moraSimples":"wq5l3s",
		"operadoraPadrao":238,
		"periodoGeracao":"tce2vk",
		"prazoProrata":207,
		"valorMinimoProrata":"fke83n",
		"vencimentoBloqueio":193,
		"intervaloLiberacaoConfianca":576,
		"unidadeLiberacaoConfianca":"a23vwk",
		"intervaloAlteracaoDiaPagamento":334,
		"unidadeAlteracaoDiaPagamento":"qdlfyc",
		"notificationEnabled":"oqjq09",
		"notificationSound":"8caanw",
		"createdAt":"w2owpe",
		"updatedAt":"b08ij6"
	};

			request
			.post('/configuracoes_financeiras')
			.set('Authorization', `JWT ${token}`)
			.send(configuracoes_financeira)
			.end((err, res) => {
				expect(res.body.id).to.eql(configuracoes_financeiras.id);
				expect(res.body.multaBoleto).to.eql(configuracoes_financeiras.multaBoleto);
				expect(res.body.moraBoleto).to.eql(configuracoes_financeiras.moraBoleto);
				expect(res.body.instrucaoBoleto).to.eql(configuracoes_financeiras.instrucaoBoleto);
				expect(res.body.multaSimples).to.eql(configuracoes_financeiras.multaSimples);
				expect(res.body.moraSimples).to.eql(configuracoes_financeiras.moraSimples);
				expect(res.body.operadoraPadrao).to.eql(configuracoes_financeiras.operadoraPadrao);
				expect(res.body.periodoGeracao).to.eql(configuracoes_financeiras.periodoGeracao);
				expect(res.body.prazoProrata).to.eql(configuracoes_financeiras.prazoProrata);
				expect(res.body.valorMinimoProrata).to.eql(configuracoes_financeiras.valorMinimoProrata);
				expect(res.body.vencimentoBloqueio).to.eql(configuracoes_financeiras.vencimentoBloqueio);
				expect(res.body.intervaloLiberacaoConfianca).to.eql(configuracoes_financeiras.intervaloLiberacaoConfianca);
				expect(res.body.unidadeLiberacaoConfianca).to.eql(configuracoes_financeiras.unidadeLiberacaoConfianca);
				expect(res.body.intervaloAlteracaoDiaPagamento).to.eql(configuracoes_financeiras.intervaloAlteracaoDiaPagamento);
				expect(res.body.unidadeAlteracaoDiaPagamento).to.eql(configuracoes_financeiras.unidadeAlteracaoDiaPagamento);
				expect(res.body.notificationEnabled).to.eql(configuracoes_financeiras.notificationEnabled);
				expect(res.body.notificationSound).to.eql(configuracoes_financeiras.notificationSound);
				expect(res.body.createdAt).to.eql(configuracoes_financeiras.createdAt);
				expect(res.body.updatedAt).to.eql(configuracoes_financeiras.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /configuracoes_financeiras/{id}', () => {
		it('should update a configuracoes_financeiras', done => {
			const configuracoes_financeira = {
		"id":"1",
		"multaBoleto":"uzh2bp",
		"moraBoleto":"4odh4i",
		"instrucaoBoleto":"2mwner",
		"multaSimples":"kezmy4",
		"moraSimples":"vi442o",
		"operadoraPadrao":910,
		"periodoGeracao":"o8o4ad",
		"prazoProrata":261,
		"valorMinimoProrata":"190h2",
		"vencimentoBloqueio":38,
		"intervaloLiberacaoConfianca":766,
		"unidadeLiberacaoConfianca":"k2zard",
		"intervaloAlteracaoDiaPagamento":1,
		"unidadeAlteracaoDiaPagamento":"k243zw",
		"notificationEnabled":"hw91dq",
		"notificationSound":"4xt2yg",
		"createdAt":"637ryi",
		"updatedAt":"im3c59"
	};

			request
			.put('/configuracoes_financeiras/1')
			.set('Authorization', `JWT ${token}`)
			.send(configuracoes_financeira)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /configuracoes_financeiras/{id}', () => {
		it('should delete a configuracoes_financeiras', done => {
			request
			.delete('/configuracoes_financeiras/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
