const {
	SplitByDelimiter,
	SplitByDelimiterRaw,
} = require('../SplitByDelimiter.js');

//SplitByDelimiterRaw
test('', () => {
	expect(SplitByDelimiterRaw()).toEqual(['']);
});

test('Hello world how are you', () => {
	expect(SplitByDelimiterRaw('Hello world how are you', ' ')).toEqual([
		'Hello',
		'world',
		'how',
		'are',
		'you',
	]);
});

test('one|two|three', () => {
	expect(SplitByDelimiterRaw('one|two|three', '|')).toEqual([
		'one',
		'two',
		'three',
	]);
});

test('1,2,3,4,5', () => {
	expect(SplitByDelimiterRaw('1,2,3,4,5', ',')).toEqual([
		'1',
		'2',
		'3',
		'4',
		'5',
	]);
});

//SplitByDelimiter
test('', () => {
	expect(SplitByDelimiter()).toEqual(['']);
});

test('Hello world how are you', () => {
	expect(SplitByDelimiter('Hello world how are you', ' ')).toEqual([
		'Hello',
		'world',
		'how',
		'are',
		'you',
	]);
});

test('one|two|three', () => {
	expect(SplitByDelimiter('one|two|three', '|')).toEqual([
		'one',
		'two',
		'three',
	]);
});

test('1,2,3,4,5', () => {
	expect(SplitByDelimiter('1,2,3,4,5', ',')).toEqual(['1', '2', '3', '4', '5']);
});
