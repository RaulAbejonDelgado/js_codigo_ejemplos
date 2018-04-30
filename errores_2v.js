//manegar errores js
//try = intenta hacer este bloque de codigo
try{
	//mandamos un obejto 
	throw {
		nombreError:'Error tipo 1',
		accion:"llammar al 091",
		codeerror:1
	}
}
//catch opcional()
//en e viene el error que podemos acceder a sus elementos como message
catch(e){
	console.log(e);
	console.log(e.nombreError);
	console.log(e.accion);
	console.log(e.codeerror);
	}
//finally a fuerza si no se usa catch 
finally{
	console.log('finaly');
	}
