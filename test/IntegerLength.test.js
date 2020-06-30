const IntegerLength = require('../IntegerLength.js');

test('', () => {
	expect(IntegerLength()).toEqual(0);
});

test('9', () => {
	expect(IntegerLength(9)).toEqual(1);
});

test('123', () => {
	expect(IntegerLength(123)).toEqual(3);
});

test('123123123', () => {
	expect(IntegerLength(123123123)).toEqual(9);
});
