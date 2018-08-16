import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: clientes_planos', () => {
	const clientes_planos = app.datasource.models.clientes_planos;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultclientes_planos = {
		"clientesFk":427,
		"conectividadeFk":577,
		"planosFk":741,
		"status":"phm1jh"
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
			clientes_planos
			.destroy({ where: {} })
			.then(() => clientes_planos.create(defaultclientes_planos))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /clientes_planos', () => {
		it('should return a list of clientes_planos', done => {
			request
			.get('/clientes_planos')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultclientes_planos.id);
				expect(res.body[0].clientesFk).to.eql(defaultclientes_planos.clientesFk);
				expect(res.body[0].conectividadeFk).to.eql(defaultclientes_planos.conectividadeFk);
				expect(res.body[0].planosFk).to.eql(defaultclientes_planos.planosFk);
				expect(res.body[0].status).to.eql(defaultclientes_planos.status);
				done(err);
			});
		});
	});

	describe('GET /clientes_planos/{id}', () => {
		it('should return a clientes_planos by id', done => {
			request
			.get('/clientes_planos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultclientes_planos.id);
				expect(res.body.clientesFk).to.eql(defaultclientes_planos.clientesFk);
				expect(res.body.conectividadeFk).to.eql(defaultclientes_planos.conectividadeFk);
				expect(res.body.planosFk).to.eql(defaultclientes_planos.planosFk);
				expect(res.body.status).to.eql(defaultclientes_planos.status);
				done(err);
			});
		});
	});

	describe('POST /clientes_planos', () => {
		it('should post a clientes_planos', done => {
			const clientes_plano = {
		"clientesFk":239,
		"conectividadeFk":60,
		"planosFk":62,
		"status":"dimb6f"
	};

			request
			.post('/clientes_planos')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_plano)
			.end((err, res) => {
				expect(res.body.id).to.eql(clientes_planos.id);
				expect(res.body.clientesFk).to.eql(clientes_planos.clientesFk);
				expect(res.body.conectividadeFk).to.eql(clientes_planos.conectividadeFk);
				expect(res.body.planosFk).to.eql(clientes_planos.planosFk);
				expect(res.body.status).to.eql(clientes_planos.status);
				done(err);
			});
		});
	});

	describe('PUT /clientes_planos/{id}', () => {
		it('should update a clientes_planos', done => {
			const clientes_plano = {
		"id":"1",
		"clientesFk":550,
		"conectividadeFk":543,
		"planosFk":769,
		"status":"3btwb"
	};

			request
			.put('/clientes_planos/1')
			.set('Authorization', `JWT ${token}`)
			.send(clientes_plano)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /clientes_planos/{id}', () => {
		it('should delete a clientes_planos', done => {
			request
			.delete('/clientes_planos/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
