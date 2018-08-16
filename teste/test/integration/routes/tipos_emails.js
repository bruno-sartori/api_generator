import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: tipos_emails', () => {
	const tipos_emails = app.datasource.models.tipos_emails;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaulttipos_emails = {
		"nome":"mseh58",
		"status":"t93yhg",
		"createdAt":"glain5",
		"updatedAt":"zq5xd"
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
			tipos_emails
			.destroy({ where: {} })
			.then(() => tipos_emails.create(defaulttipos_emails))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /tipos_emails', () => {
		it('should return a list of tipos_emails', done => {
			request
			.get('/tipos_emails')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaulttipos_emails.id);
				expect(res.body[0].nome).to.eql(defaulttipos_emails.nome);
				expect(res.body[0].status).to.eql(defaulttipos_emails.status);
				expect(res.body[0].createdAt).to.eql(defaulttipos_emails.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaulttipos_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /tipos_emails/{id}', () => {
		it('should return a tipos_emails by id', done => {
			request
			.get('/tipos_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaulttipos_emails.id);
				expect(res.body.nome).to.eql(defaulttipos_emails.nome);
				expect(res.body.status).to.eql(defaulttipos_emails.status);
				expect(res.body.createdAt).to.eql(defaulttipos_emails.createdAt);
				expect(res.body.updatedAt).to.eql(defaulttipos_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /tipos_emails', () => {
		it('should post a tipos_emails', done => {
			const tipos_email = {
		"nome":"rvzea",
		"status":"3q3i4i",
		"createdAt":"su8gta",
		"updatedAt":"k5xps"
	};

			request
			.post('/tipos_emails')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_email)
			.end((err, res) => {
				expect(res.body.id).to.eql(tipos_emails.id);
				expect(res.body.nome).to.eql(tipos_emails.nome);
				expect(res.body.status).to.eql(tipos_emails.status);
				expect(res.body.createdAt).to.eql(tipos_emails.createdAt);
				expect(res.body.updatedAt).to.eql(tipos_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /tipos_emails/{id}', () => {
		it('should update a tipos_emails', done => {
			const tipos_email = {
		"id":"1",
		"nome":"gfv9xe",
		"status":"fmd3g6",
		"createdAt":"3vfvzf",
		"updatedAt":"tgtdvn"
	};

			request
			.put('/tipos_emails/1')
			.set('Authorization', `JWT ${token}`)
			.send(tipos_email)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /tipos_emails/{id}', () => {
		it('should delete a tipos_emails', done => {
			request
			.delete('/tipos_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
