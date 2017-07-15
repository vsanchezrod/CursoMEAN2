'use strict'

var mongoose = require('mongoose');
var express = require('./expressConfig');
var port = process.env.PORT || 3977; 

mongoose.connect('mongodb://localhost:27017/curso_mean2', (err,res) => {
	if(err){
		throw err;
	}
	else{
		console.log('Se ha conectado correctamente');

		express.listen(port, function(){
			console.log("Servicio levantado en http://localhost:"+ port);
		});
	}
});
	