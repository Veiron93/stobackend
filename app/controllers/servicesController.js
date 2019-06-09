const Services = require("../models/services/services.js");


exports.getAll = function(request, response){

	Services.findAll({raw:true}).then(result=>{
		console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};

exports.addService = function(request, response){

	Services.create({
		name: "Замена маслянного фильтра"
	}).then(result=>{
	    const service = {id: result.id, name: result.name}
  		console.log(service);

  		response.send(service); 

	}).catch(err=>console.log(err));
};