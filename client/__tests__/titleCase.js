import { test, expect } from '../utils/tests/index.js';
import { titleCase } from '../utils/transforms/index.js';

test(`titleCase('simple is best') → 'SimpleIsBest'`, () => {
  expect(titleCase('simple is best')).toBe('SimpleIsBest');
});

test(`titleCase('simple   is       best') → 'SimpleIsBest'`, () => {
  expect(titleCase('simple   is       best')).toBe('SimpleIsBest');
});
