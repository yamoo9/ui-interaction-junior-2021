import { test, expect } from '../utils/tests/index.js';
import { snakeCase } from '../utils/transforms/index.js';

test(`snakeCase('simple is best') → 'simple_is_best'`, () => {
  expect(snakeCase('simple is best')).toBe('simple_is_best');
});

test(`snakeCase('simple   is       best') → 'simple_is_best'`, () => {
  expect(snakeCase('simple   is       best')).toBe('simple_is_best');
});
