const Car = require("../models/car.js");

exports.getCars = function(request, response){
    response.send(Car.getAll());
};

exports.getCar = function(request, response){

	const idCar = Number(request.params.id);
    
    response.send(Car.getCar(idCar));
};