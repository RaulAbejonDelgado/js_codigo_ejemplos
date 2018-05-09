//bloquear boton derecho
document.onmousedown = function(arg){
	//sabemos que el valor que pasa cuando se pulsa el click derecho es el 2 cuando no se pulse ese boton dejamos
	//ejecutar sin problema
	if (arg.button === 2){
		alert('No tiene permiso para ejecutar esta accion');
	}else{
		console.log('click izquierdo sin problema');
	}
}


//obtener lo que selecione el cliente

document.onmouseup = function(){
	var texto = window.getSelection().toString();
	console.log(texto);

}