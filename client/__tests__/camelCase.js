import { test, expect } from '../utils/tests/index.js';
import { camelCase } from '../utils/transforms/index.js';

test(`camelCase('simple is best') → 'simpleIsBest'`, () => {
  expect(camelCase('simple is best')).toBe('simpleIsBest');
});

test(`camelCase('simple   is       best') → 'simpleIsBest'`, () => {
  expect(camelCase('simple   is       best')).toBe('simpleIsBest');
});
