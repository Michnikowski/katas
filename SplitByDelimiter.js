/*
Write a function that splits a string by delimiter.

For example, if the string is "hello, world" and the delimiter is , the output should be ["hello", "world"]
*/

//With split
function SplitByDelimiter(input = '', delimiter = ',') {
	return input.split(delimiter);
}

// console.log(SplitByDelimiter('hello1, hello2, hello3', ','));

// RAW
function SplitByDelimiterRaw(input = '', delimiter = ',') {
	const output = [];
	let tempString = '';
	for (const char of input) {
		if (char !== delimiter) {
			tempString += char;
		} else {
			output.push(tempString);
			tempString = '';
		}
	}

	output.push(tempString);
	return output;
}

//console.log(SplitByDelimiter('hello1, hello2, hello3', ','));

module.exports = { SplitByDelimiter, SplitByDelimiterRaw };
