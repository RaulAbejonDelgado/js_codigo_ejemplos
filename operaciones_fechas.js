//Operaciones con fechas
//Los meses de las fechas estan en base 0

var fecha = new Date(2018,9,20);
console.log( fecha );

//Sumar 5 dias a la fecha objetivo, mala practica ya que somos nosotros quien hardcodeando le damos el dia + dias 5 respecto al valor de fecha
fecha.setDate(25);
console.log( fecha );

//Añadimos un prototipo (heredamos y le añadimos el nuevo metodo. sumarDias,sumarMes,sumarYears)
//parametro de entrada : dias = nº de dias 
Date.prototype.sumarDias = function(dias){
	this.setDate( this.getDate() + dias);
	return this
	}
Date.prototype.sumarMes = function(mes){
	this.setMonth( this.getMonth() + mes);
	return this
	}
Date.prototype.sumarYears = function(years){
	this.setFullYear( this.getFullYear() + years);
	return this
	}

var diasASumar = 13;
var mesesASumar = 6;
var yearsASumar = 4;
fecha.sumarDias(diasASumar);
fecha.sumarMes(mesesASumar);
fecha.sumarYears(yearsASumar);
console.log( fecha);
