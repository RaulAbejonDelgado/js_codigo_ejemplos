//una funcion que puede recoge distintos tipos de parametros/datos

function determinaDato(a){
	if (a === undefined){
		console.log('A es undefined');
		}
	if (typeof a === 'number'){
		console.log('A es number');
		}
	if (typeof a === 'string'){
		console.log('A es string');
		}
	if (typeof a === 'object'){
		console.log('A es es un objeto, pero puede ser cualquier cosa');
		if (a instanceof Number){
			console.log('A es un objeto numerico');
			}
		//habria que hacer un instanceof por cada tipo de objeto para poder tratarlo correctamente
		}
	}
	var t = new Number(2);
	//le pasas un numero primitivo
	determinaDato(1);
	//le pasas un objeto tipo numerico
	determinaDato(t);
