import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: pessoas_emails', () => {
	const pessoas_emails = app.datasource.models.pessoas_emails;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultpessoas_emails = {
		"email":"vs79gs",
		"tiposEmailsFk":817,
		"pessoasFk":498,
		"status":"98mk1q",
		"createdAt":"7uhsza",
		"updatedAt":"614k94"
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
			pessoas_emails
			.destroy({ where: {} })
			.then(() => pessoas_emails.create(defaultpessoas_emails))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /pessoas_emails', () => {
		it('should return a list of pessoas_emails', done => {
			request
			.get('/pessoas_emails')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultpessoas_emails.id);
				expect(res.body[0].email).to.eql(defaultpessoas_emails.email);
				expect(res.body[0].tiposEmailsFk).to.eql(defaultpessoas_emails.tiposEmailsFk);
				expect(res.body[0].pessoasFk).to.eql(defaultpessoas_emails.pessoasFk);
				expect(res.body[0].status).to.eql(defaultpessoas_emails.status);
				expect(res.body[0].createdAt).to.eql(defaultpessoas_emails.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultpessoas_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /pessoas_emails/{id}', () => {
		it('should return a pessoas_emails by id', done => {
			request
			.get('/pessoas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultpessoas_emails.id);
				expect(res.body.email).to.eql(defaultpessoas_emails.email);
				expect(res.body.tiposEmailsFk).to.eql(defaultpessoas_emails.tiposEmailsFk);
				expect(res.body.pessoasFk).to.eql(defaultpessoas_emails.pessoasFk);
				expect(res.body.status).to.eql(defaultpessoas_emails.status);
				expect(res.body.createdAt).to.eql(defaultpessoas_emails.createdAt);
				expect(res.body.updatedAt).to.eql(defaultpessoas_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /pessoas_emails', () => {
		it('should post a pessoas_emails', done => {
			const pessoas_email = {
		"email":"o31xcv",
		"tiposEmailsFk":284,
		"pessoasFk":293,
		"status":"4uw8k",
		"createdAt":"snvxt",
		"updatedAt":"arcrik"
	};

			request
			.post('/pessoas_emails')
			.set('Authorization', `JWT ${token}`)
			.send(pessoas_email)
			.end((err, res) => {
				expect(res.body.id).to.eql(pessoas_emails.id);
				expect(res.body.email).to.eql(pessoas_emails.email);
				expect(res.body.tiposEmailsFk).to.eql(pessoas_emails.tiposEmailsFk);
				expect(res.body.pessoasFk).to.eql(pessoas_emails.pessoasFk);
				expect(res.body.status).to.eql(pessoas_emails.status);
				expect(res.body.createdAt).to.eql(pessoas_emails.createdAt);
				expect(res.body.updatedAt).to.eql(pessoas_emails.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /pessoas_emails/{id}', () => {
		it('should update a pessoas_emails', done => {
			const pessoas_email = {
		"id":"1",
		"email":"vfqhqu",
		"tiposEmailsFk":385,
		"pessoasFk":78,
		"status":"5t6h6k",
		"createdAt":"hdoina",
		"updatedAt":"4v0x7q"
	};

			request
			.put('/pessoas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.send(pessoas_email)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /pessoas_emails/{id}', () => {
		it('should delete a pessoas_emails', done => {
			request
			.delete('/pessoas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
