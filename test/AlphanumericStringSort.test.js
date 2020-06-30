const AlphanumericStringSort = require('../AlphanumericStringSort.js');

//decode
test('', () => {
	expect(AlphanumericStringSort('')).toEqual('');
});

test('123456ZACzac', () => {
	expect(AlphanumericStringSort('123456ZACzac')).toEqual('aczACZ246135');
});

test('123AAAaaa', () => {
	expect(AlphanumericStringSort('123AAAaaa')).toEqual('aaaAAA213');
});

test('1223kDJL42Ilj234dLAN34KNkd32an234', () => {
	expect(AlphanumericStringSort('1223kDJL42Ilj234dLAN34KNkd32an234')).toEqual(
		'addjkklnADIJKLLNN2222224444133333'
	);
});
