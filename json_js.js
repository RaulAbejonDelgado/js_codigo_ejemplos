//Pagina para evaluar json json.parser.online.fr
var objetoJS = {
	nombre:"fernando",
	edad: 30,
	impr: function(){
		console-log(this.nombre  +" "+ this.edad);

	}
};

console.log('objeto literal', objetoJS);
//Convertimos el objeto js a un objeto json, en este caso perdemos la funcion impr 
//al pasarlo a json deberiamos usar un prototipo del objetoJS y meterle la funcion
var res= JSON.stringify(objetoJS);
console.log('================');
console.log('Objeto de javascript a objeto json');
console.log('objeto parseado', res);

//viceversa de json a objeto js aqui ya no tenemos la funcion impr deberiamos usar protatipos
var objetoDsdJson = JSON.parse(res);
console.log('================');
console.log('Objeto de json a objeto javascript');
console.log(objetoDsdJson);
console.log(objetoDsdJson.nombre);
console.log(objetoDsdJson.edad);
