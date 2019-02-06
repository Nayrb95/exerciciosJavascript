/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/

alert('productos: 1-Agua oxigenada(3€), 2-Alcohol(4€), 3-Crema hidratante(10€), 4-Pastillas para el mareo(20€)');
var prod1; 
prod1 = prompt('codigo primer producto');
var prod2;
prod2 = prompt('codigo segundo producto');
var prod3;
prod3 = prompt('codigo tercer producto');
var prod4; 
prod4 = prompt('codigo cuarto producto');
var = H2O3;
H2O3 = 3;
var = C2H5OH;
C2H5OH = 4;
var crema;
crema = 10;
var Pastillas;
Pastillas = 20;

//lo que saldra en la pantalla.

document.write('<h1>super lion</h1>');
document.write('<img src="../logo.png" alt="Algo falla no logo">');

var objeto1;

 if (prod1 < 2) {
	document.write('<br> Primer producto Agua Oxigenada <br>' + H2O3 + '€');
	objeto1 = H2O3;

}

else if (prod1 <= 2) {
		document.write('<br> Primer producto Alcohol <br>'  + C2H5OH + '€');
		objeto1 = C2H5OH;
	}

	else if (prod1 <= 3) {
				document.write('<br> Primer producto Crema hidratante <br>' + crema + '€');
				objeto1 = crema;

		}
		else if (prod1 = 4) {
						document.write('<br> Primer producto Pastillas para el mareo <br>' + Pastillas + '€');
						objeto1 = Pastillas;
			}

var objeto2

 if (prod2 < 2) {
	document.write('<br> Segundo producto Agua Oxigenada <br>' + H2O3 + '€');
	objeto2 = H2O3;

}

else if (prod2 <= 2) {
		document.write('<br> Segundo producto Alcohol <br>'  + C2H5OH + '€');
		objeto2 = C2H5OH;
	}

	else if (prod2 <= 3) {
				document.write('<br> Segundo producto Crema hidratante <br>' + crema + '€');
				objeto2 = crema;

		}
		else if (prod2 = 4) {
						document.write('<br> Segundo producto Pastillas para el mareo <br>' + Pastillas + '€');
						objeto2 = Pastillas;
			}

var objeto3

 if (prod3 < 2) {
	document.write('<br> Tercer producto Agua Oxigenada <br>' + H2O3 + '€');
	objeto3 = H2O3;

}

else if (prod3 <= 2) {
		document.write('<br> Tercer producto Alcohol <br>'  + C2H5OH + '€');
		objeto3 = C2H5OH;
	}

	else if (prod3<= 3) {
				document.write('<br> Tercer producto Crema hidratante <br>' + crema + '€');
				objeto3 = crema;

		}
		else if (prod3 = 4) {
						document.write('<br> Tercer producto Pastillas para el mareo <br>' + Pastillas + '€');
						objeto3 = Pastillas;
			}

document.write('<hr>');
var Resultado;
Resultado = objeto1+objeto2+objeto3;
document.write('Resultado Sin Iva' + '     ' + Resultado + '€' +'<br>');

document.write('<hr>');

var Resultadoiva;
Resultadoiva= ((Resultado*21)/100) + Resultado;
document.write('Resultado con Iva' + '    ' + Resiltadiva.toFixed(2) + '€');