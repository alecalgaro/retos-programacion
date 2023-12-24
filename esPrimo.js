/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Un número primo es un número natural mayor que 1 que tiene únicamente
 * dos divisores positivos distintos: él mismo y el 1
 */

const esPrimo = (num) => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0 || num <= 1) return false;
	}
	return true;
};

for (let i = 1; i <= 100; i++) {
	if (esPrimo(i)) console.log(i);
}
