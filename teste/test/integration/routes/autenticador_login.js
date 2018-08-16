import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: autenticador_login', () => {
	const autenticador_login = app.datasource.models.autenticador_login;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultautenticador_login = {
		"nome":"d4l3ps",
		"tipoAutenticacao":"3xyxe",
		"ip":"bq7n67",
		"usuario":"nnwpjum",
		"senha":"2b40e3",
		"createdAt":"ut4mr",
		"updatedAt":"m15yhl"
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
			autenticador_login
			.destroy({ where: {} })
			.then(() => autenticador_login.create(defaultautenticador_login))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /autenticador_login', () => {
		it('should return a list of autenticador_login', done => {
			request
			.get('/autenticador_login')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultautenticador_login.id);
				expect(res.body[0].nome).to.eql(defaultautenticador_login.nome);
				expect(res.body[0].tipoAutenticacao).to.eql(defaultautenticador_login.tipoAutenticacao);
				expect(res.body[0].ip).to.eql(defaultautenticador_login.ip);
				expect(res.body[0].usuario).to.eql(defaultautenticador_login.usuario);
				expect(res.body[0].senha).to.eql(defaultautenticador_login.senha);
				expect(res.body[0].createdAt).to.eql(defaultautenticador_login.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultautenticador_login.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /autenticador_login/{id}', () => {
		it('should return a autenticador_login by id', done => {
			request
			.get('/autenticador_login/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultautenticador_login.id);
				expect(res.body.nome).to.eql(defaultautenticador_login.nome);
				expect(res.body.tipoAutenticacao).to.eql(defaultautenticador_login.tipoAutenticacao);
				expect(res.body.ip).to.eql(defaultautenticador_login.ip);
				expect(res.body.usuario).to.eql(defaultautenticador_login.usuario);
				expect(res.body.senha).to.eql(defaultautenticador_login.senha);
				expect(res.body.createdAt).to.eql(defaultautenticador_login.createdAt);
				expect(res.body.updatedAt).to.eql(defaultautenticador_login.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /autenticador_login', () => {
		it('should post a autenticador_login', done => {
			const autenticador_logi = {
		"nome":"m7nv4t",
		"tipoAutenticacao":"7svp95",
		"ip":"48reym",
		"usuario":"j3rnlc",
		"senha":"a7twl9",
		"createdAt":"5b8oc",
		"updatedAt":"yr6ior"
	};

			request
			.post('/autenticador_login')
			.set('Authorization', `JWT ${token}`)
			.send(autenticador_logi)
			.end((err, res) => {
				expect(res.body.id).to.eql(autenticador_login.id);
				expect(res.body.nome).to.eql(autenticador_login.nome);
				expect(res.body.tipoAutenticacao).to.eql(autenticador_login.tipoAutenticacao);
				expect(res.body.ip).to.eql(autenticador_login.ip);
				expect(res.body.usuario).to.eql(autenticador_login.usuario);
				expect(res.body.senha).to.eql(autenticador_login.senha);
				expect(res.body.createdAt).to.eql(autenticador_login.createdAt);
				expect(res.body.updatedAt).to.eql(autenticador_login.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /autenticador_login/{id}', () => {
		it('should update a autenticador_login', done => {
			const autenticador_logi = {
		"id":"1",
		"nome":"bpafc",
		"tipoAutenticacao":"4pk5xv",
		"ip":"y99swb",
		"usuario":"k8nt2j",
		"senha":"9kcarq",
		"createdAt":"5sptae",
		"updatedAt":"q2gx7"
	};

			request
			.put('/autenticador_login/1')
			.set('Authorization', `JWT ${token}`)
			.send(autenticador_logi)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /autenticador_login/{id}', () => {
		it('should delete a autenticador_login', done => {
			request
			.delete('/autenticador_login/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
