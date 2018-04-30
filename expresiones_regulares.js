//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
//expresiones regulares explicita
var reg1 = RegExp('u');
//expresiones regulares literal
var reg2 =/l/;

var algo = 'Hey Rul !!33';

var arr = algo.match(reg1);
var arr2 =algo.match(reg2);
console.log(arr);
console.log(arr2);
//busca el caracter en el elemento 0 de array
arr3 = algo.match( /^H/ );
console.log(arr3);
//busca el caracter en el ultimo elemento del array
console.log(algo.match(/!$/));
//coje el numero de caracteres empezando por el elemento 0 y recorre tantos comos puntos pongamos
console.log(algo.match(/.../));
//Nos permite encontrar numeros dentro del vector en un rango
console.log(algo.match(/[0-9]/));
//rango de caracteres desde la a la Z mayuscula recorre minus y mayus
console.log(algo.match(/[a-zA-Z]/));
//rango de caracteres desde la a la Z mayuscula indicandole que primero queremos algo espcifico
console.log(algo.match( /^H[a-z]/));
//rango de caracteres desde la a la Z mayuscula indicandole que primero queremos algo espcifico
//console.log(algo.match( /[aeiou].$/ )); pendiente
//Evaluacion de espacios
console.log(algo.match( /\s/));
//obtengo la posicion del primer espacio en el array
console.log(algo.match( /\s/).index);
//abreviar expresiones regulares
//\w = [a-zA-Z0-9]
console.log(algo.match( /\w/));
//\d = [0-9]
console.log(algo.match( /\d/));
//controladores de expresiones regulares
//i = insensible mayus minus
//g = todas apariciones
//m = multilinea
console.log(algo.match( /L/i));
//busca la primera coincidencia de vocal 
console.log(algo.match( /[aeiou]/i));
//busca todas las opariciones del contenido de la lista 
console.log(algo.match( /[aeiou]/g));
//combinacion de controladores todas las coincidencias mayus/minus y todas las apariciones 
console.log(algo.match( /[aeiou]/ig));
var lineas = "Hola caracola !!.\n hola mundo.\nHola Euskadi.\n123456789"
//Multilinea 
console.log(lineas.match( /[a-zA-Z-0-9]/igm));
//or
console.log(lineas.match( /[a-zA-Z]|9/igm));
//or
console.log(lineas.match( /a?/g));
//trocea cada 2 celdas del array
console.log(lineas.match( /\w{2,2}/g));
//extraemos los numeros del string y luego con{1,} de 1 decimal(1) a n el segundo parametro que queda vacio
//{1,}
var text1 = 'La suma total es : 45 + 60 = 106';
console.log(text1);
//\d = cualquier decimal mas comodo que [0-9]
console.log(text1.match( /\d{1,}/g));
//| indica or tendria que devolver los numeros o la palabra suma si lo encuentra
console.log(text1.match( /\d{1,}|suma/g));

