import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: block_tables', () => {
	const block_tables = app.datasource.models.block_tables;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultblock_tables = {
		"tiposAtendimentosFk":274
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
			block_tables
			.destroy({ where: {} })
			.then(() => block_tables.create(defaultblock_tables))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /block_tables', () => {
		it('should return a list of block_tables', done => {
			request
			.get('/block_tables')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultblock_tables.id);
				expect(res.body[0].tiposAtendimentosFk).to.eql(defaultblock_tables.tiposAtendimentosFk);
				done(err);
			});
		});
	});

	describe('GET /block_tables/{id}', () => {
		it('should return a block_tables by id', done => {
			request
			.get('/block_tables/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultblock_tables.id);
				expect(res.body.tiposAtendimentosFk).to.eql(defaultblock_tables.tiposAtendimentosFk);
				done(err);
			});
		});
	});

	describe('POST /block_tables', () => {
		it('should post a block_tables', done => {
			const block_table = {
		"tiposAtendimentosFk":683
	};

			request
			.post('/block_tables')
			.set('Authorization', `JWT ${token}`)
			.send(block_table)
			.end((err, res) => {
				expect(res.body.id).to.eql(block_tables.id);
				expect(res.body.tiposAtendimentosFk).to.eql(block_tables.tiposAtendimentosFk);
				done(err);
			});
		});
	});

	describe('PUT /block_tables/{id}', () => {
		it('should update a block_tables', done => {
			const block_table = {
		"id":"1",
		"tiposAtendimentosFk":559
	};

			request
			.put('/block_tables/1')
			.set('Authorization', `JWT ${token}`)
			.send(block_table)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /block_tables/{id}', () => {
		it('should delete a block_tables', done => {
			request
			.delete('/block_tables/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
