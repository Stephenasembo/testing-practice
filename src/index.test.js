import {capitalize, reverseString} from './index';

test('Capitalizes a string', () => {
  expect(capitalize('apple')).toBe('Apple');
})

test('Reverses a string', () => {
  expect(reverseString('apple')).toBe('elppa');
})