import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: custo_fixo', () => {
	const custo_fixo = app.datasource.models.custo_fixo;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcusto_fixo = {
		"status":"shbzdb",
		"credorFornecedor":304,
		"credorFuncionario":563,
		"tipoCredor":"3kngb3",
		"planoContasFk":671,
		"grupoContasFk":314,
		"subgrupoContasFk":778,
		"inicioLancamento":"02lid7",
		"diaVencimento":"n1w5rf",
		"valorParcela":"3bwmbs",
		"historico":"tk0u2k",
		"obs":"4mm4cr",
		"createdAt":"r56ryg",
		"updatedAt":"k9m47o"
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
			custo_fixo
			.destroy({ where: {} })
			.then(() => custo_fixo.create(defaultcusto_fixo))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /custo_fixo', () => {
		it('should return a list of custo_fixo', done => {
			request
			.get('/custo_fixo')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcusto_fixo.id);
				expect(res.body[0].status).to.eql(defaultcusto_fixo.status);
				expect(res.body[0].credorFornecedor).to.eql(defaultcusto_fixo.credorFornecedor);
				expect(res.body[0].credorFuncionario).to.eql(defaultcusto_fixo.credorFuncionario);
				expect(res.body[0].tipoCredor).to.eql(defaultcusto_fixo.tipoCredor);
				expect(res.body[0].planoContasFk).to.eql(defaultcusto_fixo.planoContasFk);
				expect(res.body[0].grupoContasFk).to.eql(defaultcusto_fixo.grupoContasFk);
				expect(res.body[0].subgrupoContasFk).to.eql(defaultcusto_fixo.subgrupoContasFk);
				expect(res.body[0].inicioLancamento).to.eql(defaultcusto_fixo.inicioLancamento);
				expect(res.body[0].diaVencimento).to.eql(defaultcusto_fixo.diaVencimento);
				expect(res.body[0].valorParcela).to.eql(defaultcusto_fixo.valorParcela);
				expect(res.body[0].historico).to.eql(defaultcusto_fixo.historico);
				expect(res.body[0].obs).to.eql(defaultcusto_fixo.obs);
				expect(res.body[0].createdAt).to.eql(defaultcusto_fixo.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcusto_fixo.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /custo_fixo/{id}', () => {
		it('should return a custo_fixo by id', done => {
			request
			.get('/custo_fixo/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcusto_fixo.id);
				expect(res.body.status).to.eql(defaultcusto_fixo.status);
				expect(res.body.credorFornecedor).to.eql(defaultcusto_fixo.credorFornecedor);
				expect(res.body.credorFuncionario).to.eql(defaultcusto_fixo.credorFuncionario);
				expect(res.body.tipoCredor).to.eql(defaultcusto_fixo.tipoCredor);
				expect(res.body.planoContasFk).to.eql(defaultcusto_fixo.planoContasFk);
				expect(res.body.grupoContasFk).to.eql(defaultcusto_fixo.grupoContasFk);
				expect(res.body.subgrupoContasFk).to.eql(defaultcusto_fixo.subgrupoContasFk);
				expect(res.body.inicioLancamento).to.eql(defaultcusto_fixo.inicioLancamento);
				expect(res.body.diaVencimento).to.eql(defaultcusto_fixo.diaVencimento);
				expect(res.body.valorParcela).to.eql(defaultcusto_fixo.valorParcela);
				expect(res.body.historico).to.eql(defaultcusto_fixo.historico);
				expect(res.body.obs).to.eql(defaultcusto_fixo.obs);
				expect(res.body.createdAt).to.eql(defaultcusto_fixo.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcusto_fixo.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /custo_fixo', () => {
		it('should post a custo_fixo', done => {
			const custo_fix = {
		"status":"9inns",
		"credorFornecedor":372,
		"credorFuncionario":326,
		"tipoCredor":"xuj6gr",
		"planoContasFk":373,
		"grupoContasFk":872,
		"subgrupoContasFk":245,
		"inicioLancamento":"q3udgc",
		"diaVencimento":"zvf8r",
		"valorParcela":"fxnf55",
		"historico":"7ogcjs",
		"obs":"lrsok",
		"createdAt":"jo13gq",
		"updatedAt":"1n5epp"
	};

			request
			.post('/custo_fixo')
			.set('Authorization', `JWT ${token}`)
			.send(custo_fix)
			.end((err, res) => {
				expect(res.body.id).to.eql(custo_fixo.id);
				expect(res.body.status).to.eql(custo_fixo.status);
				expect(res.body.credorFornecedor).to.eql(custo_fixo.credorFornecedor);
				expect(res.body.credorFuncionario).to.eql(custo_fixo.credorFuncionario);
				expect(res.body.tipoCredor).to.eql(custo_fixo.tipoCredor);
				expect(res.body.planoContasFk).to.eql(custo_fixo.planoContasFk);
				expect(res.body.grupoContasFk).to.eql(custo_fixo.grupoContasFk);
				expect(res.body.subgrupoContasFk).to.eql(custo_fixo.subgrupoContasFk);
				expect(res.body.inicioLancamento).to.eql(custo_fixo.inicioLancamento);
				expect(res.body.diaVencimento).to.eql(custo_fixo.diaVencimento);
				expect(res.body.valorParcela).to.eql(custo_fixo.valorParcela);
				expect(res.body.historico).to.eql(custo_fixo.historico);
				expect(res.body.obs).to.eql(custo_fixo.obs);
				expect(res.body.createdAt).to.eql(custo_fixo.createdAt);
				expect(res.body.updatedAt).to.eql(custo_fixo.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /custo_fixo/{id}', () => {
		it('should update a custo_fixo', done => {
			const custo_fix = {
		"id":"1",
		"status":"qbscih",
		"credorFornecedor":752,
		"credorFuncionario":235,
		"tipoCredor":"pge9en",
		"planoContasFk":172,
		"grupoContasFk":526,
		"subgrupoContasFk":934,
		"inicioLancamento":"22du8",
		"diaVencimento":"twolf",
		"valorParcela":"z6ssic",
		"historico":"33avrk",
		"obs":"lgvh0d",
		"createdAt":"rgchi8",
		"updatedAt":"swasl"
	};

			request
			.put('/custo_fixo/1')
			.set('Authorization', `JWT ${token}`)
			.send(custo_fix)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /custo_fixo/{id}', () => {
		it('should delete a custo_fixo', done => {
			request
			.delete('/custo_fixo/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
