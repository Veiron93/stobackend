const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const ServicesCategory = sequelize.define("service_categorie", {
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

module.exports = ServicesCategory;





