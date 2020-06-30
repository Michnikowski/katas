const BasicQueue = require('../BasicQueue.js');

const arr = [1, 3, 4, 'test', 6, 'ok'];

test('Add 100', () => {
	expect(BasicQueue(arr, 100, 'A')).toEqual([1, 3, 4, 'test', 6, 'ok', 100]);
});

test('Delete 6', () => {
	expect(BasicQueue(arr, 6, 'D')).toEqual([1, 3, 4, 'test', 'ok', 100]);
});

test('Add test', () => {
	expect(BasicQueue(arr, 'test', 'A')).toEqual([
		1,
		3,
		4,
		'test',
		'ok',
		100,
		'test',
	]);
});

test('Delete ok', () => {
	expect(BasicQueue(arr, 'ok', 'D')).toEqual([1, 3, 4, 'test', 100, 'test']);
});

test('Add ok', () => {
	expect(BasicQueue(arr, 'ok', 'A')).toEqual([
		1,
		3,
		4,
		'test',
		100,
		'test',
		'ok',
	]);
});

test('Delete ok', () => {
	expect(BasicQueue(arr, 'ok', 'D')).toEqual([1, 3, 4, 'test', 100, 'test']);
});

test('Add 100', () => {
	expect(BasicQueue(arr, 100, 'A')).toEqual([
		1,
		3,
		4,
		'test',
		100,
		'test',
		100,
	]);
});

test('Delete 100', () => {
	expect(BasicQueue(arr, 100, 'D')).toEqual([1, 3, 4, 'test', 'test', 100]);
});
