const express = require('express');
const app = express();
const jsonParser = express.json();

const cors = require('cors');
app.use(cors());

const sequelize = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const carServicesRouter = require("./app/routes/carServicesRouter.js");
const servicesRouter = require("./app/routes/servicesRouter.js");
const citiesRouter = require("./app/routes/citiesRouter.js");

app.use("/car-services", carServicesRouter);
app.use("/services", servicesRouter);
app.use("/cities", citiesRouter);



sequelize
	.authenticate()
	.then(() => {
		console.log('Успешное подключение к БД');

		app.listen(4000, function(){
		    console.log("Сервер запущен");
		});
	})

	.catch(err => {
		console.error('Ошибка подключения к БД:', err);
	});

// sequelize.sync().then(result=>{
//   console.log(result);
// })
// .catch(err=> console.log(err));

