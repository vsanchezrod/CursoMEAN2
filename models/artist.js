//Modelo del Artista

'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema; // Crear un esquema

var artistSchema = schema({   //Definición del objeto del usuario (modelado en base de datos del usuario)

	name: String,
	description: String,
	image: String

});

module.exports = mongoose.model('Artist', artistSchema);
//Se exporta para que sea accesible desde el resto de la APP