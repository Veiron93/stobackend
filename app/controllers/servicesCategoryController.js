const ServicesCategory = require("../models/services/servicesCategory.js");

exports.getAll = function(request, response){

	ServicesCategory.findAll({raw:true}).then(result=>{
		console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};

exports.addServiceCategory = function(request, response){

	ServicesCategory.create({
		name: "Электрика"
	}).then(result=>{
	    const service = {id: result.id, name: result.name}
  		console.log(service);

  		response.send(service); 

	}).catch(err=>console.log(err));
};