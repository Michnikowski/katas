const FormatString = require('../FormatString.js');

test('Hello {0}{1}, World, !!!', () => {
	expect(FormatString('Hello {0}{1}', 'World', '!!!')).toEqual(
		'Hello World!!!'
	);
});

test('{1}_{0}, {0}, {1}', () => {
	expect(FormatString('{1}_{0}', '{0}', '{1}')).toEqual('{1}_{0}');
});

test('Hello {0} {1}, Mr., X', () => {
	expect(FormatString('Hello {0} {1}', 'Mr.', 'X')).toEqual('Hello Mr. X');
});
