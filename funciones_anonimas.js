//funciones anonimas

(function(){
	var a = 10;

	function cambiarA(){
		a = 20;
		}
	cambiarA();
	console.log( a );
	})();

function ejecutarFuncion(fn){
	fn();
	return true;
	}
	
ejecutarFuncion(function (){
	console.log('Funcion anonima Ejecutada');
	})


