import { test, expect, snakeCase } from '../utils/index.js';

test(`snakeCase('simple is best') → 'simple_is_best'`, () => {
  expect(snakeCase('simple is best')).toBe('simple_is_best');
});

test(`snakeCase('simple   is       best') → 'simple_is_best'`, () => {
  expect(snakeCase('simple   is       best')).toBe('simple_is_best');
});
