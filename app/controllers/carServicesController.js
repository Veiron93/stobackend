const CarServices = require("../models/carServices/carServices.js");

exports.addCarService = function(request, response){

	CarServices.create({
		name: "NovaMotors",
		phone: "114478"
	}).then(result=>{
	    const service = {id: result.id, name: result.name, phone: result.phone}
  		console.log(service);

  		response.send(service); 

	}).catch(err=>console.log(err));
};


exports.getAll = function(request, response){

	CarServices.findAll({raw:true}).then(result=>{
		console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};


exports.getCarService = function(request, response){

	let id = request.params.id;

	CarServices.findOne({ where: {id: id} }).then(result => {
	  	const service = {id: result.id, name: result.name, phone: result.phone}
	  	console.log(service);

  		response.send(service);
	}).catch(err=>console.log(err));
};

