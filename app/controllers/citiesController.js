const Cities = require("../models/cities/cities.js");

exports.getAll = function(request, response){

	Cities.findAll({raw:true}).then(result=>{
		console.log(result);

		response.send((result.length > 0)? result : "Пусто"); 
	}).catch(err=>console.log(err));
};

exports.addCity = function(request, response){

	Cities.create({
		name: "Корсаков",
		code: "kors"
	}).then(result=>{
	    const city = {id: result.id, name: result.name, code: result.code}
  		console.log(city);

  		response.send(city); 

	}).catch(err=>console.log(err));
};