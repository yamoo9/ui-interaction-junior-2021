import { throwError } from '../debug/throwError.js';

// expect(전달값).toBe(기대값);
export function expect(received /* 전달 값 */) {
  /* 클로저(closure) */
  /* 클로저 영역의 데이터를 기억할 수 있는 객체 반환 */
  return {
    toBe(expected /* 기대값 */) {
      // 전달값과 기대값이 같지 않다면?
      if (received !== expected) {
        // 오류를 출력해라!
        throwError(
          `전달 값인 ${received}는 기대 값인 ${expected}와 같지 않습니다.`
        );
      }
    },
  };
}
