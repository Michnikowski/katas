const { factorialLoop, factorialRecursion } = require('../Factorial.js');

test('5 loop', () => {
	expect(factorialLoop(5)).toEqual(120);
});

test('10 loop', () => {
	expect(factorialLoop(10)).toEqual(3628800);
});

test('20 loop', () => {
	expect(factorialLoop(20)).toEqual(2432902008176640000);
});

test('5 recursion', () => {
	expect(factorialRecursion(5)).toEqual(120);
});

test('10 recursion', () => {
	expect(factorialRecursion(10)).toEqual(3628800);
});

test('20 recursion', () => {
	expect(factorialRecursion(20)).toEqual(2432902008176640000);
});
