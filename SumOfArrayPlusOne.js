/*
Sum of Array Plus One

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14
*/

function SumOfArrayPlusOne(arr = []) {
	if (!Array.isArray(arr)) {
		return 'This is not an array';
	} else if (arr.length === 0) {
		return 'Empty array';
	}

	const output = arr.reduce(function (a, b) {
		return a + b + 1;
	});
	return output + 1;
}

//console.log(SumOfArrayPlusOne([1, 2, 5]));

module.exports = SumOfArrayPlusOne;
