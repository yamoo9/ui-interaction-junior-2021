// 종속성 모듈을 로드(호출)
// @import url("file path");
// import 모듈 from 파일경로;
import { $, attr, on } from './utils/index.js';

const headlineNode = $('h1');
attr(headlineNode, 'tabindex', '0');

// think: 작성할 API를 어떻게 사용할까?
const allEventOff = on(headlineNode, {
  click(e) {
    console.log('clicked');
  },
  dblclick(e) {
    console.log('dobule cliced');
  },
  mouseenter(e) {
    console.log('entered');
  },
});

allEventOff('dblclick');
