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
//metodo que retornara el valor nombre de la cookie
function getCookie(nombre){
	//entra la clave de la cookie
	//Devuelve el valor de la cookie
	var cookies = document.cookie;
	var cookieVec = cookies.split('; ');
	console.log (cookieVec);
	for (var i = 0; i < cookieVec.length;i++){
		//valor de cookieVec = ["correo=test@gmail.com["0], "pais=Espa%F1a"[1], "nombre=Rul[2]"] 1 array 3 elementos
		//creamos un nuevo array con la cantidad de elementos que salgan de la separacion del split 
		var parArr = cookieVec[i].split("=");
		cookieVec[i] = parArr;
		//salida al final del bucle cookieVec = (3) [Array(2), Array(2), Array(2)] 1 array con 3 arrays anidades de 2 elementos cada uno clave / valor
		//en cada vuelta del ciclo preguntamos si la posicion 0 que es donde colocamos la clave es igual al parametro de entrada 'nombre' que se hardcodea
		if (parArr[0] === nombre){
			return unescape(parArr[1]);

		}
	}
	return undefined;
}

CrearCookie('nombre','Rul');
CrearCookie('correo','test@gmail.com');
CrearCookie('pais','España');
var feed =getCookie('nombre');
console.log(feed);
var feed =getCookie('correo');
console.log(feed);
var feed =getCookie('pais');
console.log(feed);
