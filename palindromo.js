/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function palindromo(texto) {
	let textoSinEspacios = texto.replace(/\s/g, ""); // elimina espacios en blanco
	let textoSinTildes = textoSinEspacios.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // elimina diacríticos (como tildes)
	let textoSinSignos = textoSinTildes.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // elimina signos de puntuación o caracteres especiales
	let textoEnMinusculas = textoSinSignos.toLowerCase(); // convierte a minúsculas
	let textoInvertido = textoEnMinusculas.split("").reverse().join(""); // invierte el texto
	return textoEnMinusculas === textoInvertido;
}

console.log(palindromo("Ana lleva al oso la avellana."));
console.log(palindromo("La ruta nos aporto otro paso natural."));
console.log(palindromo("Frase que no es palindromo"));
