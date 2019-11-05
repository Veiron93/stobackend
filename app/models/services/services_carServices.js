const Sequelize = require('sequelize');
const sequelize = require('../../../db');
const Services = require('../services/services');
const CarServices = require('../carServices/carServices');


const Services_CarServices = sequelize.define("services_car_service", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  note: {
    type: Sequelize.STRING,
  }
});


module.exports = Services_CarServices;

