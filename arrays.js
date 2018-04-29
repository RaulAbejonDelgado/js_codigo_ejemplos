//en js los arrays son una coleccion de objetos ; 
//var vector = new Array();
var vector = [10,9,8,7,6,5,4,3,2,1];
console.log( vector );
//por posicion
console.log(vector[0],vector[1],vector[4],);
//invertimos el orden de la lista
vector.reverse();
console.log(vector);
//invierto nuevamente para devolverla a su estado original
vector.reverse();
console.log(vector);
//map hace un for de cada elemento del array
vector = vector.map( function(elem){
		elem *= elem;
		return elem;
	});
console.log(vector);
//obtenemos su raiz cuadrada para delverlo a su estado original
vector = vector.map(Math.sqrt);
console.log(vector);
//hace un string de todo el array separador por comas por defecto
vector = vector.join("-");
console.log(vector);
//crea una posicion de un vector por elemento que encuentre en base al separador de elementos
vector = vector.split("-");
console.log(vector);
//metemos un elemento nuevo en la ultima posicion
vector.push("10");
console.log(vector);
//metemos un elemento en una posicion
vector.unshift("0");
console.log(vector);
//convierte el vector en un string,efecto similar al join
console.log(vector.toString());
//elimina el ultimo elemento
var elimine = vector.pop();
console.log(vector,elimine);
//splice apunta parametro posicion objetivo segundo parametro cuantos elementos quitamos, si hay un tercer parametro insertariomos
vector.splice(3,1,"88","77","66");
console.log(vector);
//splice si no hay terceros parametros se borraran elementos y el segundo elemento indicara cuantos elemntos seran borrados
//El segundo parametro indica que si es 0 se insertaremos el contenido a la izquierda de la posicion(primer parametro), si es 1 se colocan a la drcha.
vector.splice(3,0,"xx","xx","xx");
console.log(vector);
//slice no confundir con splice, parecido slice de python desde/hasta sin ser incluido el ultimo
vector = vector.slice(0,2)
console.log(vector);


