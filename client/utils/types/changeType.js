import { throwError } from '../debug/throwError.js';

export const makeArray = (likeArrayObject) => {
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
