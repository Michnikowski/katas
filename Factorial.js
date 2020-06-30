/*
Factorial

The factorial of a positive integer 𝑛 is the product of all positive integers less than or equal to 𝑛:

𝑛! = 𝑛 × (𝑛 − 1) × (𝑛 − 2) × (𝑛 − 3) × ⋯ × 3 × 2 × 1

For example:

5 = 5 × 4 × 3 × 2 × 1 = 120

The value of 0! is 1, according to the convention for an empty product.

Write a looping and recursive function that calculates the factorial.
*/

function factorialLoop(number) {
	let output = 1;

	while (number >= 1) {
		output *= number;
		number -= 1;
	}

	return output;
}

//console.log(factorialLoop(5));

function factorialRecursion(number) {
	if (number === 1) {
		return 1;
	} else {
		return number * factorialRecursion(number - 1);
	}
}

//console.log(factorialRecursion(10));

module.exports = { factorialLoop, factorialRecursion };
