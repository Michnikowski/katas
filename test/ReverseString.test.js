const ReverseString = require('../ReverseString.js');

test('', () => {
	expect(ReverseString()).toEqual('');
});

test('Hello world!!!', () => {
	expect(ReverseString('Hello world!!!')).toEqual('!!!dlrow olleH');
});

test('12345', () => {
	expect(ReverseString('12345')).toEqual('54321');
});

test('This is short test', () => {
	expect(ReverseString('This is short test')).toEqual('tset trohs si sihT');
});

test('anna', () => {
	expect(ReverseString('anna')).toEqual('anna');
});

test('123456789', () => {
	expect(ReverseString(123456789.87)).toEqual('78.987654321');
});
