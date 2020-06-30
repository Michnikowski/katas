const SumOfArrays = require('../SumOfArrays.js');

test('', () => {
	expect(SumOfArrays()).toEqual('Empty array');
});

test('[]', () => {
	expect(SumOfArrays([])).toEqual('Empty array');
});

test('test', () => {
	expect(SumOfArrays('test')).toEqual('This is not an array');
});

test('123456', () => {
	expect(SumOfArrays(123456)).toEqual('This is not an array');
});

test('[1,2,3]', () => {
	expect(SumOfArrays([1, 2, 3])).toEqual(6);
});

test('[100,200,300,400,[100]]', () => {
	expect(SumOfArrays([100, 200, 300, 400, [100]])).toEqual(1100);
});

test('[1,1,1,1,1,[1,[1]]]', () => {
	expect(SumOfArrays([1, 1, 1, 1, 1, [1, [1]]])).toEqual(7);
});

test('[1,1,[1,[1],1],1,1,1,[1,[1]]]', () => {
	expect(SumOfArrays([1, 1, [1, [1], 1], 1, 1, 1, [1, [1]]])).toEqual(10);
});

test('[1,2,3,[a, b, c, 1]]', () => {
	expect(SumOfArrays([1, 2, 3, ['a', 'b', 'c', 1]])).toEqual(7);
});
