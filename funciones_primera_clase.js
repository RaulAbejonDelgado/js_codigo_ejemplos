//Estas pruebas las realizo atraves de la consola del depurador del navagador
//podemos comprobrar el acceso a los elementos del objeto
function a(){
	console.log('Funcion a');
}

a();

a.nombre = 'Drohne';
a.direccion = {
	pais:'Spain',
	ciudad:'Bilbao',
	Edificio:{
		piso:'1',
		portal:'9',
		}
	}
