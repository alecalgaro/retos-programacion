/*
 * Crea las funciones capaces de transformar colores HEX
 * a RGB y viceversa.
 * Ejemplos:
 * RGB a HEX: r: 0, g: 0, b: 0 -> #000000
 * HEX a RGB: hex: #000000 -> (r: 0, g: 0, b: 0)
 */

const HEX_to_RGB = (color) => {
	// parseInt con base 16 para que convierta de hexadecimal a base 10
	// arr.slice([inicio [, fin]])
	// slice devuelve una copia del array desde el indice inicio hasta el indice fin-1
	const r = parseInt(color.slice(1, 3), 16);
	const g = parseInt(color.slice(3, 5), 16);
	const b = parseInt(color.slice(5, 7), 16);
	console.log(`r: ${r}, g: ${g}, b: ${b}`);
};

HEX_to_RGB("#000000"); // r: 0, g: 0, b: 0
HEX_to_RGB("#ffffff"); // r: 255, g: 255, b: 255

const RGB_to_HEX = (r, g, b) => {
	// toString con base 16 para que convierta de base 10 a hexadecimal
	// padStart para que los hexadecimales tengan 6 digitos, agregando 0 a la izquierda si es necesario
	const red = r.toString(16).padStart(2, "0");
	const green = g.toString(16).padStart(2, "0");
	const blue = b.toString(16).padStart(2, "0");

	console.log(`#${red}${green}${blue}`);
};

RGB_to_HEX(0, 0, 0); // #000000
RGB_to_HEX(255, 255, 255); // #ffffff
RGB_to_HEX(12, 34, 56); // #0c2238
