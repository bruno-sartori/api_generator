import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: compra_servico', () => {
	const compra_servico = app.datasource.models.compra_servico;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcompra_servico = {
		"custoVariavelFk":195,
		"quantidade":"4wxchf",
		"valorUnitario":"j0j342",
		"valorTotal":"df1bgq",
		"subgrupoContasFk":184
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
			compra_servico
			.destroy({ where: {} })
			.then(() => compra_servico.create(defaultcompra_servico))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /compra_servico', () => {
		it('should return a list of compra_servico', done => {
			request
			.get('/compra_servico')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcompra_servico.id);
				expect(res.body[0].custoVariavelFk).to.eql(defaultcompra_servico.custoVariavelFk);
				expect(res.body[0].quantidade).to.eql(defaultcompra_servico.quantidade);
				expect(res.body[0].valorUnitario).to.eql(defaultcompra_servico.valorUnitario);
				expect(res.body[0].valorTotal).to.eql(defaultcompra_servico.valorTotal);
				expect(res.body[0].subgrupoContasFk).to.eql(defaultcompra_servico.subgrupoContasFk);
				done(err);
			});
		});
	});

	describe('GET /compra_servico/{id}', () => {
		it('should return a compra_servico by id', done => {
			request
			.get('/compra_servico/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcompra_servico.id);
				expect(res.body.custoVariavelFk).to.eql(defaultcompra_servico.custoVariavelFk);
				expect(res.body.quantidade).to.eql(defaultcompra_servico.quantidade);
				expect(res.body.valorUnitario).to.eql(defaultcompra_servico.valorUnitario);
				expect(res.body.valorTotal).to.eql(defaultcompra_servico.valorTotal);
				expect(res.body.subgrupoContasFk).to.eql(defaultcompra_servico.subgrupoContasFk);
				done(err);
			});
		});
	});

	describe('POST /compra_servico', () => {
		it('should post a compra_servico', done => {
			const compra_servic = {
		"custoVariavelFk":911,
		"quantidade":"1jirzv",
		"valorUnitario":"o0fjvp",
		"valorTotal":"sorp9",
		"subgrupoContasFk":133
	};

			request
			.post('/compra_servico')
			.set('Authorization', `JWT ${token}`)
			.send(compra_servic)
			.end((err, res) => {
				expect(res.body.id).to.eql(compra_servico.id);
				expect(res.body.custoVariavelFk).to.eql(compra_servico.custoVariavelFk);
				expect(res.body.quantidade).to.eql(compra_servico.quantidade);
				expect(res.body.valorUnitario).to.eql(compra_servico.valorUnitario);
				expect(res.body.valorTotal).to.eql(compra_servico.valorTotal);
				expect(res.body.subgrupoContasFk).to.eql(compra_servico.subgrupoContasFk);
				done(err);
			});
		});
	});

	describe('PUT /compra_servico/{id}', () => {
		it('should update a compra_servico', done => {
			const compra_servic = {
		"id":"1",
		"custoVariavelFk":354,
		"quantidade":"4kngg",
		"valorUnitario":"mpx18s",
		"valorTotal":"pn92w",
		"subgrupoContasFk":877
	};

			request
			.put('/compra_servico/1')
			.set('Authorization', `JWT ${token}`)
			.send(compra_servic)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /compra_servico/{id}', () => {
		it('should delete a compra_servico', done => {
			request
			.delete('/compra_servico/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
