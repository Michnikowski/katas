/*
Atbash
ASCII 1-127

Atbash is a simple substitution cipher originally for the Hebrew alphabet, but possible with any known alphabet.

Original: abcdefghijklmnopqrstuvwxyz Substitute: zyxwvutsrqponmlkjihgfedcba

So you would substitute a in your input text with Z in your output text, b with Y, c with X and so forth.

A few English words also Atbash into other English words:

irk = rip
low = old
hob = sly
hold = slow
holy = slob
horn = slim
glow = told
grog = tilt
zoo = all
Some other English words Atbash into their own reverses, e.g. wizard becomes draziw.

Function upgraded to all ASCII characters 1-127
*/

function Atbash(input) {
	let output = '';
	const dict = getDict();
	input.split('').forEach(function (letter) {
		output += String.fromCharCode(dict[letter]);
	});
	return output;
}

function getDict() {
	const dict = {};

	//ranges with letters
	const ranges = [
		[65, 90], // A-Z
		[97, 122], // a-z
		[1, 64], // other
		[91, 96],
		[123, 127],
	];

	ranges.forEach(function (range, index) {
		let newNumber = range[1];
		for (let i = range[0]; i <= range[1]; i++) {
			dict[String.fromCharCode(i)] = newNumber;
			newNumber -= 1;
		}
	});

	return dict;
}

//console.log(Atbash('aBcDeFgH'));

module.exports = Atbash;
