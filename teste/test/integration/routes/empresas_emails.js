import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: empresas_emails', () => {
	const empresas_emails = app.datasource.models.empresas_emails;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultempresas_emails = {
		"email":"t9hshq",
		"tiposEmailsFk":391,
		"empresasFk":638
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
			empresas_emails
			.destroy({ where: {} })
			.then(() => empresas_emails.create(defaultempresas_emails))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /empresas_emails', () => {
		it('should return a list of empresas_emails', done => {
			request
			.get('/empresas_emails')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultempresas_emails.id);
				expect(res.body[0].email).to.eql(defaultempresas_emails.email);
				expect(res.body[0].tiposEmailsFk).to.eql(defaultempresas_emails.tiposEmailsFk);
				expect(res.body[0].empresasFk).to.eql(defaultempresas_emails.empresasFk);
				done(err);
			});
		});
	});

	describe('GET /empresas_emails/{id}', () => {
		it('should return a empresas_emails by id', done => {
			request
			.get('/empresas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultempresas_emails.id);
				expect(res.body.email).to.eql(defaultempresas_emails.email);
				expect(res.body.tiposEmailsFk).to.eql(defaultempresas_emails.tiposEmailsFk);
				expect(res.body.empresasFk).to.eql(defaultempresas_emails.empresasFk);
				done(err);
			});
		});
	});

	describe('POST /empresas_emails', () => {
		it('should post a empresas_emails', done => {
			const empresas_email = {
		"email":"aqunbq",
		"tiposEmailsFk":612,
		"empresasFk":51
	};

			request
			.post('/empresas_emails')
			.set('Authorization', `JWT ${token}`)
			.send(empresas_email)
			.end((err, res) => {
				expect(res.body.id).to.eql(empresas_emails.id);
				expect(res.body.email).to.eql(empresas_emails.email);
				expect(res.body.tiposEmailsFk).to.eql(empresas_emails.tiposEmailsFk);
				expect(res.body.empresasFk).to.eql(empresas_emails.empresasFk);
				done(err);
			});
		});
	});

	describe('PUT /empresas_emails/{id}', () => {
		it('should update a empresas_emails', done => {
			const empresas_email = {
		"id":"1",
		"email":"onl86",
		"tiposEmailsFk":926,
		"empresasFk":715
	};

			request
			.put('/empresas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.send(empresas_email)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /empresas_emails/{id}', () => {
		it('should delete a empresas_emails', done => {
			request
			.delete('/empresas_emails/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
