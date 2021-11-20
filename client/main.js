function main() {
  const headlineNode = $('h1');
  attr(headlineNode, 'tabindex', '0');

  // const clickOff = on(headlineNode, 'click', (e) => {
  //   console.log('clicked headline');
  // });

  // window.setTimeout(() => {
  //   console.log('remove listener');
  //   clickOff();
  // }, 1000);

  // think: 작성할 API를 어떻게 사용할까?
  const allOff = on(headlineNode, {
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

  // allOff();
}

window.addEventListener('DOMContentLoaded', main);
