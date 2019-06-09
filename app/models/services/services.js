const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const Services = sequelize.define("service", {
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
});

module.exports = Services;





