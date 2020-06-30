/*
Integer Length

Write a function that takes an integer as input and returns the number of digits in that integer.
*/

function IntegerLength(input = '') {
	return input.toString().split('').length;
}

//console.log(IntegerLength(54654));

module.exports = IntegerLength;
