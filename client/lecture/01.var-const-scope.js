// -------------------------------------------------
// 01. 변수, 상수 & 스코프
// -------------------------------------------------
// var vs. let
// let vs. const
// scope (function / block)
// -------------------------------------------------

// 원시 데이터 타입
let useCoin = false;
let count = 10;

count += 20; // 30

let hasCoin = true;
let money = 10000;

// constant 상수
const PI = 3.141592;

// 객체 타입은 상수로 정의
// 객체(개체, object) 데이터 타입
// - plain object
// - array object
// - function object

// 영역의 최상단 -------------------------------
// 끌어 올린다(hoist, lift up)

function getNode(selector) {
  return document.querySelector(selector);
}

// 함수, 배열, 객체와 같은 유형은 초기 선언 과정에서
// 데이터 유형이 정해진 후 변경되면 안되므로 const 사용이 권장

// 함수 (표현)식
const sum = function (a, b) {
  console.log(a + b);
  return a + b;
  // return undefined;
};

// 화살표 함수 식
const multiply = (a) => a * a;

// DOM Node (Element) Object
const bodyNode = getNode('body');

const setAttr = (node, prop, value) => {
  if (node && node.nodeType === document.ELEMENT_NODE) {
    node.setAttribute(prop, value);
    // return undefined;
  }
};

const getAttr = (node, prop) => {
  if (node && node.nodeType === document.ELEMENT_NODE) {
    return node.getAttribute(prop);
    // return undefined;
  }
};
