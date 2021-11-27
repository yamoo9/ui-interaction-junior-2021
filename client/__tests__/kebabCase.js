import { test, expect } from '../utils/tests/index.js';
import { kebabCase } from '../utils/transforms/index.js';

test(`kebabCase('simple is best') → 'simple-is-best'`, () => {
  expect(kebabCase('simple is best')).toBe('simple-is-best');
});
test(`kebabCase('simple   is            best') → 'simple-is-best'`, () => {
  expect(kebabCase('simple   is            best')).toBe('simple-is-best');
});
