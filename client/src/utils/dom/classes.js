import { isElementNode, throwError } from '../types/index.js';

export function addClass(node, ...classNames) {
  if (isElementNode(node)) {
    node.classList.add(...classNames);
  } else {
    throwError('...');
  }
}

export function removeClass(node, ...classNames) {
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

export function hasClass(node, className) {
  if (isElementNode(node)) {
    return node.classList.contains(className);
  } else {
    throwError('...');
  }
}

export function toggleClass(node, className) {
  if (isElementNode(node)) {
    hasClass(node, className)
      ? removeClass(node, className)
      : addClass(node, className);
  } else {
    throwError('...');
  }
}
