import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: olt', () => {
	const olt = app.datasource.models.olt;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultolt = {
		"nome":"i63yd",
		"ip":"iafry",
		"porta":"00fcx9",
		"usuario":"a5cokh",
		"senha":"bf9bv",
		"communitySnmp":"j3u8hj",
		"versaoSnmp":"9vhlh7",
		"autenticacao":"4bf6km",
		"modeloCircuitId":"wuqr2s",
		"createdAt":"jjp0ra",
		"updatedAt":"hudfj9",
		"federatedIspFabricantesFk":89,
		"federatedIspModeloOltFk":159,
		"enderecosFk":242
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
			olt
			.destroy({ where: {} })
			.then(() => olt.create(defaultolt))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /olt', () => {
		it('should return a list of olt', done => {
			request
			.get('/olt')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultolt.id);
				expect(res.body[0].nome).to.eql(defaultolt.nome);
				expect(res.body[0].ip).to.eql(defaultolt.ip);
				expect(res.body[0].porta).to.eql(defaultolt.porta);
				expect(res.body[0].usuario).to.eql(defaultolt.usuario);
				expect(res.body[0].senha).to.eql(defaultolt.senha);
				expect(res.body[0].communitySnmp).to.eql(defaultolt.communitySnmp);
				expect(res.body[0].versaoSnmp).to.eql(defaultolt.versaoSnmp);
				expect(res.body[0].autenticacao).to.eql(defaultolt.autenticacao);
				expect(res.body[0].modeloCircuitId).to.eql(defaultolt.modeloCircuitId);
				expect(res.body[0].createdAt).to.eql(defaultolt.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultolt.updatedAt);
				expect(res.body[0].federatedIspFabricantesFk).to.eql(defaultolt.federatedIspFabricantesFk);
				expect(res.body[0].federatedIspModeloOltFk).to.eql(defaultolt.federatedIspModeloOltFk);
				expect(res.body[0].enderecosFk).to.eql(defaultolt.enderecosFk);
				done(err);
			});
		});
	});

	describe('GET /olt/{id}', () => {
		it('should return a olt by id', done => {
			request
			.get('/olt/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultolt.id);
				expect(res.body.nome).to.eql(defaultolt.nome);
				expect(res.body.ip).to.eql(defaultolt.ip);
				expect(res.body.porta).to.eql(defaultolt.porta);
				expect(res.body.usuario).to.eql(defaultolt.usuario);
				expect(res.body.senha).to.eql(defaultolt.senha);
				expect(res.body.communitySnmp).to.eql(defaultolt.communitySnmp);
				expect(res.body.versaoSnmp).to.eql(defaultolt.versaoSnmp);
				expect(res.body.autenticacao).to.eql(defaultolt.autenticacao);
				expect(res.body.modeloCircuitId).to.eql(defaultolt.modeloCircuitId);
				expect(res.body.createdAt).to.eql(defaultolt.createdAt);
				expect(res.body.updatedAt).to.eql(defaultolt.updatedAt);
				expect(res.body.federatedIspFabricantesFk).to.eql(defaultolt.federatedIspFabricantesFk);
				expect(res.body.federatedIspModeloOltFk).to.eql(defaultolt.federatedIspModeloOltFk);
				expect(res.body.enderecosFk).to.eql(defaultolt.enderecosFk);
				done(err);
			});
		});
	});

	describe('POST /olt', () => {
		it('should post a olt', done => {
			const ol = {
		"nome":"9cqnmt",
		"ip":"3ekikv",
		"porta":"mm3mbs",
		"usuario":"858trv",
		"senha":"lcaohq",
		"communitySnmp":"ku8y4a",
		"versaoSnmp":"guzvhl",
		"autenticacao":"n7e4p",
		"modeloCircuitId":"gbhwc",
		"createdAt":"4vg",
		"updatedAt":"gt6e3x",
		"federatedIspFabricantesFk":267,
		"federatedIspModeloOltFk":416,
		"enderecosFk":808
	};

			request
			.post('/olt')
			.set('Authorization', `JWT ${token}`)
			.send(ol)
			.end((err, res) => {
				expect(res.body.id).to.eql(olt.id);
				expect(res.body.nome).to.eql(olt.nome);
				expect(res.body.ip).to.eql(olt.ip);
				expect(res.body.porta).to.eql(olt.porta);
				expect(res.body.usuario).to.eql(olt.usuario);
				expect(res.body.senha).to.eql(olt.senha);
				expect(res.body.communitySnmp).to.eql(olt.communitySnmp);
				expect(res.body.versaoSnmp).to.eql(olt.versaoSnmp);
				expect(res.body.autenticacao).to.eql(olt.autenticacao);
				expect(res.body.modeloCircuitId).to.eql(olt.modeloCircuitId);
				expect(res.body.createdAt).to.eql(olt.createdAt);
				expect(res.body.updatedAt).to.eql(olt.updatedAt);
				expect(res.body.federatedIspFabricantesFk).to.eql(olt.federatedIspFabricantesFk);
				expect(res.body.federatedIspModeloOltFk).to.eql(olt.federatedIspModeloOltFk);
				expect(res.body.enderecosFk).to.eql(olt.enderecosFk);
				done(err);
			});
		});
	});

	describe('PUT /olt/{id}', () => {
		it('should update a olt', done => {
			const ol = {
		"id":"1",
		"nome":"ujh1m",
		"ip":"v9s34c",
		"porta":"oxbty",
		"usuario":"epyupf",
		"senha":"vvargp",
		"communitySnmp":"alb6jys",
		"versaoSnmp":"37m17",
		"autenticacao":"z9pskn",
		"modeloCircuitId":"5i8ncq",
		"createdAt":"hl934n",
		"updatedAt":"wagd3i",
		"federatedIspFabricantesFk":101,
		"federatedIspModeloOltFk":772,
		"enderecosFk":386
	};

			request
			.put('/olt/1')
			.set('Authorization', `JWT ${token}`)
			.send(ol)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /olt/{id}', () => {
		it('should delete a olt', done => {
			request
			.delete('/olt/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
