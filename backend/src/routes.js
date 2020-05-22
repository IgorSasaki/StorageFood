const express = require('express');

const FoodControllers = require('./Controllers/FoodControllers');


const routes = express.Router();

routes.post('alimentos', FoodControllers.create);


module.exports = routes;