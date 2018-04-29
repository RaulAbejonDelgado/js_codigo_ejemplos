//typeof = tipo de dato

function identifica(param){
	
	if (typeof param == 'function'){
		param();
	}else{
		console.log(typeof param);
	}
}

identifica(5);
identifica('Hola');
identifica(5.5);
identifica({});
identifica(function(){
	console.log( 'funcion ejecutada por ser tipo function')
	});
