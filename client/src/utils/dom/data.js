import { attr } from './index.js';

export function data(node, dataName, value) {
  let dataSetName = `data-${dataName}`;
  return !value ? attr(node, dataSetName) : attr(node, dataSetName, value);
}
