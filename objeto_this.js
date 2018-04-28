//Objetos this y metodos
var persona = {
	nombre : 'Raul',
	primerApellido : 'Abejon',
	segundoApellido: 'Delgado',
	imprimirNombre : function(){
		console.log(this.nombre+ ' '+ this.primerApellido+' '+this.segundoApellido);
	},
	direccion:{
		pais:'Spain',
		provincia:'Bizkaia',
		obtenerPais:function(){
			console.log('La direccion es en '+this.pais+ ' '+ this.provincia)
			}
		}
}

persona.imprimirNombre();
persona.direccion.obtenerPais();

