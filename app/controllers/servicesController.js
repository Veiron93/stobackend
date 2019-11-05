const Services = require("../models/services/services.js");
const Services_CarServices = require("../models/services/services_carServices.js");
const CarServices = require("../models/carServices/carServices.js");
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

Services.belongsToMany(CarServices, {through: Services_CarServices});
CarServices.belongsToMany(Services, {through: Services_CarServices});

exports.getAll = function(request, response){

	Services.findAll({raw:true}).then(result=>{
		//console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};

exports.addService = function(request, response){

	Services.create({
		name: "Замена тормозных дисков"
	}).then(result=>{
	    const service = {id: result.id, name: result.name}
  		//console.log(service);

  		response.send(service); 

	}).catch(err=>console.log(err));
};

exports.topService = function(request, response){

	Services.findAll({
		attributes : ['id', 'name', 'countView'],
		where: {
			countView: {
				[Op.gt]: 0
			}
		},
		order: [
			['countView', 'DESC'],
		],
		limit: 15,
		include: [
			{
				model: CarServices,
				attributes: ['id', 'name', 'phone'],
	    	}
	    ],
		
	}).then(result=>{

		response.send(result);

	}).catch(err=>console.log(err));

};