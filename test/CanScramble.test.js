const CanScramble = require('../CanScramble.js');

test('AAAbbb - bbbAAA', () => {
	expect(CanScramble('AAAbbb', 'bbbAAA')).toEqual(true);
});

test('abc - bca', () => {
	expect(CanScramble('abc', 'bca')).toEqual(true);
});

test('aab - bba', () => {
	expect(CanScramble('aab', 'bba')).toEqual(false);
});

test('aaa - AAA', () => {
	expect(CanScramble('aaa', 'AAA')).toEqual(false);
});

test('aaa - aa', () => {
	expect(CanScramble('aaa', 'aa')).toEqual(false);
});

test('test - etst', () => {
	expect(CanScramble('test', 'etst')).toEqual(true);
});
