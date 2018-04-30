//manegar errores js
//try = intenta hacer este bloque de codigo
try{
	//mandamos una funcion anonima
	throw function(){
		console.log('Funcion desde un throw');
	}
}
//catch opcional()
//en e viene el error que podemos acceder a sus elementos como message
catch(e){
	//ejecutamos ya que sabemos que es una funcion lo que entra
	e();
	console.log('Desde el catch');
	}
//finally a fuerza si no se usa catch 
finally{
	console.log('finaly');
	}
