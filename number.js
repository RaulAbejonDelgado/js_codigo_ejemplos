//obejeto Number

var b = new Number(10);

//funciones de prototipado
//toFixed formatea el numero a una cantidad de numeros decimales
var a = 10.3456657;
console.log ( a.toFixed(2) );
a = a.toFixed(2);
//toString formatea a string
console.log ( a.toString(2) );
console.log ( typeof a.toString(2) );
var a = 110.3456657;
//precision permite establecer el total de caracteres a mostrar en el numero
console.log(a.toPrecision(5));

var c = new Number('20');
console.log(c);
console.log(c.valueOf());

