import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos_tipos_servicos', () => {
	const atendimentos_tipos_servicos = app.datasource.models.atendimentos_tipos_servicos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos_tipos_servicos = {
		"incluso":"1o4rp1",
		"createdAt":"u60tul",
		"atendimentosTiposFk":319,
		"servicosFk":962,
		"operadoresFk":739
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
			atendimentos_tipos_servicos
			.destroy({ where: {} })
			.then(() => atendimentos_tipos_servicos.create(defaultatendimentos_tipos_servicos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos_tipos_servicos', () => {
		it('should return a list of atendimentos_tipos_servicos', done => {
			request
			.get('/atendimentos_tipos_servicos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos_tipos_servicos.id);
				expect(res.body[0].incluso).to.eql(defaultatendimentos_tipos_servicos.incluso);
				expect(res.body[0].createdAt).to.eql(defaultatendimentos_tipos_servicos.createdAt);
				expect(res.body[0].atendimentosTiposFk).to.eql(defaultatendimentos_tipos_servicos.atendimentosTiposFk);
				expect(res.body[0].servicosFk).to.eql(defaultatendimentos_tipos_servicos.servicosFk);
				expect(res.body[0].operadoresFk).to.eql(defaultatendimentos_tipos_servicos.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos_tipos_servicos/{id}', () => {
		it('should return a atendimentos_tipos_servicos by id', done => {
			request
			.get('/atendimentos_tipos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos_tipos_servicos.id);
				expect(res.body.incluso).to.eql(defaultatendimentos_tipos_servicos.incluso);
				expect(res.body.createdAt).to.eql(defaultatendimentos_tipos_servicos.createdAt);
				expect(res.body.atendimentosTiposFk).to.eql(defaultatendimentos_tipos_servicos.atendimentosTiposFk);
				expect(res.body.servicosFk).to.eql(defaultatendimentos_tipos_servicos.servicosFk);
				expect(res.body.operadoresFk).to.eql(defaultatendimentos_tipos_servicos.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos_tipos_servicos', () => {
		it('should post a atendimentos_tipos_servicos', done => {
			const atendimentos_tipos_servico = {
		"incluso":"6smby",
		"createdAt":"30oc9",
		"atendimentosTiposFk":34,
		"servicosFk":77,
		"operadoresFk":681
	};

			request
			.post('/atendimentos_tipos_servicos')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tipos_servico)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos_tipos_servicos.id);
				expect(res.body.incluso).to.eql(atendimentos_tipos_servicos.incluso);
				expect(res.body.createdAt).to.eql(atendimentos_tipos_servicos.createdAt);
				expect(res.body.atendimentosTiposFk).to.eql(atendimentos_tipos_servicos.atendimentosTiposFk);
				expect(res.body.servicosFk).to.eql(atendimentos_tipos_servicos.servicosFk);
				expect(res.body.operadoresFk).to.eql(atendimentos_tipos_servicos.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos_tipos_servicos/{id}', () => {
		it('should update a atendimentos_tipos_servicos', done => {
			const atendimentos_tipos_servico = {
		"id":"1",
		"incluso":"fq95s3",
		"createdAt":"zt0lth",
		"atendimentosTiposFk":748,
		"servicosFk":412,
		"operadoresFk":427
	};

			request
			.put('/atendimentos_tipos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tipos_servico)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos_tipos_servicos/{id}', () => {
		it('should delete a atendimentos_tipos_servicos', done => {
			request
			.delete('/atendimentos_tipos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
