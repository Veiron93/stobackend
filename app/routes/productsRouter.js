const express = require("express");
const productsController = require("../controllers/productsController.js");
const productsRouter = express.Router();

productsRouter.use("/all", productsController.getAll);
// carServicesRouter.use("/add", carServicesController.addCarService);
// carServicesRouter.use("/", carServicesController.getCarServices);
 
module.exports = productsRouter;