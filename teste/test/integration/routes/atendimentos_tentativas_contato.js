import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: atendimentos_tentativas_contato', () => {
	const atendimentos_tentativas_contato = app.datasource.models.atendimentos_tentativas_contato;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultatendimentos_tentativas_contato = {
		"atendimentosFk":"lpmuv8",
		"createdAt":"yakyf",
		"dataContato":"sxkubn",
		"descricao":"vmdyjy",
		"pessoasTelefonesFk":769,
		"pessoasEmailsFk":66,
		"enderecosFk":869,
		"tiposTentativasContatoFk":845,
		"operadoresFk":831
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
			atendimentos_tentativas_contato
			.destroy({ where: {} })
			.then(() => atendimentos_tentativas_contato.create(defaultatendimentos_tentativas_contato))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /atendimentos_tentativas_contato', () => {
		it('should return a list of atendimentos_tentativas_contato', done => {
			request
			.get('/atendimentos_tentativas_contato')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultatendimentos_tentativas_contato.id);
				expect(res.body[0].atendimentosFk).to.eql(defaultatendimentos_tentativas_contato.atendimentosFk);
				expect(res.body[0].createdAt).to.eql(defaultatendimentos_tentativas_contato.createdAt);
				expect(res.body[0].dataContato).to.eql(defaultatendimentos_tentativas_contato.dataContato);
				expect(res.body[0].descricao).to.eql(defaultatendimentos_tentativas_contato.descricao);
				expect(res.body[0].pessoasTelefonesFk).to.eql(defaultatendimentos_tentativas_contato.pessoasTelefonesFk);
				expect(res.body[0].pessoasEmailsFk).to.eql(defaultatendimentos_tentativas_contato.pessoasEmailsFk);
				expect(res.body[0].enderecosFk).to.eql(defaultatendimentos_tentativas_contato.enderecosFk);
				expect(res.body[0].tiposTentativasContatoFk).to.eql(defaultatendimentos_tentativas_contato.tiposTentativasContatoFk);
				expect(res.body[0].operadoresFk).to.eql(defaultatendimentos_tentativas_contato.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /atendimentos_tentativas_contato/{id}', () => {
		it('should return a atendimentos_tentativas_contato by id', done => {
			request
			.get('/atendimentos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultatendimentos_tentativas_contato.id);
				expect(res.body.atendimentosFk).to.eql(defaultatendimentos_tentativas_contato.atendimentosFk);
				expect(res.body.createdAt).to.eql(defaultatendimentos_tentativas_contato.createdAt);
				expect(res.body.dataContato).to.eql(defaultatendimentos_tentativas_contato.dataContato);
				expect(res.body.descricao).to.eql(defaultatendimentos_tentativas_contato.descricao);
				expect(res.body.pessoasTelefonesFk).to.eql(defaultatendimentos_tentativas_contato.pessoasTelefonesFk);
				expect(res.body.pessoasEmailsFk).to.eql(defaultatendimentos_tentativas_contato.pessoasEmailsFk);
				expect(res.body.enderecosFk).to.eql(defaultatendimentos_tentativas_contato.enderecosFk);
				expect(res.body.tiposTentativasContatoFk).to.eql(defaultatendimentos_tentativas_contato.tiposTentativasContatoFk);
				expect(res.body.operadoresFk).to.eql(defaultatendimentos_tentativas_contato.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /atendimentos_tentativas_contato', () => {
		it('should post a atendimentos_tentativas_contato', done => {
			const atendimentos_tentativas_contat = {
		"atendimentosFk":"ettcz",
		"createdAt":"nt99w",
		"dataContato":"daok0p",
		"descricao":"5wcr1s",
		"pessoasTelefonesFk":288,
		"pessoasEmailsFk":185,
		"enderecosFk":208,
		"tiposTentativasContatoFk":389,
		"operadoresFk":614
	};

			request
			.post('/atendimentos_tentativas_contato')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tentativas_contat)
			.end((err, res) => {
				expect(res.body.id).to.eql(atendimentos_tentativas_contato.id);
				expect(res.body.atendimentosFk).to.eql(atendimentos_tentativas_contato.atendimentosFk);
				expect(res.body.createdAt).to.eql(atendimentos_tentativas_contato.createdAt);
				expect(res.body.dataContato).to.eql(atendimentos_tentativas_contato.dataContato);
				expect(res.body.descricao).to.eql(atendimentos_tentativas_contato.descricao);
				expect(res.body.pessoasTelefonesFk).to.eql(atendimentos_tentativas_contato.pessoasTelefonesFk);
				expect(res.body.pessoasEmailsFk).to.eql(atendimentos_tentativas_contato.pessoasEmailsFk);
				expect(res.body.enderecosFk).to.eql(atendimentos_tentativas_contato.enderecosFk);
				expect(res.body.tiposTentativasContatoFk).to.eql(atendimentos_tentativas_contato.tiposTentativasContatoFk);
				expect(res.body.operadoresFk).to.eql(atendimentos_tentativas_contato.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /atendimentos_tentativas_contato/{id}', () => {
		it('should update a atendimentos_tentativas_contato', done => {
			const atendimentos_tentativas_contat = {
		"id":"1",
		"atendimentosFk":"3xxhc",
		"createdAt":"0w9xs",
		"dataContato":"1vtw0j",
		"descricao":"augr3e",
		"pessoasTelefonesFk":881,
		"pessoasEmailsFk":210,
		"enderecosFk":52,
		"tiposTentativasContatoFk":291,
		"operadoresFk":856
	};

			request
			.put('/atendimentos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.send(atendimentos_tentativas_contat)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /atendimentos_tentativas_contato/{id}', () => {
		it('should delete a atendimentos_tentativas_contato', done => {
			request
			.delete('/atendimentos_tentativas_contato/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
