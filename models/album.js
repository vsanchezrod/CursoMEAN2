//Modelo del Album

'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema; // Crear un esquema

var albumSchema = schema({   //Definición del objeto del usuario (modelado en base de datos del usuario)

	title: String,
	description: String,
	year: Number,
	image: String,
	artist: {type: Schema.ObjectId, ref:'Artist'} //Guardar una ID de otro objeto que tengamos guardado en la base de datos. Hacemos referencia a donde este guardado ese Objeto

});

module.exports = mongoose.model('Album', albumSchema);
//Se exporta para que sea accesible desde el resto de la APP