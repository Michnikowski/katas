/*
Longest Words

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example
longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
*/

function LongestWords(input = '') {
	const arr = Array.from(new Set(input.toLowerCase().split(' ')));
	let LongestWordLength = LengthOfLongestWord(arr);
	const output = [];

	arr.forEach(function (element) {
		if (element.length === LongestWordLength) {
			output.push(element);
		}
	});
	return output;
}

function LengthOfLongestWord(arr) {
	return Math.max(...arr.map((x) => x.length));
}

//console.log(LongestWords('Test test tesT'));

module.exports = LongestWords;
