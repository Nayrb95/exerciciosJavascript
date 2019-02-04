/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/
function longitud(n2){
	respuesta1=(n2 * 1000);
	document.getElementById("cambiar").innerHTML = respuesta1;
	return respuesta;
}

function moneda(n2){
	respuesta2=(n2 * 0.87);
	document.getElementById("cambiar").innerHTML = respuesta2;
	return respuesta;
}

function datos(n2){
	respuesta3=(n2 * 1024);
	document.getElementById("cambiar").innerHTML = respuesta3;
	return respuesta;
}

function tiempo(n2){
	respuesta4=(n2 * 3600);
	document.getElementById("cambiar").innerHTML = respuesta4;
	return respuesta;
}

var elegir = prompt("¿Que cantidad quieres cambiar?");

var repetir = 1;


//while(repetir){
// switch(elegir)
// {
// 	case 'longitud':
// 	var n2 = parseFloat(prompt("¿Cuantos Km quieres cambiar?"));
// 	longitud(n2);
// 	x = longitud(n2);
// 	alert("El resultado es " + x)
// 	break;

// 	case 'moneda':
// 	var n3 = parseFloat(prompt("¿Cuantos $ quieres cambiar?"));
// 	moneda(n3);
// 	y = moneda(n3);
// 	alert("El resultado es " + y)
// 	break;

// 	case 'datos':
// 	var n4 = parseFloat(prompt("¿Cuantos GB quieres cambiar?"));
// 	datos(n4);
// 	z = datos(n4);
// 	alert("El resultado es " + z)
// 	break;

// 	case 'tiempo':
// 	var n5 = parseFloat(prompt("¿Cuantas h quieres cambiar?"));
// 	tiempo(n5);
// 	a = tiempo(n5);
// 	alert("El resultado es " + a)
// 	break;
// }
// repetir = confirm("Quieres repetir?");
// }
