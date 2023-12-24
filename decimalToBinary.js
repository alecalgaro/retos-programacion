/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decimalToBinary = (decimal) => {
	let binary = "";
	let number = decimal;
	while (number > 0) {
		binary = (number % 2) + binary;
		number = Math.floor(number / 2);
	}
	return binary || "0";
};

console.log(decimalToBinary(0));
console.log(decimalToBinary(2));
console.log(decimalToBinary(10));

const binaryToDecimal = (binary) => {
	let decimal = 0;
	let base = 1; // variable base para mantener el valor posicional

	while (binary > 0) {
		let digit = binary % 10;
		decimal += digit * base;
		binary = Math.floor(binary / 10);
		base *= 2;
	}

	return decimal;
};

console.log(binaryToDecimal("0000"));
console.log(binaryToDecimal("1010"));

//* ----- Usando funciones de JS -----

function decimalToBinaryJS(decimal) {
	// el segundo parametro de parseInt es la base en la esta el valor, que seria
	// decimal en este caso (10) y y luego con toString(2) convierte a base 2 (binario)
	const binary = parseInt(decimal, 10).toString(2);
	return binary;
}

console.log(decimalToBinaryJS(0));
console.log(decimalToBinaryJS(2));
console.log(decimalToBinaryJS(10));

function binaryToDecimalJS(binary) {
	const decimal = parseInt(binary, 2);
	return decimal;
}

console.log(binaryToDecimalJS("0000"));
console.log(binaryToDecimalJS("1010"));
