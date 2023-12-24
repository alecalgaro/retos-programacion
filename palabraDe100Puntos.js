/*
 * La última semana de 2021 comenzamos la actividad de retos de programación,
 * con la intención de resolver un ejercicio cada semana para mejorar
 * nuestra lógica... ¡Hemos llegado al EJERCICIO 100! Gracias 🙌
 *
 * Crea un programa que calcule los puntos de una palabra.
 * - Cada letra tiene un valor asignado. Por ejemplo, en el abecedario
 *   español de 27 letras, la A vale 1 y la Z 27.
 * - El programa muestra el valor de los puntos de cada palabra introducida.
 * - El programa finaliza si logras introducir una palabra de 100 puntos.
 * - Puedes usar la terminal para interactuar con el usuario y solicitarle
 *   cada palabra.
 */

// libreria para interactuar con el usuario por consola
const readline = require("readline");

const alphabet = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	ñ: 15,
	o: 16,
	p: 17,
	q: 18,
	r: 19,
	s: 20,
	t: 21,
	u: 22,
	v: 23,
	w: 24,
	x: 25,
	y: 26,
	z: 27,
};

const points = (word) => {
	let total = 0;
	for (letter of word) {
		total += alphabet[letter.toLowerCase()] || 0; // si la letra no esta en el abecedario suma 0
	}
	return total;
};

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const requestWord = () => {
	rl.question("Ingresa una palabra o 'salir' para terminar: ", (response) => {
		if (response.toLowerCase() === "salir") {
			rl.close();
			return;
		}
		const res = points(response);
		console.log("Puntos:", res);
		if (res == 100) {
			console.log("Felicidades, has consigo una palabra de 100 puntos.");
			rl.close();
		} else {
			requestWord();
		}
	});
};

// Solicitar la primera palabra
requestWord();
