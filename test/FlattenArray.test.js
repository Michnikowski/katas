const FlattenArray = require('../FlattenArray.js');

test('[1, 2, [3, [4], 5, 6], 7]', () => {
	expect(FlattenArray([1, 2, [3, [4], 5, 6], 7])).toEqual([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
	]);
});

test('[0, [1]]', () => {
	expect(FlattenArray([0, [1]])).toEqual([0, 1]);
});

test('[0, [A]]', () => {
	expect(FlattenArray([0, ['A']])).toEqual([0, 'A']);
});

test('[0, [1, [A, 1, C]]]', () => {
	expect(FlattenArray([0, [1, ['A', 1, 'C']]])).toEqual([0, 1, 'A', 1, 'C']);
});

test('[0, B, [TEST, 1, B], 6, [1, [A, 1, C]]]', () => {
	expect(
		FlattenArray([0, 'B', ['TEST', 1, 'B'], 6, [1, ['A', 1, 'C']]])
	).toEqual([0, 'B', 'TEST', 1, 'B', 6, 1, 'A', 1, 'C']);
});
