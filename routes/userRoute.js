'use strict'

//Cargamos el modulo de express y el userController.js

var express = require('express');
var userController = require('../controllers/userController');

// Cargar dentro de una variable que se llama api el router de express para poder crear rutas para nuestra API REST

var apiRestUser = express.Router();

apiRestUser.get('/probando-controlador', userController.pruebas);
apiRestUser.post('/register', userController.saveUser);
apiRestUser.post('/login', userController.loginUser);

module.exports = apiRestUser;