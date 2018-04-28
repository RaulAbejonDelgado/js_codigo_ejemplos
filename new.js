//Palabra reservada new
//Diferencia entre usar new o llamar directametne a la funcion
//new hace un clon del objeto(Como si fuera un constructor)
function Persona(){
	this.nombre = 'Raul';
	this.apellido = 'Abejon';
	this.edad = '35';
	this.imprimirPersona = function(){
		return this.nombre + ' ' + this.apellido + ' ' + this.edad;
		}
	}

var yo = new Persona();

console.log(yo);
console.log(yo.nombre + ' '+ yo.apellido +' ' +yo.edad);
console.log(yo.imprimirPersona());

function Persona2(nombre,apellido,edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.imprimirPersona2 = function(){
		return this.nombre + ' ' + this.apellido + ' ' + this.edad;
		}
	}
var nombre = 'Rul';
var apellido = 'Rul_surname';
var edad = '3.5';
var yo2 = new Persona2(nombre,apellido,edad);

console.log(yo2.imprimirPersona2());
