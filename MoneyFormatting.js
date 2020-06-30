/*
Money Formatting

Given an amount of money as a float, format it as a string.

formatMoney(2310000.159897); // '2 310 000.16'
formatMoney(1600); // '1 600.00'
*/

function MoneyFormatting(input = 0.0) {
	let afterDot = Math.round(input * 100)
		.toString()
		.slice(-2);

	// 0 or empty case
	afterDot.length !== 2 ? (afterDot += '0') : afterDot;

	let beforeDotArr = Math.trunc(input).toString().split('').reverse();
	let i = 1;
	let beforeDot = '';
	beforeDotArr.forEach(function (element) {
		if (i % 4 === 0) {
			beforeDot = element + ' ' + beforeDot;
			i++;
		} else {
			beforeDot = element + beforeDot;
		}
		i++;
	});

	return `${beforeDot}.${afterDot}`;
}

//console.log(MoneyFormatting(123456.990100001));

module.exports = MoneyFormatting;
