// -------------------------------------------------
// 04. 조건 처리
// -------------------------------------------------
// - if, else if, else
// - switch case, default
// - expression, tertiary
// - try, catch
// -------------------------------------------------

// 주사위 굴리기(rollingDice) 함수를 작성하세요.
function rollingDice(max = 6) {
  return Math.floor(Math.random() * max + 1);
}

// 굴려서 나온 주사위 값의 홀수인지 여부를 반환하는 함수를 작성하세요.
// 홀수(odd): 1, 3, 5 → isOdd() // boolean
const isOdd = (value) => {
  // 만약에(조건) {
  //   값 반환 참
  // } 그렇지않으면 {
  //   값 반환 거짓
  // }
  /* if (value % 2 === 1) {
    return true;
  } else {
    return false;
  } */
  
  // 값 반환 조건 ? 참 : 거짓
  /* return value % 2 === 1 ? true : false; */

  // 값 반환 (값 그 자체가 boolean이기 때문2)
  return value % 2 === 1;
}

// 짝수(even): 2, 4, 6 → isEven() // boolean
// const isEven = (value) => {
//   return !isOdd(value)
// }
const isEven = (value) => !isOdd(value);

// 주사위를 굴립니다.
// 주사위의 값이 홀수인지 여부를 확인합니다.
let value = rollingDice(); // 1 - 6 정수

// if (isOdd(value)) {
//   console.log(value, ' = 홀수입니다.');
// } else {
//   console.log(value, ' = 짝수입니다.');
// }


// 주사위 값이 홀수라면?
// Console 패널에 주사위 값이 '홀수'임을 출력하세요.
// 그렇지 않다면?
// Console 패널에 주사위 값이 '홀수'가 아님을 오류 메시지로 출력하세요.
// if (isOdd(value)) {
//   console.log(value, ' = 홀수입니다.');
// } else {
//   // console.error(value, ' = 짝수입니다.');
//   // ES5 (2009)
//   // throw new Error(value + ' = 짝수입니다.');
//   // ES6 (2015) template literal
//   throw new Error(`${value} = 짝수입니다.`);
// }


const throwError = (message) => {
  throw new Error(message);
};

// 조건() ? 참인경우 실행() : 거짓인경우 실행()
isOdd(value) ? 
  console.log(value, ' = 홀수입니다.') : 
  throwError(`${value} = 짝수입니다.`);


// 주루마블 게임을 하는 중입니다.
// 던져서 나온 주사위 값에 따라 벌칙이 무엇인지 반환하는 페널티 함수를 작성하세요.
// - "1잔 원샷"
// - "지목 원샷"
// - "여성 원샷"
// - "남성 원샷"
// - "다 같이 원샷"
// - "나 빼고 원샷"

function displayPanerty(value) {
  switch(value) {
    case 1: return "1잔 원샷";
    case 2: return "지목 원샷";
    case 3: return "여성 원샷";
    case 4: return "남성 원샷";
    case 5: return "다 같이 원샷";
    case 6: return "나 빼고 원샷";
  }
}


// 코드 리팩터링(refactoring)
// 앞서 작성한 코드에서 `문`을 `식`으로 변경 가능한 부분을 찾아 수정해봅니다.


// 벌칙 카드에서 처리 가능하지 않은 값이 전달될 경우, 오류를 출력하는 구문을 작성해봅니다.
