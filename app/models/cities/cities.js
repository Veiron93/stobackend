const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const Cities = sequelize.define("citie", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	code: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Cities;





