// -------------------------------------------------
// 03. 함수 정의(선언), 호출
// -------------------------------------------------
// Define & Calling Functions
// function literal vs. function declaration
// Arrow function
// `this` in Arrow Function
// -------------------------------------------------

const handleDocClick = function (e) {
  console.group(handleDocClick.name);
  console.log('target = ', e.target); // HTMLBodyElement
  console.log('this = ', this); // HTMLElement
  console.groupEnd();
};

const handleClickUsingArrowFunction = (e) => {
  console.group(handleClickUsingArrowFunction.name);
  console.log('target = ', e.target); // HTMLBodyElement
  console.log('this = ', this); // window object
  console.groupEnd();
};

document.body.addEventListener('click', handleDocClick);
document.body.addEventListener('click', handleClickUsingArrowFunction);

const dog = {
  name: 'pug',
  getName: function () {
    return this.name; // this === dog object
  },
  showName: () => this.name, // this ???
};
