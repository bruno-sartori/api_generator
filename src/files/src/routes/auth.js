import HttpStatus from 'http-status';
import jwt from 'jwt-simple';

export default app => {
	const config = app.config;
	const Users = app.datasource.models.Users;

	app.post('/token', (req, res) => {
		if (req.body.email && req.body.password) {
			const email = req.body.email;
			const password = req.body.password;
      console.log(Users); // eslint-disable-line
			Users.findOne({ where: { email } })
			.then(user => {
        console.log(user.password); // eslint-disable-line
				if (Users.isPassword(user.password, password)) {
					const payload = { id: user.id };
					res.json({
						token: jwt.encode(payload, config.jwtSecret),
					});
				} else {
					res.sendStatus(HttpStatus.UNAUTHORIZED);
				}
			})
			.catch(() => res.sendStatus(HttpStatus.UNAUTHORIZED));
		} else {
			res.sendStatus(HttpStatus.UNAUTHORIZED);
		}
	});
};
