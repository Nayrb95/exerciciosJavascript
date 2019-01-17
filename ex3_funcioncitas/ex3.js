/* 
	Código en JavaScript
	Nome do ficheiro: ex3.js
	Usado: function



	Función sen parámetros

function saudar () {
	var dato='eres';
	alert('De donde '+ dato);
}


	
	Función á que lle pasamos un parámetro e fai o que lle pedimos

function cotillear(algo) {
	document.write('<br> Que tal estás '+ algo);
}

	
	Función á que lle pasamos dous parámetros e devolve un valor

function calcularMedia(n1,n2) {
	final=(n1+n2)/2;
	return final
}


document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con funcións</h1>');

document.write('Algunhas veñen predefinidas: <code>alert(), prompt(), parseInt()</code> <br>');
document.write('Outras están na biblioteca <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
document.write('<hr>Podemos definir nós mesmos funcións: <code>saudar(), cotillear(), calcularMedia()</code><br>');
document.write('O resultado das chamadas será:  <hr>');


//chamada á función saudar()
saudar();

document.write('Chamada á función <code>cotillear()</code><br>');
cotillear('Mari');
cotillear('Toni');
cotillear('Xan');

document.write('<hr>Chamada á función <code>calcularMedia()</code>');
var nota=calcularMedia(5,10);
document.write('<br> A túa nota final é... '+ nota);
*/
/*
function saludar(){
	alert('Buenas a todos');
}
function preguntar(){
	alert('Una pregunta por curiosidad');
	x = prompt ('¿que prefieres cocteles o zumitos?');
}
function despedir(){
	alert('Me alegro');
}
saludar()
preguntar()
if(x == 'cocteles'){
	document.write('Eres un borracho');
}else if(x == 'zumitos'){
	document.write('Eres un chico/a sano/a');
}
despedir()
*/
let n1 = parseInt(prompt("Primera nota?"));
let n2 = parseInt(prompt("Segunda nota?"));
function media (n1,n2){
	respuesta=(n1 + n2)/2;
	return respuesta;
}
x = media(n1,n2);
alert("Tu media es " + x);
