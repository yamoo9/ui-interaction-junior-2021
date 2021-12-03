import { test, expect, titleCase } from '../utils/index.js';

test(`titleCase('simple is best') → 'SimpleIsBest'`, () => {
  expect(titleCase('simple is best')).toBe('SimpleIsBest');
});

test(`titleCase('simple   is       best') → 'SimpleIsBest'`, () => {
  expect(titleCase('simple   is       best')).toBe('SimpleIsBest');
});
