/*
First Non-repeated character

Write a function that accepts a single string input and returns the first non-repeated character.

"AABBC" // "C"
"AABBCCDEEFF" // "D"
*/

function FirstNonRepeatedCharacter(input) {
	const arr = input.split('');
	for (i = 0; i < arr.length; i++) {
		if (arr[i - 1] !== arr[i] && arr[i + 1] !== arr[i]) {
			return arr[i];
		}
	}
	return 'None';
}

//console.log(FirstNonRepeatedCharacter('AANNAA'));

module.exports = FirstNonRepeatedCharacter;
