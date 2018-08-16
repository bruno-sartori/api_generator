import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: switch', () => {
	const switch = app.datasource.models.switch;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultswitch = {
		"nome":"w4pyc",
		"createdAt":"6fvdfl",
		"updatedAt":"te951o"
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
			switch
			.destroy({ where: {} })
			.then(() => switch.create(defaultswitch))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /switch', () => {
		it('should return a list of switch', done => {
			request
			.get('/switch')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultswitch.id);
				expect(res.body[0].nome).to.eql(defaultswitch.nome);
				expect(res.body[0].createdAt).to.eql(defaultswitch.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultswitch.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /switch/{id}', () => {
		it('should return a switch by id', done => {
			request
			.get('/switch/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultswitch.id);
				expect(res.body.nome).to.eql(defaultswitch.nome);
				expect(res.body.createdAt).to.eql(defaultswitch.createdAt);
				expect(res.body.updatedAt).to.eql(defaultswitch.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /switch', () => {
		it('should post a switch', done => {
			const switc = {
		"nome":"664fzq",
		"createdAt":"2tigd",
		"updatedAt":"9g4jkw"
	};

			request
			.post('/switch')
			.set('Authorization', `JWT ${token}`)
			.send(switc)
			.end((err, res) => {
				expect(res.body.id).to.eql(switch.id);
				expect(res.body.nome).to.eql(switch.nome);
				expect(res.body.createdAt).to.eql(switch.createdAt);
				expect(res.body.updatedAt).to.eql(switch.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /switch/{id}', () => {
		it('should update a switch', done => {
			const switc = {
		"id":"1",
		"nome":"534dil",
		"createdAt":"ko17o",
		"updatedAt":"8f47vr"
	};

			request
			.put('/switch/1')
			.set('Authorization', `JWT ${token}`)
			.send(switc)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /switch/{id}', () => {
		it('should delete a switch', done => {
			request
			.delete('/switch/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
