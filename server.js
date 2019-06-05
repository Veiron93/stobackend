const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const carRouter = require("./app/routes/carRouter.js");

app.use(bodyParser.urlencoded({ extended: false }));

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


app.listen(4000, () => {
  console.log('Сервер запущен');
});









