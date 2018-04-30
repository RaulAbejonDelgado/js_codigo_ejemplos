//objeto math
var PI = Math.PI;
var E = Math.E;

console.log( PI);
console.log (E);

var num = 10.111111;
console.log (num);
//redonde en base a las normativas de redondeo
console.log( Math.round( num));
//para 2 decimales multiplicamos * 100 
console.log( Math.round( num*100));
//decimales para 2 multiplicamos * 100 y luego dividimos para que los ponga en decimales
console.log( Math.round( num*100)/100);
//3 decimales agreagamos un 0 mas
console.log( Math.round( num*1000));
//3 decimales agreagamos un 0 mas y dividimos agregando un 0 mas
console.log( Math.round( num*1000)/1000);
//Y asi sucesivamente dependiendo la necesidad
//recive un parametro y devuelve el numero entero sin apreciar normativas de redondeo
console.log ( Math.floor( num));
//propiedad random devuelve un numero aleatorio
var randnum = Math.random();
console.log(randnum );
//devulve un numero aleatorio entre 2 numeros que le pasamos como argumento/parametro
function randomEntre(min,max){
	return Math.floor( Math.random() * (max-min +1) + min);
	}
console.log(randomEntre(1,10) );
//raiz cuadrada
console.log(Math.sqrt(16));
//Exponentes el primer parametro sera el valor a tratar el segundo
//parametro indica el nº de veces que sera multiplicado 
console.log(Math.pow(5,2))
