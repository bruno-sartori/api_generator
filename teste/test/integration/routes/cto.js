import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: cto', () => {
	const cto = app.datasource.models.cto;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultcto = {
		"numero":"adsxfh",
		"latitude":"s32haa",
		"longitude":"ogo09k",
		"sinal":"yqnph",
		"nomeVlan":"z5pgh",
		"idVlan":"ruvolo",
		"createdAt":"qtktal",
		"updatedAt":"ubb94",
		"enderecosFk":968,
		"oltFk":322
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
			cto
			.destroy({ where: {} })
			.then(() => cto.create(defaultcto))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /cto', () => {
		it('should return a list of cto', done => {
			request
			.get('/cto')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultcto.id);
				expect(res.body[0].numero).to.eql(defaultcto.numero);
				expect(res.body[0].latitude).to.eql(defaultcto.latitude);
				expect(res.body[0].longitude).to.eql(defaultcto.longitude);
				expect(res.body[0].sinal).to.eql(defaultcto.sinal);
				expect(res.body[0].nomeVlan).to.eql(defaultcto.nomeVlan);
				expect(res.body[0].idVlan).to.eql(defaultcto.idVlan);
				expect(res.body[0].createdAt).to.eql(defaultcto.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultcto.updatedAt);
				expect(res.body[0].enderecosFk).to.eql(defaultcto.enderecosFk);
				expect(res.body[0].oltFk).to.eql(defaultcto.oltFk);
				done(err);
			});
		});
	});

	describe('GET /cto/{id}', () => {
		it('should return a cto by id', done => {
			request
			.get('/cto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultcto.id);
				expect(res.body.numero).to.eql(defaultcto.numero);
				expect(res.body.latitude).to.eql(defaultcto.latitude);
				expect(res.body.longitude).to.eql(defaultcto.longitude);
				expect(res.body.sinal).to.eql(defaultcto.sinal);
				expect(res.body.nomeVlan).to.eql(defaultcto.nomeVlan);
				expect(res.body.idVlan).to.eql(defaultcto.idVlan);
				expect(res.body.createdAt).to.eql(defaultcto.createdAt);
				expect(res.body.updatedAt).to.eql(defaultcto.updatedAt);
				expect(res.body.enderecosFk).to.eql(defaultcto.enderecosFk);
				expect(res.body.oltFk).to.eql(defaultcto.oltFk);
				done(err);
			});
		});
	});

	describe('POST /cto', () => {
		it('should post a cto', done => {
			const ct = {
		"numero":"98cx9",
		"latitude":"314pel",
		"longitude":"f5j7z",
		"sinal":"dt3ov",
		"nomeVlan":"ynzcb",
		"idVlan":"06ar2",
		"createdAt":"yu9ygn",
		"updatedAt":"15xrpd",
		"enderecosFk":726,
		"oltFk":795
	};

			request
			.post('/cto')
			.set('Authorization', `JWT ${token}`)
			.send(ct)
			.end((err, res) => {
				expect(res.body.id).to.eql(cto.id);
				expect(res.body.numero).to.eql(cto.numero);
				expect(res.body.latitude).to.eql(cto.latitude);
				expect(res.body.longitude).to.eql(cto.longitude);
				expect(res.body.sinal).to.eql(cto.sinal);
				expect(res.body.nomeVlan).to.eql(cto.nomeVlan);
				expect(res.body.idVlan).to.eql(cto.idVlan);
				expect(res.body.createdAt).to.eql(cto.createdAt);
				expect(res.body.updatedAt).to.eql(cto.updatedAt);
				expect(res.body.enderecosFk).to.eql(cto.enderecosFk);
				expect(res.body.oltFk).to.eql(cto.oltFk);
				done(err);
			});
		});
	});

	describe('PUT /cto/{id}', () => {
		it('should update a cto', done => {
			const ct = {
		"id":"1",
		"numero":"7ktbc",
		"latitude":"56yoy",
		"longitude":"ht9i2",
		"sinal":"5im0vj",
		"nomeVlan":"q33xo",
		"idVlan":"5tnec",
		"createdAt":"7ffrbp",
		"updatedAt":"o43t3w",
		"enderecosFk":196,
		"oltFk":621
	};

			request
			.put('/cto/1')
			.set('Authorization', `JWT ${token}`)
			.send(ct)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /cto/{id}', () => {
		it('should delete a cto', done => {
			request
			.delete('/cto/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
