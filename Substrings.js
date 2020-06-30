/*
Substrings
Output all the possible substrings of a given string.

Example
"abc" => {"a", "b", "c", "ab", "bc", "abc"}
*/

function substrings(input = '') {
	const output = [];
	let length = input.length;
	for (let i = 0; i <= length; i++) {
		for (let y = i + 1; y <= length; y++) {
			output.push(input.substring(i, y));
		}
	}
	return output;
}

//console.log(substrings('abc'));

module.exports = substrings;
