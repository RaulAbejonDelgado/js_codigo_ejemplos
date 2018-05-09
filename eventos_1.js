//eventos =acciones que hacen que se disparen funciones
//Para usar en la vista(html) si lo usamos en js ominitmo el on de la palabra reservada
//relacionados con el raton
//onclick = Click sobre un elemento
//ondblclick = Doble click sobre un elemento
//onmousedown = Se pulsa un botón del ratón sobre un elemento
//onmouseenter = El puntero del ratón entra en el área de un elemento
//onmouseleave = El puntero del ratón sale del área de un elemento
//onmousemove = El puntero del ratón se está moviendo sobre el área de un elemento
//onmouseover = El puntero del ratón se sitúa encima del área de un elemento
//onmouseout = El puntero del ratón sale fuera del área del elemento o fuera de uno de sus
//onmouseup = Un botón del ratón se libera estando sobre un elemento
//contextmenu = Se pulsa el botón derecho del ratón (antes de que aparezca el menú contextual)
//Relacionados con el teclado
//onkeydown El usuario tiene pulsada una tecla (para elementos de formulario y body)
//onkeypress El usuario pulsa una tecla (momento justo en que la pulsa) (para elementos de formulario y body)
//onkeyup El usuario libera una tecla que tenía pulsada (para elementos de formulario y body)
//relacionados con el formulario
//onfocus = Un elemento del formulario toma el foco
//onblur = Un elemento del formulario pierde el foco
//onchange = Un elemento del formulario cambia
//onselect = El usuario selecciona el texto de un elemento input o textarea
//onsubmit = Se pulsa el botón de envío del formulario (antes del envío)
//onreset = Se pulsa el botón reset del formulario

//esta accion se ejecuta desde el boton del index
function evento(){
	console.log('me dispare\n');
};

//Este ultimo trozo de codigo no consigo hacerlo correr aun
function evento2(arg){
	console.log('Ejecutado  desde js');
};

//declaro una variable para  guardar lo que captamos mediante document.getElementById
var objeto = document.getElementById('cajaText');
//le añadimos un evento al objeto desde js mediante addEventListener primer parametro nombre de evento , metodo que ejecutara
objeto.addEventListener("keypress",evento2);
