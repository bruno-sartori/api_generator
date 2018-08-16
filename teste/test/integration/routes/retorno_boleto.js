import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: retorno_boleto', () => {
	const retorno_boleto = app.datasource.models.retorno_boleto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultretorno_boleto = {
		"filePath":"ni35ou",
		"dataRetorno":"as03vc",
		"createdAt":"34wtce",
		"updatedAt":"espw2m",
		"operacaoCodigo":"vb84ke",
		"operacao":"ubtwpf",
		"servicoCodigo":"igd9p",
		"servico":"k18017",
		"agencia":"z6miml",
		"agenciaDv":"8ywlaj",
		"conta":"xs45lt",
		"contaDv":"egjoph",
		"codigoCliente":"0wr45e",
		"valorTitulos":"9xl2uo",
		"avisos":"9yf7o6t",
		"quantidadeTitulos":"idjiv",
		"quantidadeLiquidados":"uw07u",
		"quantidadeBaixados":"nuegrpt",
		"quantidadeEntradas":"noarf9",
		"quantidadeAlterados":"2zlzc",
		"quantidadeErros":"h6v1vq"
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
			retorno_boleto
			.destroy({ where: {} })
			.then(() => retorno_boleto.create(defaultretorno_boleto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /retorno_boleto', () => {
		it('should return a list of retorno_boleto', done => {
			request
			.get('/retorno_boleto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultretorno_boleto.id);
				expect(res.body[0].filePath).to.eql(defaultretorno_boleto.filePath);
				expect(res.body[0].dataRetorno).to.eql(defaultretorno_boleto.dataRetorno);
				expect(res.body[0].createdAt).to.eql(defaultretorno_boleto.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultretorno_boleto.updatedAt);
				expect(res.body[0].operacaoCodigo).to.eql(defaultretorno_boleto.operacaoCodigo);
				expect(res.body[0].operacao).to.eql(defaultretorno_boleto.operacao);
				expect(res.body[0].servicoCodigo).to.eql(defaultretorno_boleto.servicoCodigo);
				expect(res.body[0].servico).to.eql(defaultretorno_boleto.servico);
				expect(res.body[0].agencia).to.eql(defaultretorno_boleto.agencia);
				expect(res.body[0].agenciaDv).to.eql(defaultretorno_boleto.agenciaDv);
				expect(res.body[0].conta).to.eql(defaultretorno_boleto.conta);
				expect(res.body[0].contaDv).to.eql(defaultretorno_boleto.contaDv);
				expect(res.body[0].codigoCliente).to.eql(defaultretorno_boleto.codigoCliente);
				expect(res.body[0].valorTitulos).to.eql(defaultretorno_boleto.valorTitulos);
				expect(res.body[0].avisos).to.eql(defaultretorno_boleto.avisos);
				expect(res.body[0].quantidadeTitulos).to.eql(defaultretorno_boleto.quantidadeTitulos);
				expect(res.body[0].quantidadeLiquidados).to.eql(defaultretorno_boleto.quantidadeLiquidados);
				expect(res.body[0].quantidadeBaixados).to.eql(defaultretorno_boleto.quantidadeBaixados);
				expect(res.body[0].quantidadeEntradas).to.eql(defaultretorno_boleto.quantidadeEntradas);
				expect(res.body[0].quantidadeAlterados).to.eql(defaultretorno_boleto.quantidadeAlterados);
				expect(res.body[0].quantidadeErros).to.eql(defaultretorno_boleto.quantidadeErros);
				done(err);
			});
		});
	});

	describe('GET /retorno_boleto/{id}', () => {
		it('should return a retorno_boleto by id', done => {
			request
			.get('/retorno_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultretorno_boleto.id);
				expect(res.body.filePath).to.eql(defaultretorno_boleto.filePath);
				expect(res.body.dataRetorno).to.eql(defaultretorno_boleto.dataRetorno);
				expect(res.body.createdAt).to.eql(defaultretorno_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(defaultretorno_boleto.updatedAt);
				expect(res.body.operacaoCodigo).to.eql(defaultretorno_boleto.operacaoCodigo);
				expect(res.body.operacao).to.eql(defaultretorno_boleto.operacao);
				expect(res.body.servicoCodigo).to.eql(defaultretorno_boleto.servicoCodigo);
				expect(res.body.servico).to.eql(defaultretorno_boleto.servico);
				expect(res.body.agencia).to.eql(defaultretorno_boleto.agencia);
				expect(res.body.agenciaDv).to.eql(defaultretorno_boleto.agenciaDv);
				expect(res.body.conta).to.eql(defaultretorno_boleto.conta);
				expect(res.body.contaDv).to.eql(defaultretorno_boleto.contaDv);
				expect(res.body.codigoCliente).to.eql(defaultretorno_boleto.codigoCliente);
				expect(res.body.valorTitulos).to.eql(defaultretorno_boleto.valorTitulos);
				expect(res.body.avisos).to.eql(defaultretorno_boleto.avisos);
				expect(res.body.quantidadeTitulos).to.eql(defaultretorno_boleto.quantidadeTitulos);
				expect(res.body.quantidadeLiquidados).to.eql(defaultretorno_boleto.quantidadeLiquidados);
				expect(res.body.quantidadeBaixados).to.eql(defaultretorno_boleto.quantidadeBaixados);
				expect(res.body.quantidadeEntradas).to.eql(defaultretorno_boleto.quantidadeEntradas);
				expect(res.body.quantidadeAlterados).to.eql(defaultretorno_boleto.quantidadeAlterados);
				expect(res.body.quantidadeErros).to.eql(defaultretorno_boleto.quantidadeErros);
				done(err);
			});
		});
	});

	describe('POST /retorno_boleto', () => {
		it('should post a retorno_boleto', done => {
			const retorno_bolet = {
		"filePath":"1favro",
		"dataRetorno":"vn7htv",
		"createdAt":"h8ihv3",
		"updatedAt":"3hwvlz",
		"operacaoCodigo":"ae9ql",
		"operacao":"mpdc9l",
		"servicoCodigo":"ymhkp7",
		"servico":"pwqsj3",
		"agencia":"jxv5ui",
		"agenciaDv":"okvrem",
		"conta":"ro371j",
		"contaDv":"2sszvj",
		"codigoCliente":"f7mee5",
		"valorTitulos":"3zrg9q",
		"avisos":"d65t6a",
		"quantidadeTitulos":"eeszb9",
		"quantidadeLiquidados":"a16n8o",
		"quantidadeBaixados":"ygacx9",
		"quantidadeEntradas":"p9cvn",
		"quantidadeAlterados":"in5kw",
		"quantidadeErros":"f5jrpv"
	};

			request
			.post('/retorno_boleto')
			.set('Authorization', `JWT ${token}`)
			.send(retorno_bolet)
			.end((err, res) => {
				expect(res.body.id).to.eql(retorno_boleto.id);
				expect(res.body.filePath).to.eql(retorno_boleto.filePath);
				expect(res.body.dataRetorno).to.eql(retorno_boleto.dataRetorno);
				expect(res.body.createdAt).to.eql(retorno_boleto.createdAt);
				expect(res.body.updatedAt).to.eql(retorno_boleto.updatedAt);
				expect(res.body.operacaoCodigo).to.eql(retorno_boleto.operacaoCodigo);
				expect(res.body.operacao).to.eql(retorno_boleto.operacao);
				expect(res.body.servicoCodigo).to.eql(retorno_boleto.servicoCodigo);
				expect(res.body.servico).to.eql(retorno_boleto.servico);
				expect(res.body.agencia).to.eql(retorno_boleto.agencia);
				expect(res.body.agenciaDv).to.eql(retorno_boleto.agenciaDv);
				expect(res.body.conta).to.eql(retorno_boleto.conta);
				expect(res.body.contaDv).to.eql(retorno_boleto.contaDv);
				expect(res.body.codigoCliente).to.eql(retorno_boleto.codigoCliente);
				expect(res.body.valorTitulos).to.eql(retorno_boleto.valorTitulos);
				expect(res.body.avisos).to.eql(retorno_boleto.avisos);
				expect(res.body.quantidadeTitulos).to.eql(retorno_boleto.quantidadeTitulos);
				expect(res.body.quantidadeLiquidados).to.eql(retorno_boleto.quantidadeLiquidados);
				expect(res.body.quantidadeBaixados).to.eql(retorno_boleto.quantidadeBaixados);
				expect(res.body.quantidadeEntradas).to.eql(retorno_boleto.quantidadeEntradas);
				expect(res.body.quantidadeAlterados).to.eql(retorno_boleto.quantidadeAlterados);
				expect(res.body.quantidadeErros).to.eql(retorno_boleto.quantidadeErros);
				done(err);
			});
		});
	});

	describe('PUT /retorno_boleto/{id}', () => {
		it('should update a retorno_boleto', done => {
			const retorno_bolet = {
		"id":"1",
		"filePath":"e5pwv",
		"dataRetorno":"epk8yr",
		"createdAt":"vggvgg",
		"updatedAt":"x163se",
		"operacaoCodigo":"860ab",
		"operacao":"m7vpad",
		"servicoCodigo":"5m2e4u",
		"servico":"ksf1e",
		"agencia":"gxce5",
		"agenciaDv":"dp83s",
		"conta":"g32n4c",
		"contaDv":"b4eyfb",
		"codigoCliente":"y95py",
		"valorTitulos":"19b473",
		"avisos":"1j6aap",
		"quantidadeTitulos":"9jiqmb",
		"quantidadeLiquidados":"sxlnuc",
		"quantidadeBaixados":"8lfmii",
		"quantidadeEntradas":"8j5u7m",
		"quantidadeAlterados":"5y07dk",
		"quantidadeErros":"gn5pzo"
	};

			request
			.put('/retorno_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.send(retorno_bolet)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /retorno_boleto/{id}', () => {
		it('should delete a retorno_boleto', done => {
			request
			.delete('/retorno_boleto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
