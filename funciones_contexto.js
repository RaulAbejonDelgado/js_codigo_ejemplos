//funciones y contexto

function crearFunciones(){
	//creacion de array de funciones
	var vec = [];
	var numero = 1;
	for (var numero = 1; numero <=3; numero ++){
		vec.push((
		function(numero){
			return function(){
				console.log(numero);
				}
			})(numero)
		);
		}
	
	return vec;
}
	
var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();

