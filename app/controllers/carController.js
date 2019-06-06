const Car = require("../models/car.js");


exports.getCar = function(request, response){

	var id = Number(request.params.id);

	Car.find({id: id}, function(err, car){
		
		if(err) {
            console.log(err);
            return response.sendStatus(400);
        }



        response.send((car.length > 0)? car : "Данной модели нет");
	})
};