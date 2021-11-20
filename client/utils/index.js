/* JavaScript Utilities (Custom Functions) */

const getRandomCount = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const throwError = (message) => {
  throw new Error(message);
};

/* 데이터 타입 체크 유틸리티 ----------------------------------------------------------- */

// - isUndefined()
// - isNull()
// - isNothing()
// - isString()
// - isNumber()
// - isNaN()
// - isBoolean()
// - isTruthy()
// - isFalsy()
// - isFunction()
// - isArray()
// - isObject()
// - isDate()
// - isEqual()
// - isNotEqual()

const isUndefined = (data) => data === undefined;
const isNull = (data) => data === null;
const isNothing = (data) => isUndefined(data) || isNull(data);
const isString = (data) => typeof data === 'string';
const isNumber = (data) => typeof data === 'number' && !isNaN(data);
const isBoolean = (data) => typeof data === 'boolean';
const isFunction = (data) => typeof data === 'function';
const isArray = (data) => Array.isArray(data);
const isObject = (data) => data.constructor === Object;
const isDate = (data) => data.constructor === Date;

/* 데이터 타입 변경 유틸리티 ----------------------------------------------------------- */

// - makeArray()
const makeArray = (likeArrayObject) => {
  if (Array.from) {
    return Array.from(likeArrayObject);
  } else if ('length' in likeArrayObject) {
    // 반환 값: 배열
    // 반환할 값을 선언
    const returnValue = [];
    for (let i = 0, l = 4; i < l; ++i) {
      returnValue.push(likeArrayObject[i]);
    }
    return returnValue;
  } else {
    // 오류 출력: 유사 배열이 아님을 경고!
    throwError('전달받은 데이터는 유사배열(like Array Object)가 아님!');
  }
};

/* DOM 접근/조작 유틸리티 ------------------------------------------------------------ */

// - getNode(), $()
// - getNodeList(), $$()
function getNodeList(selector, context = document) {
  return makeArray(context.querySelectorAll(selector));
}

function getNode(selector, context = document) {
  return getNodeList(selector, context)[0];
}

// 별칭(alias) 함수
const $$ = getNodeList;
const $ = getNode;

// - getAttr()
// - setAttr()
// - attr()

function hasProp(target, propName) {
  return propName in target;
}

function isElementNode(node) {
  if (!isNothing(node) && hasProp(node, 'nodeType')) {
    if (node.nodeType === document.ELEMENT_NODE) {
      return true;
    } else {
      return false;
    }
  } else {
    throwError(
      `전달된 ${node}는 존재하지 않거나, nodeType 속성을 가지고 있지 않습니다.`
    );
  }
}

function getAttr(node, attrName) {
  if (isElementNode(node)) {
    return node.getAttribute(attrName);
  } else {
    throwError('전달된 첫번째 인자는 HTML ElementNode가 아닙니다.');
  }
}

function setAttr(node, attrName, value) {
  if (isElementNode(node) && isString(attrName)) {
    node.setAttribute(attrName, value);
  } else {
    throwError(
      '전달된 첫번째 인자는 HTML ElementNode가 아니거나 또는 두번 인자인 attrName이 문자 값이 아닙니다.'
    );
  }
}

function attr(node, attrName, value) {
  return !value ? getAttr(node, attrName) : setAttr(node, attrName, value);
}

// - getData()
// - setData()
// - data()
function getData(node, dataName) {
  return getAttr(node, `data-${dataName}`);
}
function setData(node, dataName, value) {
  setAttr(node, `data-${dataName}`, value);
}
function data(node, dataName, value) {
  return attr(node, `data-${dataName}`, value);
}

// - addClass()
// - removeClass()
// - hasClass()
// - toggleClass()

// - getStyle()
// - setStyle()
// - css()

/* DOM 이벤트 유틸리티 -------------------------------------------------------------- */

// - on()
// - off()
// - once()
// - bind() → unbind()
// - bindAll() → unbindAll()

/* 테스트 유틸리티 ------------------------------------------------------------------ */

// - expect(received)
//   - .toBe(expected)
//   - .not.toBe(expected)
// - test(description, callback)
// - describe(title, callback)
