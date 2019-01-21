/* 
	Código en JavaScript
	Nome do ficheiro: px3.js
	Usado: 
*/

// Definir las funciones.

function sumar (n1,n2){
	respuesta=(n1 + n2);
	return respuesta
}

function restar (n1,n2){
	respuesta=(n1 - n2);
	return respuesta
}

function multiplicar (n1,n2){
	respuesta=(n1 * n2);
	return respuesta
}

function dividir (n1,n2){
	respuesta=(n1 / n2);
	return respuesta
}

var repetir = 1;
while(repetir){

	var elegir = prompt("¿Que operación quieres hacer? (sumar, restar, multiplicar y dividir)");
	var n1 = parseFloat(prompt("Dime el primer número"));
	var n2 = parseFloat(prompt("Dime el segundo número"));
switch(elegir)
{
	case 'sumar':
	sumar(n1,n2);
	x = sumar(n1,n2);
	alert("El resultado es " + x)
	break;

	case 'restar':
	restar(n1,n2);
	y = restar(n1,n2);
	alert("El resultado es " + y)
	break;

	case 'multiplicar':
	multiplicar(n1,n2);
	z = multiplicar(n1,n2);
	alert("El resultado es " + z)
	break;

	case 'dividir':
	dividir(n1,n2);
	a = dividir(n1,n2);
	alert("El resultado es " + a)
	break;

}
repetir = confirm("¿Quieres repetir?");
}