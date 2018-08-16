import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: cpe', () => {
	const cpe = app.datasource.models.cpe;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcpe = {
		"nome":"zux87h",
		"tipo":"kzhtxm",
		"outro":"t5t3qc",
		"createdAt":"qqxg1e",
		"updatedAt":"gfokgs"
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
			cpe
			.destroy({ where: {} })
			.then(() => cpe.create(defaultcpe))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /cpe', () => {
		it('should return a list of cpe', done => {
			request
			.get('/cpe')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcpe.id);
				expect(res.body[0].nome).to.eql(defaultcpe.nome);
				expect(res.body[0].tipo).to.eql(defaultcpe.tipo);
				expect(res.body[0].outro).to.eql(defaultcpe.outro);
				expect(res.body[0].createdAt).to.eql(defaultcpe.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcpe.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /cpe/{id}', () => {
		it('should return a cpe by id', done => {
			request
			.get('/cpe/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcpe.id);
				expect(res.body.nome).to.eql(defaultcpe.nome);
				expect(res.body.tipo).to.eql(defaultcpe.tipo);
				expect(res.body.outro).to.eql(defaultcpe.outro);
				expect(res.body.createdAt).to.eql(defaultcpe.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcpe.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /cpe', () => {
		it('should post a cpe', done => {
			const cp = {
		"nome":"n0o7nl",
		"tipo":"a7kzxl",
		"outro":"cp31ep",
		"createdAt":"3yduqm",
		"updatedAt":"vw88kf"
	};

			request
			.post('/cpe')
			.set('Authorization', `JWT ${token}`)
			.send(cp)
			.end((err, res) => {
				expect(res.body.id).to.eql(cpe.id);
				expect(res.body.nome).to.eql(cpe.nome);
				expect(res.body.tipo).to.eql(cpe.tipo);
				expect(res.body.outro).to.eql(cpe.outro);
				expect(res.body.createdAt).to.eql(cpe.createdAt);
				expect(res.body.updatedAt).to.eql(cpe.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /cpe/{id}', () => {
		it('should update a cpe', done => {
			const cp = {
		"id":"1",
		"nome":"d5uju",
		"tipo":"yut01",
		"outro":"394dpa",
		"createdAt":"gn0qtm",
		"updatedAt":"nlvlh"
	};

			request
			.put('/cpe/1')
			.set('Authorization', `JWT ${token}`)
			.send(cp)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /cpe/{id}', () => {
		it('should delete a cpe', done => {
			request
			.delete('/cpe/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
