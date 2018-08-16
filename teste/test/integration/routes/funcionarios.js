import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: funcionarios', () => {
	const funcionarios = app.datasource.models.funcionarios;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfuncionarios = {
		"dataAdmissao":"fosf1c",
		"dataNascimento":"1tfew",
		"carteiraNumero":"zxcdac",
		"carteiraSerie":"v6roe9",
		"cargo":"j7hm98",
		"pis":"ct1n1t",
		"agencia":"x2zjwh",
		"conta":"dio9q8",
		"obs":"7g218i",
		"status":"nz2u19",
		"createdAt":"nss6gt",
		"updatedAt":"t3dfyi",
		"pessoasFk":612,
		"federatedBaseBancoFk":673
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
			funcionarios
			.destroy({ where: {} })
			.then(() => funcionarios.create(defaultfuncionarios))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /funcionarios', () => {
		it('should return a list of funcionarios', done => {
			request
			.get('/funcionarios')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfuncionarios.id);
				expect(res.body[0].dataAdmissao).to.eql(defaultfuncionarios.dataAdmissao);
				expect(res.body[0].dataNascimento).to.eql(defaultfuncionarios.dataNascimento);
				expect(res.body[0].carteiraNumero).to.eql(defaultfuncionarios.carteiraNumero);
				expect(res.body[0].carteiraSerie).to.eql(defaultfuncionarios.carteiraSerie);
				expect(res.body[0].cargo).to.eql(defaultfuncionarios.cargo);
				expect(res.body[0].pis).to.eql(defaultfuncionarios.pis);
				expect(res.body[0].agencia).to.eql(defaultfuncionarios.agencia);
				expect(res.body[0].conta).to.eql(defaultfuncionarios.conta);
				expect(res.body[0].obs).to.eql(defaultfuncionarios.obs);
				expect(res.body[0].status).to.eql(defaultfuncionarios.status);
				expect(res.body[0].createdAt).to.eql(defaultfuncionarios.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfuncionarios.updatedAt);
				expect(res.body[0].pessoasFk).to.eql(defaultfuncionarios.pessoasFk);
				expect(res.body[0].federatedBaseBancoFk).to.eql(defaultfuncionarios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('GET /funcionarios/{id}', () => {
		it('should return a funcionarios by id', done => {
			request
			.get('/funcionarios/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfuncionarios.id);
				expect(res.body.dataAdmissao).to.eql(defaultfuncionarios.dataAdmissao);
				expect(res.body.dataNascimento).to.eql(defaultfuncionarios.dataNascimento);
				expect(res.body.carteiraNumero).to.eql(defaultfuncionarios.carteiraNumero);
				expect(res.body.carteiraSerie).to.eql(defaultfuncionarios.carteiraSerie);
				expect(res.body.cargo).to.eql(defaultfuncionarios.cargo);
				expect(res.body.pis).to.eql(defaultfuncionarios.pis);
				expect(res.body.agencia).to.eql(defaultfuncionarios.agencia);
				expect(res.body.conta).to.eql(defaultfuncionarios.conta);
				expect(res.body.obs).to.eql(defaultfuncionarios.obs);
				expect(res.body.status).to.eql(defaultfuncionarios.status);
				expect(res.body.createdAt).to.eql(defaultfuncionarios.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfuncionarios.updatedAt);
				expect(res.body.pessoasFk).to.eql(defaultfuncionarios.pessoasFk);
				expect(res.body.federatedBaseBancoFk).to.eql(defaultfuncionarios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('POST /funcionarios', () => {
		it('should post a funcionarios', done => {
			const funcionario = {
		"dataAdmissao":"tla238",
		"dataNascimento":"61kpaf",
		"carteiraNumero":"o4awwg",
		"carteiraSerie":"5oyqj",
		"cargo":"b3nq8s",
		"pis":"ueuq3j",
		"agencia":"uh2dt3",
		"conta":"hcp3ch",
		"obs":"gjihms",
		"status":"60qebm",
		"createdAt":"glha2mk",
		"updatedAt":"nuiscfi",
		"pessoasFk":41,
		"federatedBaseBancoFk":78
	};

			request
			.post('/funcionarios')
			.set('Authorization', `JWT ${token}`)
			.send(funcionario)
			.end((err, res) => {
				expect(res.body.id).to.eql(funcionarios.id);
				expect(res.body.dataAdmissao).to.eql(funcionarios.dataAdmissao);
				expect(res.body.dataNascimento).to.eql(funcionarios.dataNascimento);
				expect(res.body.carteiraNumero).to.eql(funcionarios.carteiraNumero);
				expect(res.body.carteiraSerie).to.eql(funcionarios.carteiraSerie);
				expect(res.body.cargo).to.eql(funcionarios.cargo);
				expect(res.body.pis).to.eql(funcionarios.pis);
				expect(res.body.agencia).to.eql(funcionarios.agencia);
				expect(res.body.conta).to.eql(funcionarios.conta);
				expect(res.body.obs).to.eql(funcionarios.obs);
				expect(res.body.status).to.eql(funcionarios.status);
				expect(res.body.createdAt).to.eql(funcionarios.createdAt);
				expect(res.body.updatedAt).to.eql(funcionarios.updatedAt);
				expect(res.body.pessoasFk).to.eql(funcionarios.pessoasFk);
				expect(res.body.federatedBaseBancoFk).to.eql(funcionarios.federatedBaseBancoFk);
				done(err);
			});
		});
	});

	describe('PUT /funcionarios/{id}', () => {
		it('should update a funcionarios', done => {
			const funcionario = {
		"id":"1",
		"dataAdmissao":"dg4w2i",
		"dataNascimento":"ovdkqc",
		"carteiraNumero":"ybb2l",
		"carteiraSerie":"7h90a",
		"cargo":"mxv0c",
		"pis":"eff55r",
		"agencia":"kcym3",
		"conta":"px8yk2",
		"obs":"m6oc0l",
		"status":"6tlnq",
		"createdAt":"768nek",
		"updatedAt":"nudst8",
		"pessoasFk":720,
		"federatedBaseBancoFk":764
	};

			request
			.put('/funcionarios/1')
			.set('Authorization', `JWT ${token}`)
			.send(funcionario)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /funcionarios/{id}', () => {
		it('should delete a funcionarios', done => {
			request
			.delete('/funcionarios/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
