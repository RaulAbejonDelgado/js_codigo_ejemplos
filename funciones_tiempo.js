//funciones tiempo
//cuando pase determinado tiempo
//que se repita durante un determinado tiempo

//queremos ejecutar un codigo cuando pasa determinados tiempo, solo se ejecuta una vez, se ejecutara cuando pase el valor que le pasemos
setTimeout(function(){
	console.log('Paso un segundo');
	//El valor que se marque aqui 
	},1000);

//queremos ejecutar codigo en el intervalo establecido
var segundos = 0;
var intervalo = setInterval(function(){
	segundos ++;
	console.log('Paso un segundo');
	//Con esto evitamos que se prolongue su ejecucion en el navegador limitandolo a 3 segundos 
	if (segundos === 3){
		clearInterval(intervalo);
	}
	//intervalo en milisegundos
	},1000);

//Tambien se puede colocar estas funciones dentro de otras funciones de un objeto

var raul = {
	nombre:'Raul',
	edad: 35,
	imprNbr: function(){
		//instancion el objeto this, este this al estar apuntando al objeto global, lo paso a self para 
		//que herede sus caracteristicas pero dentro del objeto raul donde self ya estaria apuntanto 
		//al objeto al que pertenece
		var self = this;
		setTimeout(function(){
			console.log('this contiende -> ' , this );
			console.log('self contiene -> ' , self );
			console.log('this es un -> ' + this);
			console.log('self es un -> ' + self);
			console.log('self.nombre y self.edad contiene -> ' + self.nombre,self.edad);
		//se ejecutara cuando pase los milisegundos que le marquemos
		},1000);
	}
};

raul.imprNbr();