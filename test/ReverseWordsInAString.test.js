const ReverseWordsInAString = require('../ReverseWordsInAString.js');

test('', () => {
	expect(ReverseWordsInAString('')).toEqual('');
});

test('Hello world!!!', () => {
	expect(ReverseWordsInAString('Hello world!!!')).toEqual('world!!! Hello');
});

test('this is test string', () => {
	expect(ReverseWordsInAString('this is test string')).toEqual(
		'string test is this'
	);
});

test('   Hello      world!!!    ', () => {
	expect(ReverseWordsInAString('   Hello      world!!!    ')).toEqual(
		'world!!! Hello'
	);
});

test('  this       is test    string     ', () => {
	expect(ReverseWordsInAString('  this       is test    string     ')).toEqual(
		'string test is this'
	);
});
