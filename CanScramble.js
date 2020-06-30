/*
CanScramble

Write a function that returns true if one string can be formed out of another by reordering ("scrambling") the characters.

For example:

can_scramble("abc", "cba") -> true
can_scramble("aab", "bba") -> false
*/

function CanScramble(input, output) {
	const inputSet = input.split('').sort();
	const outputSet = output.split('').sort();

	return JSON.stringify(inputSet) === JSON.stringify(outputSet);
}

//console.log(CanScramble('aab', 'bba'));

module.exports = CanScramble;
