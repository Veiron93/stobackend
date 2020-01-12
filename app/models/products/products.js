const Sequelize = require('sequelize');
const sequelize = require('../../../db');

const Products = sequelize.define("product", {
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
	description: {
		type: Sequelize.STRING,
		allowNull: false
	},
});

module.exports = Products;



