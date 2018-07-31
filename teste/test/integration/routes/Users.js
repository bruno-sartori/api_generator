import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: Users', () => {
	const Users = app.datasource.models.Users;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultUsers = {
		"name":"f6qczg",
		"email":"owq04b",
		"password":"z5p1u"
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
			Users
			.destroy({ where: {} })
			.then(() => Users.create(defaultUsers))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /users', () => {
		it('should return a list of users', done => {
			request
			.get('/users')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultUsers.id);
				expect(res.body[0].name).to.eql(defaultUsers.name);
				expect(res.body[0].email).to.eql(defaultUsers.email);
				expect(res.body[0].password).to.eql(defaultUsers.password);
				done(err);
			});
		});
	});

	describe('GET /users/{id}', () => {
		it('should return a Users by id', done => {
			request
			.get('/users/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultUsers.id);
				expect(res.body.name).to.eql(defaultUsers.name);
				expect(res.body.email).to.eql(defaultUsers.email);
				expect(res.body.password).to.eql(defaultUsers.password);
				done(err);
			});
		});
	});

	describe('POST /users', () => {
		it('should post a Users', done => {
			const user = {
		"name":"9wwett",
		"email":"57r3pt",
		"password":"v4c9xq"
	};

			request
			.post('/users')
			.set('Authorization', `JWT ${token}`)
			.send(user)
			.end((err, res) => {
				expect(res.body.id).to.eql(users.id);
				expect(res.body.name).to.eql(users.name);
				expect(res.body.email).to.eql(users.email);
				expect(res.body.password).to.eql(users.password);
				done(err);
			});
		});
	});

	describe('PUT /users/{id}', () => {
		it('should update a users', done => {
			const user = {
		"id":"1",
		"name":"4tqxrq",
		"email":"y7nfgw",
		"password":"e3m43"
	};

			request
			.put('/users/1')
			.set('Authorization', `JWT ${token}`)
			.send(user)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /users/{id}', () => {
		it('should delete a users', done => {
			request
			.delete('/users/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
