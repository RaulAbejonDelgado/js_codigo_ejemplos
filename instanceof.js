//instanceof compara si el parametro es del tipo persona, comparando 2 objetos devolviendo true o false

function identifica(param){
	
	console.log (typeof param);
	console.log (param instanceof Person );
}
function Person(){
	this.nombre = 'Raul';
	this.edad = 35;
}

var raul = new Person();
identifica(raul);
