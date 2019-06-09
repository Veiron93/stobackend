const express = require("express");
const servicesController = require("../controllers/servicesController.js");
const servicesRouter = express.Router();

servicesRouter.use("/all", servicesController.getAll);
servicesRouter.use("/add", servicesController.addService);

module.exports = servicesRouter;