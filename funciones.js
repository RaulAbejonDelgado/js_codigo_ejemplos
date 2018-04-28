function obtenerAleatorio(){
	return Math.random();
}



function obtenerNombre(){
	return 'Juan';
}

function esMayor05(){
	if (obtenerAleatorio() > 0.5){
		return true;
	}else{
		return false;
	}
	
}

if (esMayor05()){
	console.log('Es mayor a 0.5');
	}else{
		console.log('Es menor a 0.5');
		}
function crearPersona(nombre,apellido){
	//~ var obj = {};
		//~ return obj;
	return {
		nombre:nombre,
		apellido:apellido,
		}
	}

var persona = crearPersona('Drohne','Enhord');
console.log (persona.nombre +' '+ persona.apellido);

function crearFuncion(){
	return function(nombre){
		console.log('Me creo ' + nombre);
		return function(){
			console.log('Funcion que es devuelta al ejecutar la primera')
			}
		}
	}
	
var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion( persona.nombre);
segundaFuncion();
