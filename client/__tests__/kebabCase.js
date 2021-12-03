import { test, expect, kebabCase } from '../utils/index.js';

test(`kebabCase('simple is best') → 'simple-is-best'`, () => {
  expect(kebabCase('simple is best')).toBe('simple-is-best');
});
test(`kebabCase('simple   is            best') → 'simple-is-best'`, () => {
  expect(kebabCase('simple   is            best')).toBe('simple-is-best');
});
