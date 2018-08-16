import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: federated_isp_fabricante', () => {
	const federated_isp_fabricante = app.datasource.models.federated_isp_fabricante;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfederated_isp_fabricante = {
		"nome":"51t53c"
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
			federated_isp_fabricante
			.destroy({ where: {} })
			.then(() => federated_isp_fabricante.create(defaultfederated_isp_fabricante))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /federated_isp_fabricante', () => {
		it('should return a list of federated_isp_fabricante', done => {
			request
			.get('/federated_isp_fabricante')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfederated_isp_fabricante.id);
				expect(res.body[0].nome).to.eql(defaultfederated_isp_fabricante.nome);
				done(err);
			});
		});
	});

	describe('GET /federated_isp_fabricante/{id}', () => {
		it('should return a federated_isp_fabricante by id', done => {
			request
			.get('/federated_isp_fabricante/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfederated_isp_fabricante.id);
				expect(res.body.nome).to.eql(defaultfederated_isp_fabricante.nome);
				done(err);
			});
		});
	});

	describe('POST /federated_isp_fabricante', () => {
		it('should post a federated_isp_fabricante', done => {
			const federated_isp_fabricant = {
		"nome":"iyy0nr"
	};

			request
			.post('/federated_isp_fabricante')
			.set('Authorization', `JWT ${token}`)
			.send(federated_isp_fabricant)
			.end((err, res) => {
				expect(res.body.id).to.eql(federated_isp_fabricante.id);
				expect(res.body.nome).to.eql(federated_isp_fabricante.nome);
				done(err);
			});
		});
	});

	describe('PUT /federated_isp_fabricante/{id}', () => {
		it('should update a federated_isp_fabricante', done => {
			const federated_isp_fabricant = {
		"id":"1",
		"nome":"cfxrz"
	};

			request
			.put('/federated_isp_fabricante/1')
			.set('Authorization', `JWT ${token}`)
			.send(federated_isp_fabricant)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /federated_isp_fabricante/{id}', () => {
		it('should delete a federated_isp_fabricante', done => {
			request
			.delete('/federated_isp_fabricante/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
