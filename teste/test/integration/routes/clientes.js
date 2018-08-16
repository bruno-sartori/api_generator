import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: clientes', () => {
	const clientes = app.datasource.models.clientes;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultclientes = {
		"tipoPessoa":"moeg6",
		"dataNascimento":"a20a0f",
		"obs":"szw1hn",
		"status":"z6247m",
		"createdAt":"yxnuwc",
		"updatedAt":"eckrd9",
		"tipoPagamento":"c21dwo",
		"tipoGeracaoBoleto":"h4xiw",
		"loginCentral":"0tst2w",
		"pessoasFk":966,
		"enderecosFkCobranca":406,
		"grupoClientesFk":660,
		"diasPagamentoPlanoFk":55
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
			clientes
			.destroy({ where: {} })
			.then(() => clientes.create(defaultclientes))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /clientes', () => {
		it('should return a list of clientes', done => {
			request
			.get('/clientes')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultclientes.id);
				expect(res.body[0].tipoPessoa).to.eql(defaultclientes.tipoPessoa);
				expect(res.body[0].dataNascimento).to.eql(defaultclientes.dataNascimento);
				expect(res.body[0].obs).to.eql(defaultclientes.obs);
				expect(res.body[0].status).to.eql(defaultclientes.status);
				expect(res.body[0].createdAt).to.eql(defaultclientes.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultclientes.updatedAt);
				expect(res.body[0].tipoPagamento).to.eql(defaultclientes.tipoPagamento);
				expect(res.body[0].tipoGeracaoBoleto).to.eql(defaultclientes.tipoGeracaoBoleto);
				expect(res.body[0].loginCentral).to.eql(defaultclientes.loginCentral);
				expect(res.body[0].pessoasFk).to.eql(defaultclientes.pessoasFk);
				expect(res.body[0].enderecosFkCobranca).to.eql(defaultclientes.enderecosFkCobranca);
				expect(res.body[0].grupoClientesFk).to.eql(defaultclientes.grupoClientesFk);
				expect(res.body[0].diasPagamentoPlanoFk).to.eql(defaultclientes.diasPagamentoPlanoFk);
				done(err);
			});
		});
	});

	describe('GET /clientes/{id}', () => {
		it('should return a clientes by id', done => {
			request
			.get('/clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultclientes.id);
				expect(res.body.tipoPessoa).to.eql(defaultclientes.tipoPessoa);
				expect(res.body.dataNascimento).to.eql(defaultclientes.dataNascimento);
				expect(res.body.obs).to.eql(defaultclientes.obs);
				expect(res.body.status).to.eql(defaultclientes.status);
				expect(res.body.createdAt).to.eql(defaultclientes.createdAt);
				expect(res.body.updatedAt).to.eql(defaultclientes.updatedAt);
				expect(res.body.tipoPagamento).to.eql(defaultclientes.tipoPagamento);
				expect(res.body.tipoGeracaoBoleto).to.eql(defaultclientes.tipoGeracaoBoleto);
				expect(res.body.loginCentral).to.eql(defaultclientes.loginCentral);
				expect(res.body.pessoasFk).to.eql(defaultclientes.pessoasFk);
				expect(res.body.enderecosFkCobranca).to.eql(defaultclientes.enderecosFkCobranca);
				expect(res.body.grupoClientesFk).to.eql(defaultclientes.grupoClientesFk);
				expect(res.body.diasPagamentoPlanoFk).to.eql(defaultclientes.diasPagamentoPlanoFk);
				done(err);
			});
		});
	});

	describe('POST /clientes', () => {
		it('should post a clientes', done => {
			const cliente = {
		"tipoPessoa":"ii14o",
		"dataNascimento":"axjt5k",
		"obs":"47pvso",
		"status":"qfyts9",
		"createdAt":"abmut8",
		"updatedAt":"g7az6",
		"tipoPagamento":"2na1q9",
		"tipoGeracaoBoleto":"8av5hq",
		"loginCentral":"kmfnvw",
		"pessoasFk":271,
		"enderecosFkCobranca":75,
		"grupoClientesFk":871,
		"diasPagamentoPlanoFk":557
	};

			request
			.post('/clientes')
			.set('Authorization', `JWT ${token}`)
			.send(cliente)
			.end((err, res) => {
				expect(res.body.id).to.eql(clientes.id);
				expect(res.body.tipoPessoa).to.eql(clientes.tipoPessoa);
				expect(res.body.dataNascimento).to.eql(clientes.dataNascimento);
				expect(res.body.obs).to.eql(clientes.obs);
				expect(res.body.status).to.eql(clientes.status);
				expect(res.body.createdAt).to.eql(clientes.createdAt);
				expect(res.body.updatedAt).to.eql(clientes.updatedAt);
				expect(res.body.tipoPagamento).to.eql(clientes.tipoPagamento);
				expect(res.body.tipoGeracaoBoleto).to.eql(clientes.tipoGeracaoBoleto);
				expect(res.body.loginCentral).to.eql(clientes.loginCentral);
				expect(res.body.pessoasFk).to.eql(clientes.pessoasFk);
				expect(res.body.enderecosFkCobranca).to.eql(clientes.enderecosFkCobranca);
				expect(res.body.grupoClientesFk).to.eql(clientes.grupoClientesFk);
				expect(res.body.diasPagamentoPlanoFk).to.eql(clientes.diasPagamentoPlanoFk);
				done(err);
			});
		});
	});

	describe('PUT /clientes/{id}', () => {
		it('should update a clientes', done => {
			const cliente = {
		"id":"1",
		"tipoPessoa":"yoetci",
		"dataNascimento":"dhzl9n",
		"obs":"8u1cd2",
		"status":"3dvaph",
		"createdAt":"mgszgo",
		"updatedAt":"kwo11l",
		"tipoPagamento":"01umfa",
		"tipoGeracaoBoleto":"d0n9j6",
		"loginCentral":"jrd2x5",
		"pessoasFk":213,
		"enderecosFkCobranca":274,
		"grupoClientesFk":270,
		"diasPagamentoPlanoFk":642
	};

			request
			.put('/clientes/1')
			.set('Authorization', `JWT ${token}`)
			.send(cliente)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /clientes/{id}', () => {
		it('should delete a clientes', done => {
			request
			.delete('/clientes/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
