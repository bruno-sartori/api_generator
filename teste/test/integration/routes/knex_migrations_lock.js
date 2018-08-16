import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: knex_migrations_lock', () => {
	const knex_migrations_lock = app.datasource.models.knex_migrations_lock;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultknex_migrations_lock = {
		"is_locked":523
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
			knex_migrations_lock
			.destroy({ where: {} })
			.then(() => knex_migrations_lock.create(defaultknex_migrations_lock))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /knex_migrations_lock', () => {
		it('should return a list of knex_migrations_lock', done => {
			request
			.get('/knex_migrations_lock')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].is_locked).to.eql(defaultknex_migrations_lock.is_locked);
				done(err);
			});
		});
	});

	describe('GET /knex_migrations_lock/{id}', () => {
		it('should return a knex_migrations_lock by id', done => {
			request
			.get('/knex_migrations_lock/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.is_locked).to.eql(defaultknex_migrations_lock.is_locked);
				done(err);
			});
		});
	});

	describe('POST /knex_migrations_lock', () => {
		it('should post a knex_migrations_lock', done => {
			const knex_migrations_loc = {
		"is_locked":487
	};

			request
			.post('/knex_migrations_lock')
			.set('Authorization', `JWT ${token}`)
			.send(knex_migrations_loc)
			.end((err, res) => {
				expect(res.body.is_locked).to.eql(knex_migrations_lock.is_locked);
				done(err);
			});
		});
	});

	describe('PUT /knex_migrations_lock/{id}', () => {
		it('should update a knex_migrations_lock', done => {
			const knex_migrations_loc = {
		"is_locked":238
	};

			request
			.put('/knex_migrations_lock/1')
			.set('Authorization', `JWT ${token}`)
			.send(knex_migrations_loc)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /knex_migrations_lock/{id}', () => {
		it('should delete a knex_migrations_lock', done => {
			request
			.delete('/knex_migrations_lock/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
