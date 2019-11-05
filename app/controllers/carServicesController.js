const CarServices = require("../models/carServices/carServices.js");
const Services_CarServices = require("../models/services/services_carServices.js");

exports.addCarService = function(request, response){

	CarServices.create({
		name: "NovaMotors",
		phone: "114478"
	}).then(result=>{
	    const service = {id: result.id, name: result.name, phone: result.phone}
  		//console.log(service);

  		response.send(service); 

	}).catch(err=>console.log(err));
};


exports.getAll = function(request, response){

	CarServices.findAll({raw:true}).then(result=>{
		//console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};


exports.getCarServices = function(request, response){

	const ids = request.body.ids;

	CarServices.findAll({
		attributes: ['id', 'name', 'phone'],
		where: {
			id: ids
		} 

	}).then(result => {

  		response.send(result);

	}).catch(err=>console.log(err));
};

exports.listCarService = function(request, response){

	const ids = request.body.ids;

	CarServices.findAll({
		attributes: ['id', 'name', 'phone'],
		where: {
			id: ids
		},
		include: [
			{
				model: Services,
				attributes: ['id', 'name', 'phone'],
	    	}
	    ],

	}).then(result => {

  		response.send(result);

	}).catch(err=>console.log(err));
};

