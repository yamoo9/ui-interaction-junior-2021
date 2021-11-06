// -------------------------------------------------
// 02. JavaScript 타입 & 타입 체크
// -------------------------------------------------
// JavaScript Types
// typeof, instanceof, constructor, Array.isArray
// -------------------------------------------------

let any,
  specialNode = null,
  hasMommy = true,
  coin = 10000,
  message = 'happy x-mas';

const list = [32, 12, 9];

const human = {
  name: '김하울',
  age: 21,
  hasJob: true,
  isLive: true,
};

const makeArray = (likeArray) => Array.from(likeArray);

function isArray(data) {
  // data !== null | undefined
  // typeof data === 'object'
  // data.length
  if (data && typeof data === 'object' && 'length' in data) {
    return true;
  }

  return false;
}

const jQuery = {
  isArray: isArray,
};
