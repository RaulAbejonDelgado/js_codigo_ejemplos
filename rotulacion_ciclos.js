//rotulacion de ciclos
for_principal:
for (var  i = 1; i <= 5; i++){
	console.log('i',i);
	for (var j = 1; j <= 5; j++){
		console.log('j',j);
		//Si desde el for aninado queremos saltar de ciclo en el for padre no nos serviria el continue ya que este
		//pasaria al siguiente ciclo del propio for anidado si usamos un break nos salimos del todo el bloque
		//para eso podriamos usar la rotulacion, si dentro del for anidado se cumple una determinada condicion o lo que nos interese
		//podemos llamar a la rotulacion para decidir a que bucle deberia pasar cuando nos interese
		//de esta manera ya no va a iterar sobre todos los elementos de j por cada elemento de i
		//si no que solo iteraria sobre el primer elemento de j entra en continue for_principal a ejecutar el siguiente ciclo
		//de esta manera podriamos darle un nombre a cada bucle e invocarlos cuando mas nos interese
		continue for_principal;
	}
};


