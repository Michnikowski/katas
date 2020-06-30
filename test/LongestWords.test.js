const LongestWords = require('../LongestWords.js');

test('', () => {
	expect(LongestWords()).toEqual(['']);
});

test('one two three', () => {
	expect(LongestWords('one two three')).toEqual(['three']);
});

test('one two on it', () => {
	expect(LongestWords('one two on it')).toEqual(['one', 'two']);
});

test('You are just an old antidisestablishmentarian', () => {
	expect(
		LongestWords('You are just an old antidisestablishmentarian')
	).toEqual(['antidisestablishmentarian']);
});
