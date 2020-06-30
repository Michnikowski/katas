/*
Flatten Array

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/

function FlattenArray(arr = []) {
	return arr.join(',').split(',').map(convert);
}

function convert(input) {
	return isNaN(Number(input)) ? input : Number(input);
}

//console.log(FlattenArray([1, 2, [30, [411.45], 5, 6], 7]));

module.exports = FlattenArray;
