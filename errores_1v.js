//manegar errores js
//intenta hacer este bloque de codigo
try{
	var a = 100;
	//throw = fuerza error actuara el catch
	throw new Error('XDD');
	//si esta el throw por encima las que esten por debajo no se ejecutran
	console.log('El valor es ', a);
}
//catch opcional()
//en e viene el error
catch(e){
	console.log(e);
	}
//finally a fuerza si no se usa catch 
finally{
	console.log('finaly');
	}
