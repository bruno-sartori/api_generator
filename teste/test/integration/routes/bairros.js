import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: bairros', () => {
	const bairros = app.datasource.models.bairros;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultbairros = {
		"bairro":"k8x0q",
		"status":"guqac",
		"createdAt":"ll52g",
		"updatedAt":"zve7z2",
		"cidadesFk":489
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
			bairros
			.destroy({ where: {} })
			.then(() => bairros.create(defaultbairros))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /bairros', () => {
		it('should return a list of bairros', done => {
			request
			.get('/bairros')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultbairros.id);
				expect(res.body[0].bairro).to.eql(defaultbairros.bairro);
				expect(res.body[0].status).to.eql(defaultbairros.status);
				expect(res.body[0].createdAt).to.eql(defaultbairros.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultbairros.updatedAt);
				expect(res.body[0].cidadesFk).to.eql(defaultbairros.cidadesFk);
				done(err);
			});
		});
	});

	describe('GET /bairros/{id}', () => {
		it('should return a bairros by id', done => {
			request
			.get('/bairros/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultbairros.id);
				expect(res.body.bairro).to.eql(defaultbairros.bairro);
				expect(res.body.status).to.eql(defaultbairros.status);
				expect(res.body.createdAt).to.eql(defaultbairros.createdAt);
				expect(res.body.updatedAt).to.eql(defaultbairros.updatedAt);
				expect(res.body.cidadesFk).to.eql(defaultbairros.cidadesFk);
				done(err);
			});
		});
	});

	describe('POST /bairros', () => {
		it('should post a bairros', done => {
			const bairro = {
		"bairro":"2hzjro",
		"status":"l1pvco",
		"createdAt":"1u3sq8",
		"updatedAt":"ez2ifw",
		"cidadesFk":572
	};

			request
			.post('/bairros')
			.set('Authorization', `JWT ${token}`)
			.send(bairro)
			.end((err, res) => {
				expect(res.body.id).to.eql(bairros.id);
				expect(res.body.bairro).to.eql(bairros.bairro);
				expect(res.body.status).to.eql(bairros.status);
				expect(res.body.createdAt).to.eql(bairros.createdAt);
				expect(res.body.updatedAt).to.eql(bairros.updatedAt);
				expect(res.body.cidadesFk).to.eql(bairros.cidadesFk);
				done(err);
			});
		});
	});

	describe('PUT /bairros/{id}', () => {
		it('should update a bairros', done => {
			const bairro = {
		"id":"1",
		"bairro":"c75rib",
		"status":"ex95iq",
		"createdAt":"jzxnpt",
		"updatedAt":"9vkrgeo",
		"cidadesFk":808
	};

			request
			.put('/bairros/1')
			.set('Authorization', `JWT ${token}`)
			.send(bairro)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /bairros/{id}', () => {
		it('should delete a bairros', done => {
			request
			.delete('/bairros/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
