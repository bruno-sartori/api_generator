import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: autenticador_cpe', () => {
	const autenticador_cpe = app.datasource.models.autenticador_cpe;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultautenticador_cpe = {
		"nome":"k5xls",
		"enderecoPop":"a39qzz",
		"ip":"q5ouad",
		"tipo":"7wtifc",
		"usuario":"83i0it",
		"senha":"5n15j6",
		"createdAt":"4y2zzp",
		"updatedAt":"jffof"
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
			autenticador_cpe
			.destroy({ where: {} })
			.then(() => autenticador_cpe.create(defaultautenticador_cpe))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /autenticador_cpe', () => {
		it('should return a list of autenticador_cpe', done => {
			request
			.get('/autenticador_cpe')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultautenticador_cpe.id);
				expect(res.body[0].nome).to.eql(defaultautenticador_cpe.nome);
				expect(res.body[0].enderecoPop).to.eql(defaultautenticador_cpe.enderecoPop);
				expect(res.body[0].ip).to.eql(defaultautenticador_cpe.ip);
				expect(res.body[0].tipo).to.eql(defaultautenticador_cpe.tipo);
				expect(res.body[0].usuario).to.eql(defaultautenticador_cpe.usuario);
				expect(res.body[0].senha).to.eql(defaultautenticador_cpe.senha);
				expect(res.body[0].createdAt).to.eql(defaultautenticador_cpe.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultautenticador_cpe.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /autenticador_cpe/{id}', () => {
		it('should return a autenticador_cpe by id', done => {
			request
			.get('/autenticador_cpe/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultautenticador_cpe.id);
				expect(res.body.nome).to.eql(defaultautenticador_cpe.nome);
				expect(res.body.enderecoPop).to.eql(defaultautenticador_cpe.enderecoPop);
				expect(res.body.ip).to.eql(defaultautenticador_cpe.ip);
				expect(res.body.tipo).to.eql(defaultautenticador_cpe.tipo);
				expect(res.body.usuario).to.eql(defaultautenticador_cpe.usuario);
				expect(res.body.senha).to.eql(defaultautenticador_cpe.senha);
				expect(res.body.createdAt).to.eql(defaultautenticador_cpe.createdAt);
				expect(res.body.updatedAt).to.eql(defaultautenticador_cpe.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /autenticador_cpe', () => {
		it('should post a autenticador_cpe', done => {
			const autenticador_cp = {
		"nome":"qipul",
		"enderecoPop":"83abjc",
		"ip":"g1gkhq",
		"tipo":"o19vho",
		"usuario":"lxk64",
		"senha":"8uil3v",
		"createdAt":"89r4h7",
		"updatedAt":"k8mnxma"
	};

			request
			.post('/autenticador_cpe')
			.set('Authorization', `JWT ${token}`)
			.send(autenticador_cp)
			.end((err, res) => {
				expect(res.body.id).to.eql(autenticador_cpe.id);
				expect(res.body.nome).to.eql(autenticador_cpe.nome);
				expect(res.body.enderecoPop).to.eql(autenticador_cpe.enderecoPop);
				expect(res.body.ip).to.eql(autenticador_cpe.ip);
				expect(res.body.tipo).to.eql(autenticador_cpe.tipo);
				expect(res.body.usuario).to.eql(autenticador_cpe.usuario);
				expect(res.body.senha).to.eql(autenticador_cpe.senha);
				expect(res.body.createdAt).to.eql(autenticador_cpe.createdAt);
				expect(res.body.updatedAt).to.eql(autenticador_cpe.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /autenticador_cpe/{id}', () => {
		it('should update a autenticador_cpe', done => {
			const autenticador_cp = {
		"id":"1",
		"nome":"dyweg",
		"enderecoPop":"l3aua",
		"ip":"zsjhsj",
		"tipo":"a50xni",
		"usuario":"bivjwq",
		"senha":"6q93on",
		"createdAt":"892b1",
		"updatedAt":"bwhbcdo"
	};

			request
			.put('/autenticador_cpe/1')
			.set('Authorization', `JWT ${token}`)
			.send(autenticador_cp)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /autenticador_cpe/{id}', () => {
		it('should delete a autenticador_cpe', done => {
			request
			.delete('/autenticador_cpe/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
