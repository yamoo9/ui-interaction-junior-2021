function main() {
  const headlineNode = $('h1');
  attr(headlineNode, 'tabindex', '0');

  const clickOff = on(headlineNode, 'click', (e) => {
    console.log('clicked headline');
  });

  // window.setTimeout(() => off(headlineNode, 'click', handleClick), 3000);
  window.setTimeout(() => {
    console.log('remove listener');
    clickOff();
  }, 1000);

  // const handleClick = (e) => {
  //   console.log('clicked headline');
  // };

  // headlineNode.addEventListener('click', handleClick, false);

  // window.setTimeout(() => {
  //   console.log('remove event listener');
  //   headlineNode.removeEventListener('click', handleClick, false);
  // }, 10000);

  // once(headlineNode, 'click', (e) => {
  //   console.log(e);
  //   console.log('clicked headline');
  // });
}

window.addEventListener('DOMContentLoaded', main);
