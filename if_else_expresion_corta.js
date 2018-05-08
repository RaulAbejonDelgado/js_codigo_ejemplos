//if else expresiones cortas
//ejemplo normal de if else, lo ideal seria usar un swich para este tipo de condicional
var nota = 10;

if (nota > 60){
	console.log('aprobo');
}else if(nota >= 90){
	console.log('Sobresaliente');
}else{
	if (nota < 50){
		console.log('Supenso');
	}
}

var nota2 = 50;
var nota3 = 20;
//expresion corta si nota2 es mayor a nota3 devuelve nota2(?) si no (:) devuelve nota3
var nota4 = (nota2 > nota3) ? nota2 : nota3 ;
console.log(nota4);
//expresion corta con metodos
var nota4 = (nota2 > nota3) ? function(){
	console.log('nota2 es mayor a nota3');
	return  nota2;
//Aqui hay que agregar (); para invocar a la funcion, si no nos devuelve el fragmento literal de codigo de la condicion que se cumple
}(): function(){
	console.log('nota3 es mayor a nota2');
	return nota3;
//Aqui hay que agregar (); para invocar a la funcion, si no nos devuelve el fragmento literal de codigo de la condicion que se cumple
}() ;
console.log(nota4);

//Si n1 tiene algo cojemos el valor de n1 si no tiene nada pasamos el valor de n2 representado un or en caso de valor no definido.
var n1 = undefined;
var n2 = 35;
var resx = n1 || n2;
console.log(resx);

//En el retorno de funciones que esperan parametros y llegan sin parametros podemos hacer ciertos controles
//en este tipo de expresiones podriamos añadir tantos or como nos interese
function getSome(some){
	var res = some || 'Sin parametros';
	console.log(res);
}

getSome();




