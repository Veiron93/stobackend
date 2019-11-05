const express = require("express");
const carServicesController = require("../controllers/carServicesController.js");
const carServicesRouter = express.Router();

carServicesRouter.use("/all", carServicesController.getAll);
carServicesRouter.use("/add", carServicesController.addCarService);
carServicesRouter.use("/", carServicesController.getCarServices);
 
module.exports = carServicesRouter;