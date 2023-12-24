/*
 * Enunciado: Crea un función que reciba un texto y retorne la vocal que
 * más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 */

function vocalMasComun(text) {
	let vowels = {
		a: 0,
		e: 0,
		i: 0,
		o: 0,
		u: 0,
	};

	text = text.toLowerCase();
	for (const letter of text) {
		if (vowels[letter] == 0 || vowels[letter]) vowels[letter]++;
	}

	let max = 0;
	let maxVowels = [];
	for (let key in vowels) {
		if (vowels[key] > max) {
			max = vowels[key];
			maxVowels = [key];
		} else if (vowels[key] === max) {
			maxVowels.push(key);
		}
	}
	if (max == 0) {
		return "No hay vocales en el texto.";
	}
	if (maxVowels.length > 1) {
		return `Las vocales más comunes son "${maxVowels.join(
			", "
		)}" las cuales aparecen ${max} veces.`;
	}
	return `La vocal más común es la "${maxVowels[0]}", la cual aparece ${max} veces.`;
}

console.log(vocalMasComun("Hola mundo"));
console.log(vocalMasComun("murcielago"));
console.log(vocalMasComun("qwrtypsdfghjklzxcvbnm"));
