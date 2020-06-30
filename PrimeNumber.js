/*
Prime Number

Write a function that accepts a number and return a boolean based on whether it's a prime number.
*/

function PrimeNumber(input) {
	if (input < 2) {
		return false;
	}

	let sqrt = Math.round(Math.sqrt(input));

	for (let i = 2; i <= sqrt; i++) {
		if (input % i === 0) {
			return false;
		}
	}
	return true;
}

//console.log(PrimeNumber(3));

module.exports = PrimeNumber;
