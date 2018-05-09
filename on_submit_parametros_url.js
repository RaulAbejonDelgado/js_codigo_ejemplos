//On_submit y parametyros url
//con el siguietne metodo podemos controlar los datos de un formulario 
//para hacer multiples validaciones o tratamiento de datos
//En este caso si no estan rellenos todos los campos del formulario salta la alerta
//si estan ambos campos hago un printeo por consola
function validar(){
	var name = document.getElementById('cNombre').value;
	var apellido = document.getElementById('cApellido').value;
	//if (name != '' && apellido != ''){
	if (name && apellido ){
		console.log('Datos correctos');
		return true;
	}else{
		alert('Debe rellenar ambos campos');
		return false;
	}
}

//parametros de url

console.log(window.location);
console.log(window.location.search.split('&'));

//metodo ya testeao para recoger parametros de la url
//function getParamURL(name) {
//  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
//}