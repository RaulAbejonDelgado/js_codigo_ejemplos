//ciclo for

for (var i = 0 ; i < 10 ; i++){
	
	console.log(i)  ;
};

//ciclo for in para iterar sobre claves/valores de un objeto
var ObjetoJS2 = function (){
	this.nombre="fernando";
	this.apellido="castañero";
	this.edad= 30;
};

var Persona = new ObjetoJS2();

//iteracion sobre un objeto y sacando su clave/valor 
for (indice in Persona){
	console.log('clave:-> '+ indice + ', valor:-> '+ Persona[indice]);
};
//Agregamos con prototype una nueva propiedad al ObjetoJS2
ObjetoJS2.prototype.pais = "Spain";
//veremos como printea la nueva propierdad pais con protype
console.log("============")
for (indice in Persona){
	console.log('clave:-> '+ indice + ', valor:-> '+ Persona[indice]);
};
//para invocar solo las propiedades del objeto super saltandose posibles añadidos con prototype
console.log("============")
//hasOwnProperty nos devuelve un true si la propiedad corresponde a la declaracion original del objeto
//pudiendo descartar los elementos que se hayan agrego con prototype
for (indice in Persona){
	if (Persona.hasOwnProperty(indice)){
		console.log('clave:-> '+ indice + ', valor:-> '+ Persona[indice]);
	}else{
		continue;
	}
};