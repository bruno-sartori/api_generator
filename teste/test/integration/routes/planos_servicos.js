import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: planos_servicos', () => {
	const planos_servicos = app.datasource.models.planos_servicos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultplanos_servicos = {
		"planosFk":48,
		"servicosFk":792,
		"quantidade":70
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
			planos_servicos
			.destroy({ where: {} })
			.then(() => planos_servicos.create(defaultplanos_servicos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /planos_servicos', () => {
		it('should return a list of planos_servicos', done => {
			request
			.get('/planos_servicos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].planosFk).to.eql(defaultplanos_servicos.planosFk);
				expect(res.body[0].servicosFk).to.eql(defaultplanos_servicos.servicosFk);
				expect(res.body[0].quantidade).to.eql(defaultplanos_servicos.quantidade);
				done(err);
			});
		});
	});

	describe('GET /planos_servicos/{id}', () => {
		it('should return a planos_servicos by id', done => {
			request
			.get('/planos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.planosFk).to.eql(defaultplanos_servicos.planosFk);
				expect(res.body.servicosFk).to.eql(defaultplanos_servicos.servicosFk);
				expect(res.body.quantidade).to.eql(defaultplanos_servicos.quantidade);
				done(err);
			});
		});
	});

	describe('POST /planos_servicos', () => {
		it('should post a planos_servicos', done => {
			const planos_servico = {
		"planosFk":288,
		"servicosFk":325,
		"quantidade":374
	};

			request
			.post('/planos_servicos')
			.set('Authorization', `JWT ${token}`)
			.send(planos_servico)
			.end((err, res) => {
				expect(res.body.planosFk).to.eql(planos_servicos.planosFk);
				expect(res.body.servicosFk).to.eql(planos_servicos.servicosFk);
				expect(res.body.quantidade).to.eql(planos_servicos.quantidade);
				done(err);
			});
		});
	});

	describe('PUT /planos_servicos/{id}', () => {
		it('should update a planos_servicos', done => {
			const planos_servico = {
		"planosFk":451,
		"servicosFk":843,
		"quantidade":571
	};

			request
			.put('/planos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.send(planos_servico)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /planos_servicos/{id}', () => {
		it('should delete a planos_servicos', done => {
			request
			.delete('/planos_servicos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
