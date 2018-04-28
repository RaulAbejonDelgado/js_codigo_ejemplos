//Funcion de primera clase 'Como si fuera una clase en otros lenguajes'
function Jugador(nombre){
	this.nombre=nombre;
	this.pv = 100 ;
	this.sp = 100;
	
	this.redbull = function (jugadorObjetivo){
		//En los casos de curacion juego el jugadorObjetivo es el jugador que lanza la accion 
		if (this === jugadorObjetivo){
			if (this.sp >= 40){
				this.sp -= 40;
				this.pv += 20;
			}else{
				console.error('Sin RedBull !!');
				}
			
		}else{
			if (this.sp >= 40){
				this.sp -= 40;
				//jugadorObjetivo.pv == jugadorObjetivo.pv + 20;sintaxis larga
				jugadorObjetivo.pv += 20;
			}else{
				console.error('Sin RedBull !!');
				}
			}
		this.estado(jugadorObjetivo);
		}
		
	this.patada = function (jugadorObjetivo){
		if (jugadorObjetivo.pv > 40){
			this.sp -= 40;
			jugadorObjetivo.pv -= 40;
		}else{
			jugadorObjetivo.pv = 0;
			console.error(jugadorObjetivo.nombre + ' Se ha caido !');
			}
		this.estado(jugadorObjetivo);
		}
		
		
	this.cortarPaso = function(jugadorObjetivo){
		jugadorObjetivo.pv -=60;
		}
	//cada vez que hagamos una accion nos mostrara los valores de los 2 jugadores	
	this.estado = function( jugadorObjetivo){
	console.log(this);
	console.log(jugadorObjetivo);
	}
}

var valentino = new Jugador('Valentino');
var marquez = new Jugador('Marquez');

console.log(valentino);
console.log(marquez);

marquez.patada(valentino);


