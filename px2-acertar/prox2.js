/* 
	Código en JavaScript
	Nome do ficheiro: prox2.js
	Usado: 
*/
document.write('<img src="../logo.png" alt="Algo falla no logo"><br>');
// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio);

document.write(misterio);

var escolle = prompt('Cual es el número misterioso menor que 10? ')

if (escolle == misterio)
{
	document.write(' Has acertado')
}
else if (escolle < misterio)
{
	document.write(' El número misterioso es mayor')
}
else if (escolle > misterio)
{
	document.write(' El número misterioso es menor')
}
