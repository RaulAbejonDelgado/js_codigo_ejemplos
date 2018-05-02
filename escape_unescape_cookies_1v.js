//Para esta leccion es necesario la instalacion de node.js
//cookies = Guardaremos datos generales de la sesion de usuario entre muchas otras funcionalidades
//creacion de cookies
document.cookie = 'nombre = xxx';
document.cookie = 'apellido = xxxx';

//leemos cookiers
var act_cookie =  document.cookie;
console.log(act_cookie);
//si borramos o comentamos document.cookie = 'nombre = fernando'; la cookie persite si no se indica una fecha de expiracion o se borra manualmente

