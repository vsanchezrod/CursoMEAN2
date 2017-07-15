//Modelo Canción
'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema; // Crear un esquema

var songSchema = schema({   //Definición del objeto del usuario (modelado en base de datos del usuario)

	number: String,
	name: String,
	duration: String,
	file: String,
	album: {type: Schema.ObjectId, ref:'Album'} //Guardar una ID de otro objeto que tengamos guardado en la base de datos. Hacemos referencia a donde este guardado ese Objeto
	
});

module.exports = mongoose.model('Song', songSchema);
//Se exporta para que sea accesible desde el resto de la APP