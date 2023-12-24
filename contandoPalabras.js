/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const countWords = (text) => {
	const modifiedText = text
		.toLowerCase() // convierto todo a minusculas
		.normalize("NFD") // este metodo separa los caracteres de diacriticos (tildes y signos)
		.replace(/[^\w\s]|_/g, ""); // elimino las comas, puntos y signos de preguntas o exclamación
	const words = modifiedText.split(" ");

	const wordCount = {};
	for (word of words) {
		if (wordCount[word]) wordCount[word] += 1;
		else wordCount[word] = 1;
	}
	for (word of Object.keys(wordCount)) {
		console.log(`"${word}" aparece ${wordCount[word]} ${wordCount[word] > 1 ? "veces" : "vez"}`);
	}
};

countWords("Hola mundo! ¿qué tal mundo? probando que tal.");
