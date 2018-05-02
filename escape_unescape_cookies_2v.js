//Para esta leccion es necesario la instalacion de node.js y http server npm
//iniciamos el servidor desde cmd (admin,testeandolo en windows) 
//http-server C:\javascript\js_codigo_ejemplos -p 8095(Un puerto que no entrara en conflicto)
//creacion de cookies mediante una funcion

function CrearCookie(nombre,valor){
	//escape = para tratar caracteres conflictivos para nuestras cookies [caracteres conflicitivos = ;*'/]
	//unscape = devuelve el valor contratio al escape
	valor = escape(valor);
	//fecha de expiracion de cookie
	var hoy = new Date();
	//cojemos la fecha de hoy y le decimos que al mes le sume uno , establecionedo asi su caducidad, lo idea seria no hardcodearlo y automatizarlo
	hoy.setMonth( hoy.getMonth() + 1);
	//con el parametro expires= le podemos indicar la fecha de expiracion de la cookie
	return document.cookie = nombre+" = "+ valor + ";expires=" + hoy.toUTCString() +";";

}


var cookies = document.cookie;
var display = CrearCookie('Raul','Drohne');
console.log(act_cookie);
console.log(display);

function borrarCookie(nombre){
	//como hacemos al crear pero añadimos una fecha de expericacion de la cookie
	hoy.setMonth( hoy.getMonth() - 1);
	//con el parametro expires= le podemos indicar la fecha de expiracion de la cookie
	return document.cookie = nombre+" = x;expires=" + hoy.toUTCString() +";";

}


var display = borrarCookie('Raul');
console.log(display);
var display = borrarCookie('nombre');
console.log(display);
var display = borrarCookie('apellido');
console.log(display);
