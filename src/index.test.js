import { capitalize, reverseString, calculator } from './index';

test('Capitalizes a string', () => {
  expect(capitalize('apple')).toBe('Apple');
});

test('Reverses a string', () => {
  expect(reverseString('apple')).toBe('elppa');
});

test('Calculator functions', () => {
  expect(calculator.sum(1, 2)).toBe(3);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(2, 2)).toBe(1);
  expect(calculator.multiply(1, 3)).toBe(3);
})