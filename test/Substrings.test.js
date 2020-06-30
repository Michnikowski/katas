const substrings = require('../substrings.js');

test('abc', () => {
	expect(substrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
});

test('Hello world', () => {
	expect(substrings('Hello world')).toEqual([
		'H',
		'He',
		'Hel',
		'Hell',
		'Hello',
		'Hello ',
		'Hello w',
		'Hello wo',
		'Hello wor',
		'Hello worl',
		'Hello world',
		'e',
		'el',
		'ell',
		'ello',
		'ello ',
		'ello w',
		'ello wo',
		'ello wor',
		'ello worl',
		'ello world',
		'l',
		'll',
		'llo',
		'llo ',
		'llo w',
		'llo wo',
		'llo wor',
		'llo worl',
		'llo world',
		'l',
		'lo',
		'lo ',
		'lo w',
		'lo wo',
		'lo wor',
		'lo worl',
		'lo world',
		'o',
		'o ',
		'o w',
		'o wo',
		'o wor',
		'o worl',
		'o world',
		' ',
		' w',
		' wo',
		' wor',
		' worl',
		' world',
		'w',
		'wo',
		'wor',
		'worl',
		'world',
		'o',
		'or',
		'orl',
		'orld',
		'r',
		'rl',
		'rld',
		'l',
		'ld',
		'd',
	]);
});