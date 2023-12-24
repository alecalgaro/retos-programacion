/*
 * Crea un programa que sea capaz de solicitarte un número y se
 * encargue de imprimir su tabla de multiplicar entre el 1 y el 10.
 * - Debe visualizarse qué operación se realiza y su resultado.
 *   Ej: 1 x 1 = 1
 *       1 x 2 = 2
 *       1 x 3 = 3
 *       ...
 */

// libreria para interactuar con el usuario por consola
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const requestNumber = () => {
	rl.question("Ingresa un numero: ", (number) => {
		for (let i = 1; i <= 10; i++) {
			console.log(`${number} x ${i} = ${number * i}`);
		}
		rl.close();
	});
};

requestNumber();
