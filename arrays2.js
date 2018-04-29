//arrays 2
var vec = [
	true,
	false,
	true,
	//objeto anonimo dentro del array
	{
		nombre:'Raul',
		apellido:'Abejon'
		},
	//funcion anonima dentro del array
	function(){
		console.log('Funcion anonima desde un vector');
		},
	//funcion anonima que se le pasa un parametro
	function( persona){
		console.log(persona.nombre + ' ' + persona.apellido)
		},
	//meto un array
	[
		"Teclado",
		"Raton",
		"Monitor",
		"Pendrive",
		"Webcam",
		//otro array anidado
		[
			'Perifericos',
			'Componentes'
		],
	],
]

console.log(vec);
//accedemos al objeto que esta en la posicion 3 del array y accedemos a su elemento 'nombre'
console.log(vec[3].nombre);
//accedemos a su funcion anonima que esta en la posicion del array 4 y no lo mostramos con un console.log ya que es lo que hace la funcion anonima
vec[4]();
//accedemos a la funcion anonima de la posicion 5 pasandole como parametro el objeto anonimo para que con el console.log muestra el valor
vec[5](vec[3]);
//accedemos al contenido de un array dentro de un array
console.log(vec[6][2]);
//accedemos al contenido de un array dentro de un array con segundo nivel
console.log(vec[6][5][1]);
