function getData(node, dataName) {
  return getAttr(node, `data-${dataName}`);
}

function setData(node, dataName, value) {
  setAttr(node, `data-${dataName}`, value);
}

export function data(node, dataName, value) {
  return attr(node, `data-${dataName}`, value);
}
