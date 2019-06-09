const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const CarServices = sequelize.define("car_service", {
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
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
});

module.exports = CarServices;



