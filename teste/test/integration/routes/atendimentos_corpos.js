import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos_corpos', () => {
	const atendimentos_corpos = app.datasource.models.atendimentos_corpos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos_corpos = {
		"descricaoOperador":"vlwbnc",
		"descricaoSistema":"82vuqj",
		"tipo":"9vdinp",
		"createdAt":"7656y8",
		"closedAt":"tm3n7",
		"atendimentosFk":"grs8xx",
		"departamentosFk":680,
		"operadoresFk":106
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
			atendimentos_corpos
			.destroy({ where: {} })
			.then(() => atendimentos_corpos.create(defaultatendimentos_corpos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos_corpos', () => {
		it('should return a list of atendimentos_corpos', done => {
			request
			.get('/atendimentos_corpos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos_corpos.id);
				expect(res.body[0].descricaoOperador).to.eql(defaultatendimentos_corpos.descricaoOperador);
				expect(res.body[0].descricaoSistema).to.eql(defaultatendimentos_corpos.descricaoSistema);
				expect(res.body[0].tipo).to.eql(defaultatendimentos_corpos.tipo);
				expect(res.body[0].createdAt).to.eql(defaultatendimentos_corpos.createdAt);
				expect(res.body[0].closedAt).to.eql(defaultatendimentos_corpos.closedAt);
				expect(res.body[0].atendimentosFk).to.eql(defaultatendimentos_corpos.atendimentosFk);
				expect(res.body[0].departamentosFk).to.eql(defaultatendimentos_corpos.departamentosFk);
				expect(res.body[0].operadoresFk).to.eql(defaultatendimentos_corpos.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos_corpos/{id}', () => {
		it('should return a atendimentos_corpos by id', done => {
			request
			.get('/atendimentos_corpos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos_corpos.id);
				expect(res.body.descricaoOperador).to.eql(defaultatendimentos_corpos.descricaoOperador);
				expect(res.body.descricaoSistema).to.eql(defaultatendimentos_corpos.descricaoSistema);
				expect(res.body.tipo).to.eql(defaultatendimentos_corpos.tipo);
				expect(res.body.createdAt).to.eql(defaultatendimentos_corpos.createdAt);
				expect(res.body.closedAt).to.eql(defaultatendimentos_corpos.closedAt);
				expect(res.body.atendimentosFk).to.eql(defaultatendimentos_corpos.atendimentosFk);
				expect(res.body.departamentosFk).to.eql(defaultatendimentos_corpos.departamentosFk);
				expect(res.body.operadoresFk).to.eql(defaultatendimentos_corpos.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos_corpos', () => {
		it('should post a atendimentos_corpos', done => {
			const atendimentos_corpo = {
		"descricaoOperador":"fb6i3f",
		"descricaoSistema":"u9m9l7",
		"tipo":"fhxqz",
		"createdAt":"m221a",
		"closedAt":"l54lr",
		"atendimentosFk":"fz3eik",
		"departamentosFk":769,
		"operadoresFk":860
	};

			request
			.post('/atendimentos_corpos')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_corpo)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos_corpos.id);
				expect(res.body.descricaoOperador).to.eql(atendimentos_corpos.descricaoOperador);
				expect(res.body.descricaoSistema).to.eql(atendimentos_corpos.descricaoSistema);
				expect(res.body.tipo).to.eql(atendimentos_corpos.tipo);
				expect(res.body.createdAt).to.eql(atendimentos_corpos.createdAt);
				expect(res.body.closedAt).to.eql(atendimentos_corpos.closedAt);
				expect(res.body.atendimentosFk).to.eql(atendimentos_corpos.atendimentosFk);
				expect(res.body.departamentosFk).to.eql(atendimentos_corpos.departamentosFk);
				expect(res.body.operadoresFk).to.eql(atendimentos_corpos.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos_corpos/{id}', () => {
		it('should update a atendimentos_corpos', done => {
			const atendimentos_corpo = {
		"id":"1",
		"descricaoOperador":"1sl9a",
		"descricaoSistema":"s1jsca",
		"tipo":"khwc8",
		"createdAt":"1h4394",
		"closedAt":"hktow",
		"atendimentosFk":"h29emq",
		"departamentosFk":552,
		"operadoresFk":574
	};

			request
			.put('/atendimentos_corpos/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_corpo)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos_corpos/{id}', () => {
		it('should delete a atendimentos_corpos', done => {
			request
			.delete('/atendimentos_corpos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
