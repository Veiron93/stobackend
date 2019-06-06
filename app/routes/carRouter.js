const express = require("express");
const carController = require("../controllers/carController.js");
const carRouter = express.Router();





carRouter.use("/car/:id", carController.getCar);
 
module.exports = carRouter;