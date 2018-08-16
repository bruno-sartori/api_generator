import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: access_control_values', () => {
	const access_control_values = app.datasource.models.access_control_values;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultaccess_control_values = {
		"property":"o8xmlh",
		"path":"lz059h",
		"method":"4dvldi",
		"operadoresFk":672
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
			access_control_values
			.destroy({ where: {} })
			.then(() => access_control_values.create(defaultaccess_control_values))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /access_control_values', () => {
		it('should return a list of access_control_values', done => {
			request
			.get('/access_control_values')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultaccess_control_values.id);
				expect(res.body[0].property).to.eql(defaultaccess_control_values.property);
				expect(res.body[0].path).to.eql(defaultaccess_control_values.path);
				expect(res.body[0].method).to.eql(defaultaccess_control_values.method);
				expect(res.body[0].operadoresFk).to.eql(defaultaccess_control_values.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /access_control_values/{id}', () => {
		it('should return a access_control_values by id', done => {
			request
			.get('/access_control_values/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultaccess_control_values.id);
				expect(res.body.property).to.eql(defaultaccess_control_values.property);
				expect(res.body.path).to.eql(defaultaccess_control_values.path);
				expect(res.body.method).to.eql(defaultaccess_control_values.method);
				expect(res.body.operadoresFk).to.eql(defaultaccess_control_values.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /access_control_values', () => {
		it('should post a access_control_values', done => {
			const access_control_value = {
		"property":"3po1za",
		"path":"7ps2a8",
		"method":"jydyxd",
		"operadoresFk":315
	};

			request
			.post('/access_control_values')
			.set('Authorization', `JWT ${token}`)
			.send(access_control_value)
			.end((err, res) => {
				expect(res.body.id).to.eql(access_control_values.id);
				expect(res.body.property).to.eql(access_control_values.property);
				expect(res.body.path).to.eql(access_control_values.path);
				expect(res.body.method).to.eql(access_control_values.method);
				expect(res.body.operadoresFk).to.eql(access_control_values.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /access_control_values/{id}', () => {
		it('should update a access_control_values', done => {
			const access_control_value = {
		"id":"1",
		"property":"kucjg",
		"path":"15tzt",
		"method":"nplf6f",
		"operadoresFk":779
	};

			request
			.put('/access_control_values/1')
			.set('Authorization', `JWT ${token}`)
			.send(access_control_value)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /access_control_values/{id}', () => {
		it('should delete a access_control_values', done => {
			request
			.delete('/access_control_values/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
