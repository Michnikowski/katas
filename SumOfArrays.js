/*
Calculate the sum of an array which contains integers and other arrays with integers. For example:

array_sum([1,2,[3,4,[5]]])
would return 15.
*/

function SumOfArrays(arr = []) {
	if (!Array.isArray(arr)) {
		return 'This is not an array';
	} else if (arr.length === 0) {
		return 'Empty array';
	}
	const output = arr
		.join(',')
		.split(',')
		.map(convert)
		.reduce(function (a, b) {
			return a + b;
		});

	return output;
}

function convert(input) {
	return isNaN(Number(input)) ? 0 : Number(input);
}

//console.log(SumOfArrays([1, 2, [3, 4, [5]]]));

module.exports = SumOfArrays;
