//Modelo del Artista

'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema; // Crear un esquema

var userSchema = schema({   //Definición del objeto del usuario (modelado en base de datos del usuario)

	name: String,
	surmane: String,
	email: String,
	password: String,
	role: String,
	image: String

});

module.exports = mongoose.model('user', userSchema);
//Se exporta para que sea accesible desde el resto de la APP