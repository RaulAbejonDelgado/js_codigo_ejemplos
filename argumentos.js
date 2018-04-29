//arguments nos permite visualizar los parametros de entrada de un metodo y controlar la cantidad de los mismos 
function miFuncion(a,b,c,d){
	if (arguments.length !== 4){
		console.error('La funcion necesitaa 4 parametros');
		alert('La funcion necesita 4 parametros');
		}
	console.log(arguments);
	}
	
	miFuncion(30,40,50,60);
	//Le doy un parametro menos aproposito
	miFuncion(30,40,50);
