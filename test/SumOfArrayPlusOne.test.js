const SumOfArrayPlusOne = require('../SumOfArrayPlusOne.js');

test('', () => {
	expect(SumOfArrayPlusOne()).toEqual('Empty array');
});

test('[]', () => {
	expect(SumOfArrayPlusOne([])).toEqual('Empty array');
});

test('test', () => {
	expect(SumOfArrayPlusOne('test')).toEqual('This is not an array');
});

test('123456', () => {
	expect(SumOfArrayPlusOne(123456)).toEqual('This is not an array');
});

test('[1,2,3]', () => {
	expect(SumOfArrayPlusOne([1, 2, 3])).toEqual(9);
});

test('[100,200,300,400]', () => {
	expect(SumOfArrayPlusOne([100, 200, 300, 400])).toEqual(1004);
});

test('[1,1,1,1,1]', () => {
	expect(SumOfArrayPlusOne([1, 1, 1, 1, 1])).toEqual(10);
});
