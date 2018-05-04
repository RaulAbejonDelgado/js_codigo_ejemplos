//funciones call bind apply
//bind = Nos permite sustiruir el this por otro parametro

var bicicleta = {
	color:'negra',
	marca:'bmw',
	imprimirBici:function(){
		var res = this.marca + " - " + this.color;
		return res;

	}

}

console.log( bicicleta.imprimirBici());


var logBicicleta = function(arg1,arg2){
	console.log('carro: ', this.imprimirBici());
	console.log('Argumentos: ',  arg1,arg2);

}
//con el logBicicleta.bind ( bicicleta) estoy diciendole que en vez de usar this.imprimirBici() 
//use  bicicleta.imprimirBici())
//el bind sabe que ha de sustituir el this por el parametro que se le pase
var logModeloBicicleta = logBicicleta.bind ( bicicleta);
logModeloBicicleta();
logModeloBicicleta('xxx','xda');