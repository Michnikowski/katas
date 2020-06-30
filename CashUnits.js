/*
Cash units

Write a function that returns the number of each cash-unit that fits into the given input by achieving the smallest denomination.

Given cash units are:

500
200
100
50
20
10
5
2
1
0.5
0.2
0.1
0.05
0.02
0.01
*/

function CashUnits(inputValue) {
	const units = [
		500,
		200,
		100,
		50,
		20,
		10,
		5,
		2,
		1,
		0.5,
		0.2,
		0.1,
		0.05,
		0.02,
		0.01,
	];
	const dict = {};
	let i = 1;

	units.forEach(function (item) {
		const tempUnit = Math.floor(inputValue / item);

		if (tempUnit >= 1) {
			dict[`${i}. ${item}`] = tempUnit;
			inputValue = Math.round((inputValue - item * tempUnit) * 100) / 100;
		} else {
			dict[`${i}. ${item}`] = 0;
		}

		i += 1;
	});

	return dict;
}

//console.log(CashUnits(0));

module.exports = CashUnits;
