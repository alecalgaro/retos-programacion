/*
 * Crea un programa que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la palabra más larga.
 */

const analizeText = (text) => {
	// Separo las palabras del texto y elimino los puntos para que no se cuenten como un caracter
	const words = text.split(" ").map((word) => word.replace(/\./g, ""));
	console.log(words);
	const totalWords = words.length;
	// Separo las oraciones y elimino las vacias (si hay un punto al final de la frase queda una vacia)
	const sentences = text.split(".").filter((sentence) => sentence.trim().length > 0);
	const totalSentences = sentences.length;

	let meanLength = 0;
	let maxLength = 0;
	let maxWord = "";
	for (word of words) {
		meanLength += word.length;
		if (word.length > maxLength) {
			maxLength = word.length;
			maxWord = word;
		}
	}
	meanLength = meanLength / totalWords;

	console.log(`Total de palabras: ${totalWords}`);
	console.log(`Longitud media de las palabras: ${meanLength}`);
	console.log(`Total de oraciones: ${totalSentences}`);
	console.log(`La palabra más larga es: ${maxWord} con ${maxLength} letras`);
};

analizeText("Hola mundo");
console.log("");
analizeText("Hola mundo. Reto de programacion.");
