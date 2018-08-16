import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: dias_pagamento_plano', () => {
	const dias_pagamento_plano = app.datasource.models.dias_pagamento_plano;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultdias_pagamento_plano = {
		"dia":"41k6rp"
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
			dias_pagamento_plano
			.destroy({ where: {} })
			.then(() => dias_pagamento_plano.create(defaultdias_pagamento_plano))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /dias_pagamento_plano', () => {
		it('should return a list of dias_pagamento_plano', done => {
			request
			.get('/dias_pagamento_plano')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultdias_pagamento_plano.id);
				expect(res.body[0].dia).to.eql(defaultdias_pagamento_plano.dia);
				done(err);
			});
		});
	});

	describe('GET /dias_pagamento_plano/{id}', () => {
		it('should return a dias_pagamento_plano by id', done => {
			request
			.get('/dias_pagamento_plano/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultdias_pagamento_plano.id);
				expect(res.body.dia).to.eql(defaultdias_pagamento_plano.dia);
				done(err);
			});
		});
	});

	describe('POST /dias_pagamento_plano', () => {
		it('should post a dias_pagamento_plano', done => {
			const dias_pagamento_plan = {
		"dia":"tkf5nq"
	};

			request
			.post('/dias_pagamento_plano')
			.set('Authorization', `JWT ${token}`)
			.send(dias_pagamento_plan)
			.end((err, res) => {
				expect(res.body.id).to.eql(dias_pagamento_plano.id);
				expect(res.body.dia).to.eql(dias_pagamento_plano.dia);
				done(err);
			});
		});
	});

	describe('PUT /dias_pagamento_plano/{id}', () => {
		it('should update a dias_pagamento_plano', done => {
			const dias_pagamento_plan = {
		"id":"1",
		"dia":"eb3lhn"
	};

			request
			.put('/dias_pagamento_plano/1')
			.set('Authorization', `JWT ${token}`)
			.send(dias_pagamento_plan)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /dias_pagamento_plano/{id}', () => {
		it('should delete a dias_pagamento_plano', done => {
			request
			.delete('/dias_pagamento_plano/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
