'use strict'

var expressLib = require('express');
var bodyParser = require('body-parser');

var express = expressLib();

//cargar rutas

//configurar bodyParser

express.use(bodyParser.urlencoded({extended:false}));
express.use(bodyParser.json());

//configurar cabeceras http

//rutas base

express.get('/estado', function (req, res){
	res.status(200).send({message:'Servicio activo.'})
});

//exportamos el modulo (ahora podemos usar express fuera con un require)

module.exports = express;
