'use strict'

var bcrypt = require('bcrypt-nodejs');
var userModel = require('../models/user');




function pruebas(request, response){ // Request: petición Response: Respuesta del servicio
	response.status(200).send({
		message: 'Probando una acción del controlador de usuarios del API REST con Node y Mongo'
	});
}

//Crear un nuevo metodo para guardar usuarios

function saveUser(request, response){
	//Importar el modelo var user (arriba)
	var user = new userModel();

	var params = request.body;

	console.log(params);

	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.role = 'ROLE_USER';
	user.image = 'null';

	//Encriptar la contraseña

	if(params.password){
		//Encriptar contraseña y guardar datos
		bcrypt.hash(params.password, null, null, function (error, hash) {
			user.password = hash;
			if(user.name != null && user.surname != null && user.email != null){
				user.email = user.email.toLowerCase();
				//Guarda el usuario en la base de datos (Si nada es nulo entonces guarda usuario)
				user.save((error, userStored) => {
					if(error){
						response.status(500).send({message:'Error al guardar el usuario'});
					} 
					else{
						if(!userStored){
							response.status(500).send({message: 'No se ha registrado el usuario'});
						}
						else{
							response.status(200).send({user: userStored});
						}
					}
				});
			}
			else{
				//Si faltan datos...
				response.status(400).send({message:'Rellena todos los datos'});

			}

		})
	}
	else{
		response.status(400).send({message:'Introduce la contraseña'});
	}

}

// Ver los datos que nos llegan por POST y comprobar usuarios y contraseñas

function loginUser(request, response){
	var params = request.body;

	var email = params.email;
	var password = params.password;

	if (email == null){
		response.status(400).send({message: 'Introduzca el email'});
	}
	else{

		userModel.findOne({email: email.toLowerCase()}, (error, userModel)=> {
			if (error){
				response.status(500).send({message: 'Error interno'});
			}
			else{
				if(!userModel){
					response.status(404).send({message: 'El usuario no existe'});
				}
				else{
					//Comprobar la contraseña
					bcrypt.compare(password, userModel.password, function(error, check){
						if(check){
							//Devolver los datos del usuario logueado
							if(params.gethash){
								//JWT generar un token para decodificar, y controlamos si el usuario esta identificado o no
							}
							else{
								response.status(200).send({user: userModel});
							}
						}
						else{
							response.status(400).send({message: 'Password incorrecto'});
						}
					});
				}
			}
		});
	}
}


module.exports = { //Para exportar todos los metodos que estemos usando y poderlos usar fuera
	pruebas,
	saveUser,
	loginUser
};