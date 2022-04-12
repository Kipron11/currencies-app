// @ts-ignore

const buttonEl1 = document.querySelector<HTMLButtonElement>('.button1-js-box-toggle-yellow');
const buttonEl2 = document.querySelector<HTMLButtonElement>('.button2-js-box-change-text');
const buttonEl3 = document.querySelector<HTMLButtonElement>('.button3-js-box-disappear');
const buttonEl4 = document.querySelector<HTMLButtonElement>('.button4-js-box-toggle-visibility');
const buttonEl5 = document.querySelector<HTMLButtonElement>('.button5-js-box-random-color');
const buttonEl6 = document.querySelector<HTMLButtonElement>('.button6-js-box-timer');
const buttonEl7 = document.querySelector<HTMLButtonElement>('.button7-js-box-color-body-color');

const boxEl1 = document.querySelector<HTMLDivElement>('.box-1-js-box-toggle-yellow');
const boxEl2 = document.querySelector<HTMLDivElement>('.box2-js-box-change-text');
const boxEl3 = document.querySelector<HTMLDivElement>('.box3-js-box-disappear');
const boxEl4 = document.querySelector<HTMLDivElement>('.box-4-js-box-toggle-visibility');
const boxEl5 = document.querySelector<HTMLDivElement>('.box5-js-box-random-color');
const boxEl6 = document.querySelector<HTMLDivElement>('.box6-js-box-timer');
const boxesEl = document.querySelectorAll<HTMLDivElement>('.box');
const body = document.querySelector<HTMLDivElement>('.body');

const Inputbox = document.querySelector<HTMLInputElement>('.input');
const Inputtext = document.querySelector<HTMLSpanElement>('.input--text');

buttonEl1.addEventListener('click', () => {
  if (boxEl1.style.background === 'rgb(31, 194, 174)') {
    boxEl1.style.background = 'yellow';
  } else { boxEl1.style.background = 'rgb(31, 194, 174)'; }
});

buttonEl2.addEventListener('click', () => {
  if (boxEl2.innerText === 'FAIL') {
    boxEl2.innerText = 'SUCCESS';
  } else {
    boxEl2.innerText = 'FAIL';
  }
});

buttonEl3.addEventListener('click', () => boxEl3.classList.add('hidden'));

buttonEl4.addEventListener('click', () => boxEl4.classList.toggle('hidden'));

buttonEl5.addEventListener('click', () => {
  const colors = ['rgb(31, 194, 174)', 'yellow', 'blue', 'red', 'purple'];
  const min = 0;
  const max = 4;
  const BgIndex = Math.floor(Math.random() * (max - min + 1) + min);
  boxEl5.style.backgroundColor = colors[BgIndex];
  boxEl5.innerText = BgIndex.toString();
});

buttonEl6.addEventListener('click', () => {
  let index = 0;
  const interval = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    index++;
    boxEl6.innerText = index.toString();
    if (index === 10) {
      clearInterval(interval);
    }
  }, 3000);
});

buttonEl7.addEventListener('click', () => {
  body.style.background = '#000000';
  boxesEl.forEach((box) => {
    // eslint-disable-next-line no-param-reassign
    box.style.background = '#18D5E1';
  });
});

boxEl1.addEventListener('mouseenter', () => {
  if (boxEl1.style.background === 'rgb(31, 194, 174)') {
    boxEl1.style.background = 'red';
  } else { boxEl1.style.background = 'rgb(31, 194, 174)'; }
});

boxEl5.addEventListener('mouseenter', () => {
  let index = 0;
  const interval = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    index++;
    boxEl5.innerText = index.toString();
    if (index === 10) {
      clearInterval(interval);
    }
  }, 1000);
  const zero = 0;
  boxEl5.addEventListener('mouseleave', () => {
    clearInterval(interval);
    boxEl5.innerText = zero.toString();
  });
});

Inputbox.addEventListener('input', () => {
  Inputtext.innerText = Inputbox.value;
});
