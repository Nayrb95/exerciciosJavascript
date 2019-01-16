/* 
	Código en JavaScript
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con condicionais</h1>');

// varios caracteres entre comiñas forman unha cadea (string)
var resposta = prompt('Como te encuentras? ');
document.write('Dices que te encuetras ' + resposta +  '<br>'); // unha cadea detrás da outra co signo +

/*	
	avaliamos o que introduce o usuario
*/

switch(resposta)
{
	case 'Bién':
		document.write('ME ALEGRO 😆');
	break;
	case 'Genial':
		document.write('QUE SORTE 🤣');
	break;
	case 'Mal':
		document.write('😫 QUE PENA');
	break;
	default:
		document.write('OK');
	break;
}; 

document.write('<h6>Truquito: 😉 En Sublime Text: Edit/Emoji</h6>');