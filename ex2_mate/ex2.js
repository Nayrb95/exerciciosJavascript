/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/


document.write('<h1> Página de mates que usa .css </h1>')

// as variables decláranse
var num1; 
var num2;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Cuanto vale el primer número? ');
num2 = prompt('Cuanto vale el segundo número? ');

// convertimos a números
var solucionado = parseInt(num1)+parseInt(num2);
document.write('El resultado de tu suma es '+ solucionado);

// fallos nos cálculos
var num3 = 0;
document.write('<br> <hr>Atención los errores en las cuentas (dividir entre 0) será...'+ num1/num3); // opsssss


document.write('<hr><h3>Javascript "inventa" un número entre 0 e 23</h3>');

var misterio = Math.random();
document.write('<br>Genero un número aleatorio menor que un: '+ misterio);

//olliño con este truquito para non crear máis variables
misterio = misterio*23;
document.write('<br> Agora está entre 0 e 23: '+ misterio);

//olliño con este truquito para non crear máis variables (outra vez)
misterio = Math.round(misterio)
document.write('<br> Redondeo para non andar con decimais '+ misterio);