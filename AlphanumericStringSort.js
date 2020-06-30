/*
Alphanumeric String Sort

Given a string containing alphanumeric ASCII characters only ([A-Za-z0-9]), sort and print the string in the following manner:

all sorted lowercase letters are ahead of uppercase letters,
all sorted uppercase letters are ahead of digits, and
all sorted even digits are ahead of sorted odd digits.

ASCII:
==> [A-Z] 65-90
==> [a-z] 97-122
==> [0-9] 48-57

*/

function AlphanumericStringSort(input) {
	const arr = input.split('');

	//get all numbers from string
	const arrOdd = [];
	const arrEven = [];
	const arrLetters = [];

	arr.forEach((element) => {
		if (Number(element)) {
			if (isEven(Number(element))) {
				arrEven.push(Number(element));
			} else {
				arrOdd.push(Number(element));
			}
		} else {
			arrLetters.push(element);
		}
	});

	//sort letters
	const outputString = arrLetters
		.map(lowerUpperConversion)
		.sort()
		.map(lowerUpperConversion)
		.join('');

	arrEven.sort();
	arrOdd.sort();
	const even = arrEven.join('');
	const odd = arrOdd.join('');

	return outputString + even + odd;
}

function lowerUpperConversion(str) {
	const isUpper = new RegExp('[A-Z]').test(str);
	if (isUpper) {
		return str.toLowerCase();
	} else {
		return str.toUpperCase();
	}
}

function isEven(value) {
	if (value % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

//onsole.log(AlphanumericStringSort('dsjfasd32r3rnln3353134156'));

module.exports = AlphanumericStringSort;
