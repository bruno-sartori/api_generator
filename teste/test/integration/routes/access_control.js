import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: access_control', () => {
	const access_control = app.datasource.models.access_control;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultaccess_control = {
		"operadoresFk":885,
		"path":"r3qqv",
		"method":"v9ghpg"
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
			access_control
			.destroy({ where: {} })
			.then(() => access_control.create(defaultaccess_control))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /access_control', () => {
		it('should return a list of access_control', done => {
			request
			.get('/access_control')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultaccess_control.id);
				expect(res.body[0].operadoresFk).to.eql(defaultaccess_control.operadoresFk);
				expect(res.body[0].path).to.eql(defaultaccess_control.path);
				expect(res.body[0].method).to.eql(defaultaccess_control.method);
				done(err);
			});
		});
	});

	describe('GET /access_control/{id}', () => {
		it('should return a access_control by id', done => {
			request
			.get('/access_control/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultaccess_control.id);
				expect(res.body.operadoresFk).to.eql(defaultaccess_control.operadoresFk);
				expect(res.body.path).to.eql(defaultaccess_control.path);
				expect(res.body.method).to.eql(defaultaccess_control.method);
				done(err);
			});
		});
	});

	describe('POST /access_control', () => {
		it('should post a access_control', done => {
			const access_contro = {
		"operadoresFk":112,
		"path":"bqtqui",
		"method":"db7bfp"
	};

			request
			.post('/access_control')
			.set('Authorization', `JWT ${token}`)
			.send(access_contro)
			.end((err, res) => {
				expect(res.body.id).to.eql(access_control.id);
				expect(res.body.operadoresFk).to.eql(access_control.operadoresFk);
				expect(res.body.path).to.eql(access_control.path);
				expect(res.body.method).to.eql(access_control.method);
				done(err);
			});
		});
	});

	describe('PUT /access_control/{id}', () => {
		it('should update a access_control', done => {
			const access_contro = {
		"id":"1",
		"operadoresFk":50,
		"path":"ke9bn",
		"method":"flgjmg"
	};

			request
			.put('/access_control/1')
			.set('Authorization', `JWT ${token}`)
			.send(access_contro)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /access_control/{id}', () => {
		it('should delete a access_control', done => {
			request
			.delete('/access_control/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
