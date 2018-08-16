import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: audit', () => {
	const audit = app.datasource.models.audit;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultaudit = {
		"operadoresFk":974,
		"method":"p39lv8",
		"path":"a1z63",
		"remoteAddress":"6ycced",
		"response":432,
		"message":"13mj9r",
		"acao":"o2vmc9",
		"level":"3knt8",
		"ref":"4gzjxb",
		"createdAt":"r3v185p"
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
			audit
			.destroy({ where: {} })
			.then(() => audit.create(defaultaudit))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /audit', () => {
		it('should return a list of audit', done => {
			request
			.get('/audit')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultaudit.id);
				expect(res.body[0].operadoresFk).to.eql(defaultaudit.operadoresFk);
				expect(res.body[0].method).to.eql(defaultaudit.method);
				expect(res.body[0].path).to.eql(defaultaudit.path);
				expect(res.body[0].remoteAddress).to.eql(defaultaudit.remoteAddress);
				expect(res.body[0].response).to.eql(defaultaudit.response);
				expect(res.body[0].message).to.eql(defaultaudit.message);
				expect(res.body[0].acao).to.eql(defaultaudit.acao);
				expect(res.body[0].level).to.eql(defaultaudit.level);
				expect(res.body[0].ref).to.eql(defaultaudit.ref);
				expect(res.body[0].createdAt).to.eql(defaultaudit.createdAt);
				done(err);
			});
		});
	});

	describe('GET /audit/{id}', () => {
		it('should return a audit by id', done => {
			request
			.get('/audit/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultaudit.id);
				expect(res.body.operadoresFk).to.eql(defaultaudit.operadoresFk);
				expect(res.body.method).to.eql(defaultaudit.method);
				expect(res.body.path).to.eql(defaultaudit.path);
				expect(res.body.remoteAddress).to.eql(defaultaudit.remoteAddress);
				expect(res.body.response).to.eql(defaultaudit.response);
				expect(res.body.message).to.eql(defaultaudit.message);
				expect(res.body.acao).to.eql(defaultaudit.acao);
				expect(res.body.level).to.eql(defaultaudit.level);
				expect(res.body.ref).to.eql(defaultaudit.ref);
				expect(res.body.createdAt).to.eql(defaultaudit.createdAt);
				done(err);
			});
		});
	});

	describe('POST /audit', () => {
		it('should post a audit', done => {
			const audi = {
		"operadoresFk":41,
		"method":"avd2vf",
		"path":"5189gg",
		"remoteAddress":"5maj2a",
		"response":450,
		"message":"54whsy",
		"acao":"b1k8za",
		"level":"kn01nt",
		"ref":"fkun9d",
		"createdAt":"u109pl"
	};

			request
			.post('/audit')
			.set('Authorization', `JWT ${token}`)
			.send(audi)
			.end((err, res) => {
				expect(res.body.id).to.eql(audit.id);
				expect(res.body.operadoresFk).to.eql(audit.operadoresFk);
				expect(res.body.method).to.eql(audit.method);
				expect(res.body.path).to.eql(audit.path);
				expect(res.body.remoteAddress).to.eql(audit.remoteAddress);
				expect(res.body.response).to.eql(audit.response);
				expect(res.body.message).to.eql(audit.message);
				expect(res.body.acao).to.eql(audit.acao);
				expect(res.body.level).to.eql(audit.level);
				expect(res.body.ref).to.eql(audit.ref);
				expect(res.body.createdAt).to.eql(audit.createdAt);
				done(err);
			});
		});
	});

	describe('PUT /audit/{id}', () => {
		it('should update a audit', done => {
			const audi = {
		"id":"1",
		"operadoresFk":89,
		"method":"5ba4hb",
		"path":"s05wjg",
		"remoteAddress":"v1quzg",
		"response":221,
		"message":"2rbkyp",
		"acao":"at3w0e",
		"level":"7ke4g",
		"ref":"sgd3jf",
		"createdAt":"cxk37"
	};

			request
			.put('/audit/1')
			.set('Authorization', `JWT ${token}`)
			.send(audi)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /audit/{id}', () => {
		it('should delete a audit', done => {
			request
			.delete('/audit/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
