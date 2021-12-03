import { test, expect, camelCase } from '../utils/index.js';

test(`camelCase('simple is best') → 'simpleIsBest'`, () => {
  expect(camelCase('simple is best')).toBe('simpleIsBest');
});

test(`camelCase('simple   is       best') → 'simpleIsBest'`, () => {
  expect(camelCase('simple   is       best')).toBe('simpleIsBest');
});
