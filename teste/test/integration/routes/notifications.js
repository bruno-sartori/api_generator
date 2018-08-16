import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: notifications', () => {
	const notifications = app.datasource.models.notifications;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultnotifications = {
		"createdAt":"fovpfm",
		"title":"vyulbm",
		"message":"3jle9l",
		"path":"wovulp",
		"method":"fjjw6i",
		"requires":"4lm35ls",
		"link":"9lmugo",
		"icon":"hyemrs",
		"level":385,
		"operadoresFk":796
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
			notifications
			.destroy({ where: {} })
			.then(() => notifications.create(defaultnotifications))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /notifications', () => {
		it('should return a list of notifications', done => {
			request
			.get('/notifications')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultnotifications.id);
				expect(res.body[0].createdAt).to.eql(defaultnotifications.createdAt);
				expect(res.body[0].title).to.eql(defaultnotifications.title);
				expect(res.body[0].message).to.eql(defaultnotifications.message);
				expect(res.body[0].path).to.eql(defaultnotifications.path);
				expect(res.body[0].method).to.eql(defaultnotifications.method);
				expect(res.body[0].requires).to.eql(defaultnotifications.requires);
				expect(res.body[0].link).to.eql(defaultnotifications.link);
				expect(res.body[0].icon).to.eql(defaultnotifications.icon);
				expect(res.body[0].level).to.eql(defaultnotifications.level);
				expect(res.body[0].operadoresFk).to.eql(defaultnotifications.operadoresFk);
				done(err);
			});
		});
	});

	describe('GET /notifications/{id}', () => {
		it('should return a notifications by id', done => {
			request
			.get('/notifications/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultnotifications.id);
				expect(res.body.createdAt).to.eql(defaultnotifications.createdAt);
				expect(res.body.title).to.eql(defaultnotifications.title);
				expect(res.body.message).to.eql(defaultnotifications.message);
				expect(res.body.path).to.eql(defaultnotifications.path);
				expect(res.body.method).to.eql(defaultnotifications.method);
				expect(res.body.requires).to.eql(defaultnotifications.requires);
				expect(res.body.link).to.eql(defaultnotifications.link);
				expect(res.body.icon).to.eql(defaultnotifications.icon);
				expect(res.body.level).to.eql(defaultnotifications.level);
				expect(res.body.operadoresFk).to.eql(defaultnotifications.operadoresFk);
				done(err);
			});
		});
	});

	describe('POST /notifications', () => {
		it('should post a notifications', done => {
			const notification = {
		"createdAt":"ika5w",
		"title":"19jhpt",
		"message":"4ms1q",
		"path":"p2zurf",
		"method":"jfkdm",
		"requires":"dobt4l",
		"link":"azo",
		"icon":"lofosp",
		"level":924,
		"operadoresFk":217
	};

			request
			.post('/notifications')
			.set('Authorization', `JWT ${token}`)
			.send(notification)
			.end((err, res) => {
				expect(res.body.id).to.eql(notifications.id);
				expect(res.body.createdAt).to.eql(notifications.createdAt);
				expect(res.body.title).to.eql(notifications.title);
				expect(res.body.message).to.eql(notifications.message);
				expect(res.body.path).to.eql(notifications.path);
				expect(res.body.method).to.eql(notifications.method);
				expect(res.body.requires).to.eql(notifications.requires);
				expect(res.body.link).to.eql(notifications.link);
				expect(res.body.icon).to.eql(notifications.icon);
				expect(res.body.level).to.eql(notifications.level);
				expect(res.body.operadoresFk).to.eql(notifications.operadoresFk);
				done(err);
			});
		});
	});

	describe('PUT /notifications/{id}', () => {
		it('should update a notifications', done => {
			const notification = {
		"id":"1",
		"createdAt":"fekrk",
		"title":"kkxu39",
		"message":"4cdscn",
		"path":"p2ft1e",
		"method":"e9r6pb",
		"requires":"cpuqb",
		"link":"1c92r7",
		"icon":"4vfnig",
		"level":984,
		"operadoresFk":41
	};

			request
			.put('/notifications/1')
			.set('Authorization', `JWT ${token}`)
			.send(notification)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /notifications/{id}', () => {
		it('should delete a notifications', done => {
			request
			.delete('/notifications/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
