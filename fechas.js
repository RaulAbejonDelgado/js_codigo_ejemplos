//Fechas son objetos
var hoy = new Date();
var fechaMilisegundos = new Date(1);
var fFija = new Date(2018,03,04, 22,33,15,1);


console.log ( hoy );
console.log ( fechaMilisegundos );
console.log ( fFija );

console.log(hoy.getFullYear());
//con document.write El salto de linea en js se efectua como en la instruccion html
document.write('<br/>',hoy.getFullYear());
//getYear depreciado NO USAR!!
console.log(hoy.getYear());
//devuelve el dia de una fecha
console.log(hoy.getDate());
//devuelve la hora de una fecha
console.log(hoy.getHours());
//devuelve milsegundos
console.log(hoy.getMilliseconds());
//devuelve mes
console.log(hoy.getMonth());
//devuelve segundos
console.log(hoy.getSeconds());
//devuelve representacion numerica en milisegundos de una fecha
console.log(hoy.getTime());
//vemos lo que tardaria en efectuar el ciclo de 5000 vueltas
var start = new Date();
for (var i = 0; i < 5000; i ++){
	console.log('x');
	}
var end = new Date();
var total = start.getTime() - end.getTime();
//pasamos de milisegundos a segundos
console.log(total/1000, ' Segundos');
