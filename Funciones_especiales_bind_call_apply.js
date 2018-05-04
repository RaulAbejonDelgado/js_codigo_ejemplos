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

var monoBici = {
	color:'rojo',
	marca:'toyota'
}

console.log( bicicleta.imprimirBici());


var logBicicleta = function(arg1,arg2){
	console.log('Bici: ', this.imprimirBici());
	console.log('Argumentos: ',  arg1,arg2);
	console.log('=============================');

}
//con el logBicicleta.bind ( bicicleta) estoy diciendole que en vez de usar this.imprimirBici() 
//use  bicicleta.imprimirBici())
//el bind sabe que ha de sustituir el this por el parametro que se le pase
var logModeloBicicleta = logBicicleta.bind ( bicicleta);
logModeloBicicleta();
logModeloBicicleta('xxx','xda');

//call primer parametro a lo que apunta el this, depues irian los posibles parametros opcionales
logModeloBicicleta.call(bicicleta, 'asd','qwerty');

//Diferencia entre call y apply  el objeto que sustituye a this mas una lista con los parametros opcionales
logModeloBicicleta.apply(bicicleta, ['qwerty','asd']);
//funciones prestadas
var feed =bicicleta.imprimirBici.call(monoBici);
console.log(feed);
