const Atbash = require('../Atbash.js');

//decode
test('Decode - returns first alphabet letters', () => {
	expect(Atbash('ABCD abcd')).toEqual('ZYXW!zyxw');
});

test('Decode - returns test words', () => {
	expect(Atbash('TXT XTX')).toEqual('GCG!CGC');
});

test('Decode - returns upper and lower letters', () => {
	expect(Atbash('zYxWvUtS')).toEqual('aBcDeFgH');
});

//encode
test('Encode - returns first alphabet letters', () => {
	expect(Atbash('ZYXW!zyxw')).toEqual('ABCD abcd');
});

test('Encode - returns test words', () => {
	expect(Atbash('GCG!CGC')).toEqual('TXT XTX');
});

test('Encode - returns upper and lower letters', () => {
	expect(Atbash('aBcDeFgH')).toEqual('zYxWvUtS');
});
