/*
Given a string, write a function that reverses the characters. E.g. Input "hello world" --> Output "dlrow olleh"
Also for numbers 1234 => '4321'
*/

function ReverseString(input = '') {
	return input.toString().split('').reverse().join('');
}

// console.log(ReverseString('Hello world!!!'));

module.exports = ReverseString;
