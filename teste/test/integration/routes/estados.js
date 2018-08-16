import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: estados', () => {
	const estados = app.datasource.models.estados;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultestados = {
		"estado":"hasukh",
		"status":"dlydab",
		"createdAt":"5wo3ph",
		"updatedAt":"4psnma"
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
			estados
			.destroy({ where: {} })
			.then(() => estados.create(defaultestados))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /estados', () => {
		it('should return a list of estados', done => {
			request
			.get('/estados')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultestados.id);
				expect(res.body[0].estado).to.eql(defaultestados.estado);
				expect(res.body[0].status).to.eql(defaultestados.status);
				expect(res.body[0].createdAt).to.eql(defaultestados.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultestados.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /estados/{id}', () => {
		it('should return a estados by id', done => {
			request
			.get('/estados/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultestados.id);
				expect(res.body.estado).to.eql(defaultestados.estado);
				expect(res.body.status).to.eql(defaultestados.status);
				expect(res.body.createdAt).to.eql(defaultestados.createdAt);
				expect(res.body.updatedAt).to.eql(defaultestados.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /estados', () => {
		it('should post a estados', done => {
			const estado = {
		"estado":"bszdro",
		"status":"tntven",
		"createdAt":"eldonw",
		"updatedAt":"qrnobw"
	};

			request
			.post('/estados')
			.set('Authorization', `JWT ${token}`)
			.send(estado)
			.end((err, res) => {
				expect(res.body.id).to.eql(estados.id);
				expect(res.body.estado).to.eql(estados.estado);
				expect(res.body.status).to.eql(estados.status);
				expect(res.body.createdAt).to.eql(estados.createdAt);
				expect(res.body.updatedAt).to.eql(estados.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /estados/{id}', () => {
		it('should update a estados', done => {
			const estado = {
		"id":"1",
		"estado":"xj0smb",
		"status":"nu3a4",
		"createdAt":"xwlmf",
		"updatedAt":"axpjvp"
	};

			request
			.put('/estados/1')
			.set('Authorization', `JWT ${token}`)
			.send(estado)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /estados/{id}', () => {
		it('should delete a estados', done => {
			request
			.delete('/estados/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
