import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: knex_migrations', () => {
	const knex_migrations = app.datasource.models.knex_migrations;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultknex_migrations = {
		"name":"ljg74",
		"batch":868,
		"migration_time":"y1yq8j"
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
			knex_migrations
			.destroy({ where: {} })
			.then(() => knex_migrations.create(defaultknex_migrations))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /knex_migrations', () => {
		it('should return a list of knex_migrations', done => {
			request
			.get('/knex_migrations')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultknex_migrations.id);
				expect(res.body[0].name).to.eql(defaultknex_migrations.name);
				expect(res.body[0].batch).to.eql(defaultknex_migrations.batch);
				expect(res.body[0].migration_time).to.eql(defaultknex_migrations.migration_time);
				done(err);
			});
		});
	});

	describe('GET /knex_migrations/{id}', () => {
		it('should return a knex_migrations by id', done => {
			request
			.get('/knex_migrations/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultknex_migrations.id);
				expect(res.body.name).to.eql(defaultknex_migrations.name);
				expect(res.body.batch).to.eql(defaultknex_migrations.batch);
				expect(res.body.migration_time).to.eql(defaultknex_migrations.migration_time);
				done(err);
			});
		});
	});

	describe('POST /knex_migrations', () => {
		it('should post a knex_migrations', done => {
			const knex_migration = {
		"name":"oc4exf",
		"batch":344,
		"migration_time":"hg1zc"
	};

			request
			.post('/knex_migrations')
			.set('Authorization', `JWT ${token}`)
			.send(knex_migration)
			.end((err, res) => {
				expect(res.body.id).to.eql(knex_migrations.id);
				expect(res.body.name).to.eql(knex_migrations.name);
				expect(res.body.batch).to.eql(knex_migrations.batch);
				expect(res.body.migration_time).to.eql(knex_migrations.migration_time);
				done(err);
			});
		});
	});

	describe('PUT /knex_migrations/{id}', () => {
		it('should update a knex_migrations', done => {
			const knex_migration = {
		"id":"1",
		"name":"kx4ne",
		"batch":851,
		"migration_time":"t1cpq"
	};

			request
			.put('/knex_migrations/1')
			.set('Authorization', `JWT ${token}`)
			.send(knex_migration)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /knex_migrations/{id}', () => {
		it('should delete a knex_migrations', done => {
			request
			.delete('/knex_migrations/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
