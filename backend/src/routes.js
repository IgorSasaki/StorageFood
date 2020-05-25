const express = require('express');
const routes = express.Router();

const FoodControllers = require('./Controllers/FoodControllers');

routes.post("/createFood", FoodControllers.create);
routes.get("/listFood", FoodControllers.index);
routes.delete("/deleteFood/:id", FoodControllers.delete);

module.exports = routes;