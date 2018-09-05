import bcrypt from 'bcrypt';

const addUsersTable = async (sequelize, Sequelize) => {
	await sequelize.query('drop table if exists users');

	await sequelize.queryInterface.createTable('users', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE
		}
	});

	const salt = bcrypt.genSaltSync();
	const password = bcrypt.hashSync('test', salt);

	await sequelize.query('insert into users (id, name, email, password, createdAt, updatedAt) values(?, ?, ?, ?, ?, ?)', {
		replacements: [1, 'Test', 'test@test.com', password, '2018-08-04 22:12:10', null]
	});
};

export default addUsersTable;
