const config = require('./config');
const Sequelize = require('sequelize');

// const sequelize = new Sequelize(
// 	config.db.dbname, 
// 	config.db.username, 
// 	config.db.password, {
// 		host: config.db.host,
// 		dialect: config.db.dialect
// 	}
// );

const sequelize = new Sequelize('postgres://jqyqfeah:i3yvYIJK2EZl60MLvcbVjCz0-egoZSSN@rajje.db.elephantsql.com:5432/jqyqfeah');

module.exports = sequelize;