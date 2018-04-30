//un string en js no es un array de caracteres como en otros lenguajes

var a = new String('Raul Abejon');

console.log(a[0]);
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i =  a.indexOf('l');
console.log('(usamos indexOf)La letra esta en la posicion :' , i );
//nos muestra la posicion de la ultima coincidencia
i = a.lastIndexOf('a');
console.log('(usamos lastIndexOf )La letra esta en la posicion :' , i );
// con substr 1ºparametro indidica desde que posicion toma los valores del string
var nombre = a.substr(6);
console.log(nombre);
//con substr 1ºparametro indica desde que posicion toma los valores del*
//string, 2º parametro indica hasta que posicion tomara valores
//En este caso le estamos diciendo que empieze desde la primera posicion,
// hasta a.indexOf(' ') que dice que cojera posiciones hasta que encuentra un espacio
var nombre = a.substr(0, a.indexOf(' ') );
console.log(nombre);
//split permite 
var test = a.split();
console.log(test);
console.log(test.length);

//Ya no se usan ya que normalmente los frameworks se vienen a encargar
//de este tipo de efectos(Angular etc)
document.write('Hola Mundo \n');
var texto = new String('Hey motherfucker!! ');
document.write(texto.italics());
document.write(texto.blink());
document.write(texto.bold());
document.write(texto.strike());
