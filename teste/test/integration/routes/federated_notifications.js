import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_notifications', () => {
	const federated_notifications = app.datasource.models.federated_notifications;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_notifications = {
		"createdAt":"vslmz",
		"title":"n0bfnp",
		"message":"ndvtun",
		"path":"nps7nr",
		"method":"u8qhyh",
		"link":"55rx7b",
		"icon":"9h3ank",
		"level":318,
		"requires":"86fup"
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
			federated_notifications
			.destroy({ where: {} })
			.then(() => federated_notifications.create(defaultfederated_notifications))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_notifications', () => {
		it('should return a list of federated_notifications', done => {
			request
			.get('/federated_notifications')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_notifications.id);
				expect(res.body[0].createdAt).to.eql(defaultfederated_notifications.createdAt);
				expect(res.body[0].title).to.eql(defaultfederated_notifications.title);
				expect(res.body[0].message).to.eql(defaultfederated_notifications.message);
				expect(res.body[0].path).to.eql(defaultfederated_notifications.path);
				expect(res.body[0].method).to.eql(defaultfederated_notifications.method);
				expect(res.body[0].link).to.eql(defaultfederated_notifications.link);
				expect(res.body[0].icon).to.eql(defaultfederated_notifications.icon);
				expect(res.body[0].level).to.eql(defaultfederated_notifications.level);
				expect(res.body[0].requires).to.eql(defaultfederated_notifications.requires);
				done(err);
			});
		});
	});

	describe('GET /federated_notifications/{id}', () => {
		it('should return a federated_notifications by id', done => {
			request
			.get('/federated_notifications/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_notifications.id);
				expect(res.body.createdAt).to.eql(defaultfederated_notifications.createdAt);
				expect(res.body.title).to.eql(defaultfederated_notifications.title);
				expect(res.body.message).to.eql(defaultfederated_notifications.message);
				expect(res.body.path).to.eql(defaultfederated_notifications.path);
				expect(res.body.method).to.eql(defaultfederated_notifications.method);
				expect(res.body.link).to.eql(defaultfederated_notifications.link);
				expect(res.body.icon).to.eql(defaultfederated_notifications.icon);
				expect(res.body.level).to.eql(defaultfederated_notifications.level);
				expect(res.body.requires).to.eql(defaultfederated_notifications.requires);
				done(err);
			});
		});
	});

	describe('POST /federated_notifications', () => {
		it('should post a federated_notifications', done => {
			const federated_notification = {
		"createdAt":"00rj1m",
		"title":"m8iu4h",
		"message":"0tlyx",
		"path":"garj67",
		"method":"168shg",
		"link":"93ls09",
		"icon":"o8g2let",
		"level":523,
		"requires":"ivm90l"
	};

			request
			.post('/federated_notifications')
			.set('Authorization', `JWT ${token}`)
			.send(federated_notification)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_notifications.id);
				expect(res.body.createdAt).to.eql(federated_notifications.createdAt);
				expect(res.body.title).to.eql(federated_notifications.title);
				expect(res.body.message).to.eql(federated_notifications.message);
				expect(res.body.path).to.eql(federated_notifications.path);
				expect(res.body.method).to.eql(federated_notifications.method);
				expect(res.body.link).to.eql(federated_notifications.link);
				expect(res.body.icon).to.eql(federated_notifications.icon);
				expect(res.body.level).to.eql(federated_notifications.level);
				expect(res.body.requires).to.eql(federated_notifications.requires);
				done(err);
			});
		});
	});

	describe('PUT /federated_notifications/{id}', () => {
		it('should update a federated_notifications', done => {
			const federated_notification = {
		"id":"1",
		"createdAt":"fkpfd",
		"title":"7ksdsk",
		"message":"ui6ci9",
		"path":"raxbu",
		"method":"sjqrwb",
		"link":"s55b",
		"icon":"9n6925",
		"level":371,
		"requires":"qlopej"
	};

			request
			.put('/federated_notifications/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_notification)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_notifications/{id}', () => {
		it('should delete a federated_notifications', done => {
			request
			.delete('/federated_notifications/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
