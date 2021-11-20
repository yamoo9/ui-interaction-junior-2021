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

// - setStyle()
// - getStyle()
// - css()
function setStyle(node, styleName, value) {
  if (isElementNode(node)) {
    // node.style.color, node.style.backgroundColor
    // node.style['color'], node.style['backgroundColor']
    node.style[styleName] = value;
  } else {
    throwError('...');
  }
}

function getStyle(node, styleName, pseudoElement = null) {
  if (isElementNode(node)) {
    // return node.style[styleName];
    return window.getComputedStyle(node, pseudoElement)[styleName];
  } else {
    throwError('...');
  }
}

function css(node, styleName, value, pseudoElement = null) {
  return !value
    ? getStyle(node, styleName, pseudoElement)
    : setStyle(node, styleName, value);
}

// - addClass()
// - removeClass()
// - hasClass()
// - toggleClass()
// - radioClass(nodeList, index, activeClassName)

// classList API
function addClass(node, ...classNames) {
  if (isElementNode(node)) {
    node.classList.add(...classNames);
  } else {
    throwError('...');
  }
}
function removeClass(node, ...classNames) {
  if (isElementNode(node)) {
    if (classNames.length === 0) {
      // 전달된 classNames 배열의 아이템 개수가 0이면
      // class 속성 값을 비우거나 또는 class 속성을 제거
      // DOM0 API
      // node.className = '';
      node.removeAttribute('class');
    } else {
      // 그렇지 않으면
      node.classList.remove(...classNames);
    }
  } else {
    throwError('...');
  }
}

function hasClass(node, className) {
  if (isElementNode(node)) {
    return node.classList.contains(className);
  } else {
    throwError('...');
  }
}

function toggleClass(node, className) {
  if (isElementNode(node)) {
    hasClass(node, className)
      ? removeClass(node, className)
      : addClass(node, className);
  } else {
    throwError('...');
  }
}

/* DOM 이벤트 유틸리티 -------------------------------------------------------------- */

// - on()
// - off()
// - once()

// function on(node, eventType, eventListener, eventOptions = false) {
//   if (isElementNode(node)) {
//     node.addEventListener(eventType, eventListener, eventOptions);
//   } else {
//     throwError('...');
//   }
// }

function on(node, eventType, eventListener, eventOptions = false) {
  if (isElementNode(node)) {
    if (isString(eventType)) {
      console.log('eventType is string');
      node.addEventListener(eventType, eventListener, eventOptions);
      return function off() {
        node.removeEventListener(eventType, eventListener, eventOptions);
      };
    }
    if (isObject(eventType)) {
      console.log('eventType is object');
      // 메모(memoization, 기억하다)
      const memoEventTypeAndListeners = {};

      // 객체 순환
      // for(let prop in object) {}
      for (let key in eventType) {
        // 객체 자신(own) 속성만 순환하는 것이 성능에 좋아
        if (eventType.hasOwnProperty(key)) {
          let type = key;
          let listener = eventType[key];

          // 순환될 때의 key, listener
          memoEventTypeAndListeners[key] = listener;

          // 재귀 호출 사용하지 않을 경우
          // node.addEventListener('mouseenter', listener, eventOptions);

          // 재귀 호출 사용 시
          on(node, type, listener, eventOptions);
        }
      }
      // 반환되는 함수는 모든 연결된 이벤트 타입을 해제할 수 있어야 한다.
      return (willRemoveEventType) => {
        // 객체 순환
        // for - in
        // Object.entries
        Object.entries(memoEventTypeAndListeners).forEach(
          ([type, listener]) => {
            if (!willRemoveEventType) {
              console.log(`remove event type: ${type}`);
              node.removeEventListener(type, listener, eventOptions);
            }
            if (willRemoveEventType === type) {
              console.log(`remove event type: ${type}`);
              node.removeEventListener(
                willRemoveEventType,
                listener,
                eventOptions
              );
            }
          }
        );
      };
    }
    // return undefined
  } else {
    throwError('...');
  }
}

function off(node, eventType, eventListener, eventOptions = false) {
  if (isElementNode(node)) {
    node.removeEventListener(eventType, eventListener, eventOptions);
  } else {
    throwError('...');
  }
}

function once(node, eventType, eventListener) {
  on(node, eventType, eventListener, { once: true });
}

/* 테스트 유틸리티 ------------------------------------------------------------------ */

// - expect(received)
//   - .toBe(expected)
//   - .not.toBe(expected)
// - test(description, callback)
// - describe(title, callback)
