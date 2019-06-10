const express = require("express");
const servicesController = require("../controllers/servicesController.js");
const servicesCategoryController = require("../controllers/servicesCategoryController.js");
const servicesRouter = express.Router();

servicesRouter.use("/categories/add", servicesCategoryController.addServiceCategory);
servicesRouter.use("/categories", servicesCategoryController.getAll);

servicesRouter.use("/all", servicesController.getAll);
servicesRouter.use("/add", servicesController.addService);



module.exports = servicesRouter;