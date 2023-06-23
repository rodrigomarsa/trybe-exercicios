const sum = require('./sum');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums two zeros', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('throws error', () => {
  expect(() => sum(4, '5')).toThrow(Error);
});

test('throws error message', () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});