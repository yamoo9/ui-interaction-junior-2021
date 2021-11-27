import { describe, test, expect, $, attr } from '../utils/index.js';

const appNode = $('#app');
const headlinenode = $('h1,h2,h3,h4,h5,h6', appNode);

describe('앱 마크업', () => {
  // 문서의 제목은 "테스트 주도 개발 및 모듈 프로그래밍의 필요성" 이다.
  test(`문서의 제목은 "테스트 주도 개발 및 모듈 프로그래밍의 필요성" 이다.`, () => {
    expect(document.title).toBe('테스트 주도 개발 및 모듈 프로그래밍의 필요성');
  });

  // 문서에 #app 요소가 포함되어야 한다.
  test(`문서에 #app 요소가 포함되어야 한다.`, () => {
    expect(appNode).toBeInTheDocument();
  });

  // #app 요소 안에는 제목(h1-6) 요소가 포함되어야 한다.
  test(`#app 요소 안에는 제목(h1-6) 요소가 포함되어야 한다.`, () => {
    const hasHeadlineNode = !!headlinenode;
    expect(hasHeadlineNode).toBeTruthy();
  });

  // #app 요소의 언어 속성 값은 'en'이다.
  test(`#app 요소의 언어 속성 값은 'en'이다.`, () => {
    expect(attr(appNode, 'lang')).toBe('en');
  });

  // #app 요소의 제목 내용은 "ECMAScript Modules"이다.
  test(`#app 요소의 제목 내용은 "ECMAScript Modules"이다.`, () => {
    expect(headlinenode.textContent).toBe('ECMAScript Modules');
  });

  // #app의 제목 요소는 "app__headline" 클래스 이름을 가진다.
  test(`#app의 제목 요소는 "app__headline" 클래스 이름을 가진다.`, () => {
    expect(headlinenode).toHasClass('app__headline');
  });
});
