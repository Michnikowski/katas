/*
Reverse Words in a String

Given an input string, reverse all the words.

To clarify, input: "Interviews are awesome!" output: "awesome! are Interviews".

Consider all consecutive non-whitespace characters as individual words.

If there are multiple spaces between words reduce them to a single white space.

Also remove all leading and trailing whitespaces. So, the output for " CS degree", "CS degree", "CS degree ", or " CS degree " are all the same: "degree CS".
*/

function ReverseWordsInAString(input = '') {
	input = input.trim();
	while (input.search('  ') > 0) {
		input = input.replace('  ', ' ');
	}

	const arr = input.split(' ');
	const output = [];
	arr.forEach((element) => {
		output.unshift(element);
	});
	return output.join(' ');
}

//console.log(ReverseWordsInAString('   this     is      a test string    '));

module.exports = ReverseWordsInAString;
