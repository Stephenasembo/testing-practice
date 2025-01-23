import capitalize from './index';

test('Capitalizes a string', () => {
  expect(capitalize('apple')).toBe('Apple');
})