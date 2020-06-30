const MoneyFormatting = require('../MoneyFormatting.js');

test('0', () => {
	expect(MoneyFormatting(0)).toEqual('0.00');
});

test('', () => {
	expect(MoneyFormatting()).toEqual('0.00');
});

test('0.99', () => {
	expect(MoneyFormatting(0.99)).toEqual('0.99');
});

test('1.99', () => {
	expect(MoneyFormatting(1.99)).toEqual('1.99');
});

test('99.99', () => {
	expect(MoneyFormatting(99.99)).toEqual('99.99');
});

test('9945', () => {
	expect(MoneyFormatting(9945)).toEqual('9 945.00');
});

test('299.99', () => {
	expect(MoneyFormatting(299.99)).toEqual('299.99');
});

test('1299.99', () => {
	expect(MoneyFormatting(1299.99)).toEqual('1 299.99');
});

test('456548599.99', () => {
	expect(MoneyFormatting(456548599.99)).toEqual('456 548 599.99');
});

test('1299.654841351', () => {
	expect(MoneyFormatting(1299.654841351)).toEqual('1 299.65');
});
