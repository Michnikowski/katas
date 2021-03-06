const CashUnits = require('../CashUnits.js');

test('123123.21', () => {
	expect(CashUnits(123123.21)).toEqual({
		'1. 500': 246,
		'2. 200': 0,
		'3. 100': 1,
		'4. 50': 0,
		'5. 20': 1,
		'6. 10': 0,
		'7. 5': 0,
		'8. 2': 1,
		'9. 1': 1,
		'10. 0.5': 0,
		'11. 0.2': 1,
		'12. 0.1': 0,
		'13. 0.05': 0,
		'14. 0.02': 0,
		'15. 0.01': 1,
	});
});

test('0.01', () => {
	expect(CashUnits(0.01)).toEqual({
		'1. 500': 0,
		'2. 200': 0,
		'3. 100': 0,
		'4. 50': 0,
		'5. 20': 0,
		'6. 10': 0,
		'7. 5': 0,
		'8. 2': 0,
		'9. 1': 0,
		'10. 0.5': 0,
		'11. 0.2': 0,
		'12. 0.1': 0,
		'13. 0.05': 0,
		'14. 0.02': 0,
		'15. 0.01': 1,
	});
});

test('888.88', () => {
	expect(CashUnits(888.88)).toEqual({
		'1. 500': 1,
		'2. 200': 1,
		'3. 100': 1,
		'4. 50': 1,
		'5. 20': 1,
		'6. 10': 1,
		'7. 5': 1,
		'8. 2': 1,
		'9. 1': 1,
		'10. 0.5': 1,
		'11. 0.2': 1,
		'12. 0.1': 1,
		'13. 0.05': 1,
		'14. 0.02': 1,
		'15. 0.01': 1,
	});
});

test('0', () => {
	expect(CashUnits(0)).toEqual({
		'1. 500': 0,
		'2. 200': 0,
		'3. 100': 0,
		'4. 50': 0,
		'5. 20': 0,
		'6. 10': 0,
		'7. 5': 0,
		'8. 2': 0,
		'9. 1': 0,
		'10. 0.5': 0,
		'11. 0.2': 0,
		'12. 0.1': 0,
		'13. 0.05': 0,
		'14. 0.02': 0,
		'15. 0.01': 0,
	});
});
