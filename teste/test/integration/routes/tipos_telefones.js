import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: tipos_telefones', () => {
	const tipos_telefones = app.datasource.models.tipos_telefones;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttipos_telefones = {
		"nome":"btm6ie",
		"status":"jf2zg",
		"createdAt":"ixd6r",
		"updatedAt":"t66kct"
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
			tipos_telefones
			.destroy({ where: {} })
			.then(() => tipos_telefones.create(defaulttipos_telefones))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /tipos_telefones', () => {
		it('should return a list of tipos_telefones', done => {
			request
			.get('/tipos_telefones')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttipos_telefones.id);
				expect(res.body[0].nome).to.eql(defaulttipos_telefones.nome);
				expect(res.body[0].status).to.eql(defaulttipos_telefones.status);
				expect(res.body[0].createdAt).to.eql(defaulttipos_telefones.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttipos_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /tipos_telefones/{id}', () => {
		it('should return a tipos_telefones by id', done => {
			request
			.get('/tipos_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttipos_telefones.id);
				expect(res.body.nome).to.eql(defaulttipos_telefones.nome);
				expect(res.body.status).to.eql(defaulttipos_telefones.status);
				expect(res.body.createdAt).to.eql(defaulttipos_telefones.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttipos_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /tipos_telefones', () => {
		it('should post a tipos_telefones', done => {
			const tipos_telefone = {
		"nome":"z47ups",
		"status":"4jq4fg",
		"createdAt":"e7z2p",
		"updatedAt":"8tuyd"
	};

			request
			.post('/tipos_telefones')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_telefone)
			.end((err, res) => {
				expect(res.body.id).to.eql(tipos_telefones.id);
				expect(res.body.nome).to.eql(tipos_telefones.nome);
				expect(res.body.status).to.eql(tipos_telefones.status);
				expect(res.body.createdAt).to.eql(tipos_telefones.createdAt);
				expect(res.body.updatedAt).to.eql(tipos_telefones.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /tipos_telefones/{id}', () => {
		it('should update a tipos_telefones', done => {
			const tipos_telefone = {
		"id":"1",
		"nome":"aihhmr",
		"status":"dmef3",
		"createdAt":"bjgcbg",
		"updatedAt":"m0yyx"
	};

			request
			.put('/tipos_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_telefone)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /tipos_telefones/{id}', () => {
		it('should delete a tipos_telefones', done => {
			request
			.delete('/tipos_telefones/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
