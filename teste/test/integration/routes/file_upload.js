import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

describe('Routes: file_upload', () => {
	const file_upload = app.datasource.models.file_upload;
	const Users = app.datasource.models.Users;
	const jwtSecret = app.config.jwtSecret;
	const defaultfile_upload = {
		"name":"wdkjpl",
		"extension":"7caxxr",
		"path":"kcqbn",
		"size":"x7yw7o",
		"description":"b41ge9",
		"operadoresFk":685,
		"folderPath":"y9yal3",
		"createdAt":"dp32h",
		"updatedAt":"71sj"
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
			file_upload
			.destroy({ where: {} })
			.then(() => file_upload.create(defaultfile_upload))
			.then(() => {
				token = jwt.encode({ id: user.id }, jwtSecret);
				done();
			});
		});
	});

	describe('GET /file_upload', () => {
		it('should return a list of file_upload', done => {
			request
			.get('/file_upload')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body[0].id).to.eql(defaultfile_upload.id);
				expect(res.body[0].name).to.eql(defaultfile_upload.name);
				expect(res.body[0].extension).to.eql(defaultfile_upload.extension);
				expect(res.body[0].path).to.eql(defaultfile_upload.path);
				expect(res.body[0].size).to.eql(defaultfile_upload.size);
				expect(res.body[0].description).to.eql(defaultfile_upload.description);
				expect(res.body[0].operadoresFk).to.eql(defaultfile_upload.operadoresFk);
				expect(res.body[0].folderPath).to.eql(defaultfile_upload.folderPath);
				expect(res.body[0].createdAt).to.eql(defaultfile_upload.createdAt);
				expect(res.body[0].updatedAt).to.eql(defaultfile_upload.updatedAt);
				done(err);
			});
		});
	});

	describe('GET /file_upload/{id}', () => {
		it('should return a file_upload by id', done => {
			request
			.get('/file_upload/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
				expect(res.body.id).to.eql(defaultfile_upload.id);
				expect(res.body.name).to.eql(defaultfile_upload.name);
				expect(res.body.extension).to.eql(defaultfile_upload.extension);
				expect(res.body.path).to.eql(defaultfile_upload.path);
				expect(res.body.size).to.eql(defaultfile_upload.size);
				expect(res.body.description).to.eql(defaultfile_upload.description);
				expect(res.body.operadoresFk).to.eql(defaultfile_upload.operadoresFk);
				expect(res.body.folderPath).to.eql(defaultfile_upload.folderPath);
				expect(res.body.createdAt).to.eql(defaultfile_upload.createdAt);
				expect(res.body.updatedAt).to.eql(defaultfile_upload.updatedAt);
				done(err);
			});
		});
	});

	describe('POST /file_upload', () => {
		it('should post a file_upload', done => {
			const file_uploa = {
		"name":"ef2w1",
		"extension":"qd5f7l",
		"path":"xt5sd",
		"size":"11tcxe",
		"description":"du9ct",
		"operadoresFk":755,
		"folderPath":"aamauh",
		"createdAt":"54alae",
		"updatedAt":"abs0x"
	};

			request
			.post('/file_upload')
			.set('Authorization', `JWT ${token}`)
			.send(file_uploa)
			.end((err, res) => {
				expect(res.body.id).to.eql(file_upload.id);
				expect(res.body.name).to.eql(file_upload.name);
				expect(res.body.extension).to.eql(file_upload.extension);
				expect(res.body.path).to.eql(file_upload.path);
				expect(res.body.size).to.eql(file_upload.size);
				expect(res.body.description).to.eql(file_upload.description);
				expect(res.body.operadoresFk).to.eql(file_upload.operadoresFk);
				expect(res.body.folderPath).to.eql(file_upload.folderPath);
				expect(res.body.createdAt).to.eql(file_upload.createdAt);
				expect(res.body.updatedAt).to.eql(file_upload.updatedAt);
				done(err);
			});
		});
	});

	describe('PUT /file_upload/{id}', () => {
		it('should update a file_upload', done => {
			const file_uploa = {
		"id":"1",
		"name":"3w66fd",
		"extension":"1724el",
		"path":"cycqin",
		"size":"0v32m",
		"description":"15hlig",
		"operadoresFk":868,
		"folderPath":"okuak9",
		"createdAt":"jptaq5",
		"updatedAt":"ivv02q"
	};

			request
			.put('/file_upload/1')
			.set('Authorization', `JWT ${token}`)
			.send(file_uploa)
			.end((err, res) => {
			expect(res.body).to.eql([1]);
			done(err);
			});
		});
	});

	describe('DELETE /file_upload/{id}', () => {
		it('should delete a file_upload', done => {
			request
			.delete('/file_upload/1')
			.set('Authorization', `JWT ${token}`)
			.end((err, res) => {
			expect(res.statusCode).to.eql(HttpStatus.NO_CONTENT);
			done(err);
			});
		});
	});
});
