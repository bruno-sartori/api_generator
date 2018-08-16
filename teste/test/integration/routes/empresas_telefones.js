import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: empresas_telefones', () => {
	const empresas_telefones = app.datasource.models.empresas_telefones;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultempresas_telefones = {
		"telefone":"h42g4x",
		"tiposTelefonesFk":993,
		"empresasFk":437
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
			empresas_telefones
			.destroy({ where: {} })
			.then(() => empresas_telefones.create(defaultempresas_telefones))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /empresas_telefones', () => {
		it('should return a list of empresas_telefones', done => {
			request
			.get('/empresas_telefones')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultempresas_telefones.id);
				expect(res.body[0].telefone).to.eql(defaultempresas_telefones.telefone);
				expect(res.body[0].tiposTelefonesFk).to.eql(defaultempresas_telefones.tiposTelefonesFk);
				expect(res.body[0].empresasFk).to.eql(defaultempresas_telefones.empresasFk);
				done(err);
			});
		});
	});

	describe('GET /empresas_telefones/{id}', () => {
		it('should return a empresas_telefones by id', done => {
			request
			.get('/empresas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultempresas_telefones.id);
				expect(res.body.telefone).to.eql(defaultempresas_telefones.telefone);
				expect(res.body.tiposTelefonesFk).to.eql(defaultempresas_telefones.tiposTelefonesFk);
				expect(res.body.empresasFk).to.eql(defaultempresas_telefones.empresasFk);
				done(err);
			});
		});
	});

	describe('POST /empresas_telefones', () => {
		it('should post a empresas_telefones', done => {
			const empresas_telefone = {
		"telefone":"6nks1i",
		"tiposTelefonesFk":363,
		"empresasFk":942
	};

			request
			.post('/empresas_telefones')
			.set('Authorization', `JWT ${token}`)
			.send(empresas_telefone)
			.end((err, res) => {
				expect(res.body.id).to.eql(empresas_telefones.id);
				expect(res.body.telefone).to.eql(empresas_telefones.telefone);
				expect(res.body.tiposTelefonesFk).to.eql(empresas_telefones.tiposTelefonesFk);
				expect(res.body.empresasFk).to.eql(empresas_telefones.empresasFk);
				done(err);
			});
		});
	});

	describe('PUT /empresas_telefones/{id}', () => {
		it('should update a empresas_telefones', done => {
			const empresas_telefone = {
		"id":"1",
		"telefone":"8gkjt9",
		"tiposTelefonesFk":891,
		"empresasFk":694
	};

			request
			.put('/empresas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.send(empresas_telefone)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /empresas_telefones/{id}', () => {
		it('should delete a empresas_telefones', done => {
			request
			.delete('/empresas_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
