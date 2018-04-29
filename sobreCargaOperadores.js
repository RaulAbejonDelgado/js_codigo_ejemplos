//sobre carga de operadores 
//En este caso si no entran parametros usara lo que continuan las tuberias 'un or si es false'
function crearProducto(nombre, precio){
	nombre = nombre || 'Sin nombre';
	precio = precio || 'Sin precio';
	console.log('Producto ', nombre, ' precio', precio);
	
	}
	
function crearProducto100(nombre){
	crearProducto(nombre,'100')
	}
function crearProducto75(precio){
	crearProducto('manguera',precio)
	}
	
	crearProducto();
	crearProducto('Martillo','12 €');
	crearProducto100('Destornillador');
	crearProducto75('32 €');
	
