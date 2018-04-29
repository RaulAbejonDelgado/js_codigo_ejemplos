//Es como heredar un objeto al que necesitamos agregarle propiedades o metodos
function Producto(){
	this.nombre = 'Reparacion';
	this.precio = 10;
	this.tipo = 'Servicio';
	}
	
Producto.prototype.imprimirInfo = function(){
	console.log(this.nombre + ' ' + this.precio + ' €');
	}
var producto = new Producto();



console.log(producto);
console.log(producto.imprimirInfo());

//Heredar sobre un tipo primitivo y agregarle un metodo
Number.prototype.esImpar = function(numero){
	if (numero % 2 == 0){
		console.log(this + ' es par');
	}else{
		console.log(this + ' es impar');
		}
	}
	
var x = new Number;
for (x = 0; x < 10; x++) {
	x.esImpar(x)
} 	

