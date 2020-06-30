const RemoveDuplicateCharactersInString = require('../RemoveDuplicateCharactersInString.js');

//case sensitive
test('', () => {
	expect(RemoveDuplicateCharactersInString('')).toEqual('');
});

test('Tree traversal', () => {
	expect(RemoveDuplicateCharactersInString('Tree traversal')).toEqual(
		'Tre tavsl'
	);
});

test('aaa bbb ccc aaa bbb ccc', () => {
	expect(RemoveDuplicateCharactersInString('aaa bbb ccc aaa bbb ccc')).toEqual(
		'a bc'
	);
});

test('This is a short test', () => {
	expect(RemoveDuplicateCharactersInString('This is a short test')).toEqual(
		'This aorte'
	);
});

//case insensitive
test('Tree traversal', () => {
	expect(RemoveDuplicateCharactersInString('tree traversal', false)).toEqual(
		'tre avsl'
	);
});

test('aaa bbb ccc aaa bbb ccc', () => {
	expect(
		RemoveDuplicateCharactersInString('aaa bbb ccc aaa bbb ccc', false)
	).toEqual('a bc');
});

test('This is a short test', () => {
	expect(
		RemoveDuplicateCharactersInString('This is a short test', false)
	).toEqual('this aore');
});
