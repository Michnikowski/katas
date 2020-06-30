/*
String Format

Create a string formatting function that accepts an input string and a number of arguments to replace positions in the input string.

Example
f('Hello {0} {1}', 'Mr.', 'X') // => 'Hello Mr. X'
f('{1}_{0}', '{1}', '{0}') // => '{0}_{1}'
*/

function FormatString(inputString, f1, f2) {
	return inputString.replace('{0}', f1).replace('{1}', f2);
}

// console.log(FormatString('Hello {0}{1}', 'World', '!!!'));

module.exports = FormatString;
