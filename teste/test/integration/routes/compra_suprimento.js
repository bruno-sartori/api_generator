import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: compra_suprimento', () => {
	const compra_suprimento = app.datasource.models.compra_suprimento;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcompra_suprimento = {
		"custoVariavelFk":304,
		"quantidade":"n70na2",
		"valorUnitario":"ke2yb",
		"valorTotal":"ghj5ob",
		"subgrupoContasFk":135,
		"suprimentosFk":484
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
			compra_suprimento
			.destroy({ where: {} })
			.then(() => compra_suprimento.create(defaultcompra_suprimento))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /compra_suprimento', () => {
		it('should return a list of compra_suprimento', done => {
			request
			.get('/compra_suprimento')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcompra_suprimento.id);
				expect(res.body[0].custoVariavelFk).to.eql(defaultcompra_suprimento.custoVariavelFk);
				expect(res.body[0].quantidade).to.eql(defaultcompra_suprimento.quantidade);
				expect(res.body[0].valorUnitario).to.eql(defaultcompra_suprimento.valorUnitario);
				expect(res.body[0].valorTotal).to.eql(defaultcompra_suprimento.valorTotal);
				expect(res.body[0].subgrupoContasFk).to.eql(defaultcompra_suprimento.subgrupoContasFk);
				expect(res.body[0].suprimentosFk).to.eql(defaultcompra_suprimento.suprimentosFk);
				done(err);
			});
		});
	});

	describe('GET /compra_suprimento/{id}', () => {
		it('should return a compra_suprimento by id', done => {
			request
			.get('/compra_suprimento/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcompra_suprimento.id);
				expect(res.body.custoVariavelFk).to.eql(defaultcompra_suprimento.custoVariavelFk);
				expect(res.body.quantidade).to.eql(defaultcompra_suprimento.quantidade);
				expect(res.body.valorUnitario).to.eql(defaultcompra_suprimento.valorUnitario);
				expect(res.body.valorTotal).to.eql(defaultcompra_suprimento.valorTotal);
				expect(res.body.subgrupoContasFk).to.eql(defaultcompra_suprimento.subgrupoContasFk);
				expect(res.body.suprimentosFk).to.eql(defaultcompra_suprimento.suprimentosFk);
				done(err);
			});
		});
	});

	describe('POST /compra_suprimento', () => {
		it('should post a compra_suprimento', done => {
			const compra_supriment = {
		"custoVariavelFk":253,
		"quantidade":"jkmxm",
		"valorUnitario":"suvtpi",
		"valorTotal":"8b93c",
		"subgrupoContasFk":410,
		"suprimentosFk":514
	};

			request
			.post('/compra_suprimento')
			.set('Authorization', `JWT ${token}`)
			.send(compra_supriment)
			.end((err, res) => {
				expect(res.body.id).to.eql(compra_suprimento.id);
				expect(res.body.custoVariavelFk).to.eql(compra_suprimento.custoVariavelFk);
				expect(res.body.quantidade).to.eql(compra_suprimento.quantidade);
				expect(res.body.valorUnitario).to.eql(compra_suprimento.valorUnitario);
				expect(res.body.valorTotal).to.eql(compra_suprimento.valorTotal);
				expect(res.body.subgrupoContasFk).to.eql(compra_suprimento.subgrupoContasFk);
				expect(res.body.suprimentosFk).to.eql(compra_suprimento.suprimentosFk);
				done(err);
			});
		});
	});

	describe('PUT /compra_suprimento/{id}', () => {
		it('should update a compra_suprimento', done => {
			const compra_supriment = {
		"id":"1",
		"custoVariavelFk":295,
		"quantidade":"0m1cy",
		"valorUnitario":"xoomlo",
		"valorTotal":"s4sjun",
		"subgrupoContasFk":142,
		"suprimentosFk":318
	};

			request
			.put('/compra_suprimento/1')
			.set('Authorization', `JWT ${token}`)
			.send(compra_supriment)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /compra_suprimento/{id}', () => {
		it('should delete a compra_suprimento', done => {
			request
			.delete('/compra_suprimento/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
