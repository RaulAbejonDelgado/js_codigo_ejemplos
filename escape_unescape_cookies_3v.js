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
	var cookies = document.cookie;
	nombre = nombre ;
	var cookieVec = cookies.split('; ');
	console.log (cookieVec);
	for (var i = 0; i < cookieVec.length;i++){
		console.log (cookieVec[i],nombre,i);
		
		exp = /[nombre]/;
		res = cookieVec[i].match(exp)
		console.log ('El resultado de res es :', res+' ',exp);
		if (res){
			var fix_data = cookieVec[i];
			fix_data = fix_data.replace(nombre+'=','');
			return fix_data;
		}

	}

	return undefined;
}

CrearCookie('nombre','Rul');
CrearCookie('correo','test@gmail.com');
CrearCookie('pais','España');
var feed =getCookie('correo');
console.log(feed);
