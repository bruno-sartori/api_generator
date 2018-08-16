import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: cidades', () => {
	const cidades = app.datasource.models.cidades;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcidades = {
		"cidade":"oca0dr",
		"status":"bah73t",
		"createdAt":"732jl",
		"updatedAt":"d1wch",
		"estadosFk":237
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
			cidades
			.destroy({ where: {} })
			.then(() => cidades.create(defaultcidades))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /cidades', () => {
		it('should return a list of cidades', done => {
			request
			.get('/cidades')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcidades.id);
				expect(res.body[0].cidade).to.eql(defaultcidades.cidade);
				expect(res.body[0].status).to.eql(defaultcidades.status);
				expect(res.body[0].createdAt).to.eql(defaultcidades.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcidades.updatedAt);
				expect(res.body[0].estadosFk).to.eql(defaultcidades.estadosFk);
				done(err);
			});
		});
	});

	describe('GET /cidades/{id}', () => {
		it('should return a cidades by id', done => {
			request
			.get('/cidades/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcidades.id);
				expect(res.body.cidade).to.eql(defaultcidades.cidade);
				expect(res.body.status).to.eql(defaultcidades.status);
				expect(res.body.createdAt).to.eql(defaultcidades.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcidades.updatedAt);
				expect(res.body.estadosFk).to.eql(defaultcidades.estadosFk);
				done(err);
			});
		});
	});

	describe('POST /cidades', () => {
		it('should post a cidades', done => {
			const cidade = {
		"cidade":"rgj1fp",
		"status":"mmau4",
		"createdAt":"699kx",
		"updatedAt":"duxkyf",
		"estadosFk":149
	};

			request
			.post('/cidades')
			.set('Authorization', `JWT ${token}`)
			.send(cidade)
			.end((err, res) => {
				expect(res.body.id).to.eql(cidades.id);
				expect(res.body.cidade).to.eql(cidades.cidade);
				expect(res.body.status).to.eql(cidades.status);
				expect(res.body.createdAt).to.eql(cidades.createdAt);
				expect(res.body.updatedAt).to.eql(cidades.updatedAt);
				expect(res.body.estadosFk).to.eql(cidades.estadosFk);
				done(err);
			});
		});
	});

	describe('PUT /cidades/{id}', () => {
		it('should update a cidades', done => {
			const cidade = {
		"id":"1",
		"cidade":"6151ih",
		"status":"pl37od",
		"createdAt":"0z0dts",
		"updatedAt":"cxoami",
		"estadosFk":299
	};

			request
			.put('/cidades/1')
			.set('Authorization', `JWT ${token}`)
			.send(cidade)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /cidades/{id}', () => {
		it('should delete a cidades', done => {
			request
			.delete('/cidades/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
