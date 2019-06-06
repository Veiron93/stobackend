const express = require('express');
const app = express();
const jsonParser = express.json();

const cors = require('cors');
app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const carRouter = require("./app/routes/carRouter.js");

app.use("/cars", carRouter);





/*
app.get('/', function(rew, res){
	res.send('Hello World')
});

app.get('/car/:id', function(req, res){

	var car = cars.find(function(car){
		return car.id === Number(req.params.id)
	})
	res.send(car);
});
*/



// car.save(function(err){
//     mongoose.disconnect(); 
      
//     if(err) return console.log(err);
//     console.log("Сохранен объект", car);
// });



// app.get("/api/cars/:id", function(req, res){

// 	const id = req.params.id;
        
//     Car.find({id: id}, function(err, cars){
 
//         if(err) return console.log(err);
//         res.send(cars)
//     });
// });




// app.delete("/api/cars/:id", function(req, res){
         
//     const id = req.params.id;

//     Car.remove({id: id}, function(err, car){
                
//         if(err) return console.log(err);
//         res.send(car);
//     });
// });


// подключение
// mongoose.connect("mongodb://localhost:27017/sto", { useNewUrlParser: true }, function(err){
	
// 	if(err) return console.log(err);



//     app.listen(4000, function(){
//         console.log("Сервер ожидает подключения...");
//     });
// });


var mongoDB = 'mongodb+srv://Veiron93:11111@cluster0-rom1m.mongodb.net/sto?retryWrites=true&w=majority';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(4000, function(){
    console.log("Сервер ожидает подключения...");
});








