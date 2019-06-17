const express = require("express");
const citiesController = require("../controllers/citiesController.js");
const citiesRouter = express.Router();

citiesRouter.use("/all", citiesController.getAll);
citiesRouter.use("/add", citiesController.addCity);



module.exports = citiesRouter;