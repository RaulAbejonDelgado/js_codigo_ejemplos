//manegar errores js
//try = intenta hacer este bloque de codigo
try{
	//cualquier numero
	throw 1;
}
//catch opcional()
//en e viene el error que podemos acceder a sus elementos como message
catch(e){
	misErrores(e);
	}
//finally a fuerza si no se usa catch 
finally{
	console.log('finaly');
	}
	
function misErrores(e){
	//peticiones ajax
	//httprequest
	//para registrar el error en una bd por ejemplo
	var ahora = new Date();
	if (e == 1){
		console.log('error registrado:', e , 'a las:', ahora);
		}
	}
