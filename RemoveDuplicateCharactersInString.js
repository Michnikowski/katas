/*
Remove Duplicate Characters in String

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".
*/

function RemoveDuplicateCharactersInString(input, caseSensitive = true) {
	if (caseSensitive === true) {
		return Array.from(new Set(input.split(''))).join('');
	} else {
		return Array.from(new Set(input.toLowerCase().split(''))).join('');
	}
}

// console.log(RemoveDuplicateCharactersInString('aaa bbb ccc aaa bbb ccc'));

module.exports = RemoveDuplicateCharactersInString;
