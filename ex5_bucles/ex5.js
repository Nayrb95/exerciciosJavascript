/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: for, while
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina de bucles </h1>')

/*	
	bucle WHILE
*/
document.write('<h2> Bucle WHILE</h2>');

//exercicio 1
document.write('<h3>☞Contar hasta diez</h3>');
numerito = 5;
while (numerito <=10){
	document.write(numerito + '');
	numerito++;
}

//exercicio 2
document.write('<h3>☞ Preparar Patatas</h3>');
var comida = 'Patatas fritas';
while (comida != 'fritas') {
	document.write(comida+ ' ');
	comida  = prompt('Patatas fritas o cocidas?');
}


/*	
	Bucle FOR
*/
document.write('<h2> Bucle FOR</h2>');

//exercicio 1
document.write('<h3>☞ Hacer algo diez veces</h3>');
for (var i=1; i<= 10; i++) {
	document.write('Tengo ganas de irme para casa ');
}

//exercicio 2
document.write('<h3>☞ Aprender a contar hasta 10</h3>');
for (var i=0; i<= 10; i++) {
	document.write(i +', ');
}

//exercicio 3
document.write('<h3>☞ Aprender a contar hasta 60 de diez en cinco comenzando en 1</h3>');
for (var i=1; i<= 60; i=i+10) {
	document.write(i +', ');
}

//exercicio 4
document.write('<h3>☞ Outra canción infantil</h3>');
for (var i=1; i<= 20; i++) {
	document.write(i +' No se debe copiar en los examenes <br>');
}


