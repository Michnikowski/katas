const FirstNonRepeatedCharacter = require('../FirstNonRepeatedCharacter.js');

test('', () => {
	expect(FirstNonRepeatedCharacter('')).toEqual('None');
});

test('A', () => {
	expect(FirstNonRepeatedCharacter('A')).toEqual('A');
});

test('ANN', () => {
	expect(FirstNonRepeatedCharacter('ANN')).toEqual('A');
});

test('AANNA', () => {
	expect(FirstNonRepeatedCharacter('AANNA')).toEqual('A');
});

test('AABBCCDEEFF', () => {
	expect(FirstNonRepeatedCharacter('AABBCCDEEFF')).toEqual('D');
});

test('CCCDAAABBBLOOO', () => {
	expect(FirstNonRepeatedCharacter('CCCDAAABBBLOOO')).toEqual('D');
});
