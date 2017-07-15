'use strict'

var expressLib = require('express');
var bodyParser = require('body-parser');

var express = expressLib();

//cargar rutas

var user_routes = require('./routes/userRoute')

//configurar bodyParser

express.use(bodyParser.urlencoded({extended:false}));
express.use(bodyParser.json()); //Convertir los datos a json 

//configurar cabeceras http

//rutas base

express.use('/api', user_routes);


//exportamos el modulo (ahora podemos usar express fuera con un require)

module.exports = express; //Exportamos el modulo y podemos utilizar express en otros archivos que tenga express
