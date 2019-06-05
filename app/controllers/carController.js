const Car = require("../models/car.js");


exports.getCar = function(request, response){

	var id = Number(request.params.id);

	Car.find({id: id}, function(err, car){
		if(err) {
            console.log(err);
            return response.sendStatus(400);
        }

        response.send(car);
	})
};


// exports.getCar = function(request, response){

// 	const idCar = Number(request.params.id);
    
//     response.send(Car.getCar(idCar));

//     const collection = req.app.locals.collection;

//     collection.findOne({id: idCar}, function(err, car){
  
//         if(err) {
//             console.log(err);
//             return response.sendStatus(400);
//         }

//         response.send(car);
//     });

// };