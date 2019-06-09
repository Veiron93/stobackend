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

const sequelize = new Sequelize('postgres://rhhilcnu:6O5RPktOqOJ4oEChj3H1vTVQdGFyjKkY@satao.db.elephantsql.com:5432/rhhilcnu');

module.exports = sequelize;