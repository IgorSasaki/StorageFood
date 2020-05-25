const express = require('express');
const routes = express.Router();

const FoodControllers = require('./Controllers/FoodControllers');

routes.post("/createFood", FoodControllers.create);

module.exports = routes;