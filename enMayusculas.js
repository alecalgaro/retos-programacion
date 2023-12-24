/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function enMayusculas(text) {
	const words = text.split(" ");
	//* Recordar que for(word of words) crea una copia de cada elemento, entonces no puedo usar
	//* for of y hacer word[0] = word[0].toUpperCase() porque no se guarda en el array original.
	//* Por eso se usa un for tradicional y se accede a cada elemento por indice.
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
	}
	const result = words.join(" ");
	console.log(result);
}

enMayusculas("hola mundo"); // Hola Mundo
