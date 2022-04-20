const menuEl = document.querySelector<HTMLDivElement>('.js-nav');
const buttonEl = document.querySelector<HTMLButtonElement>('.js-watch');
const toastEl = document.querySelector<HTMLDivElement>('.js-toast');
const libraryEL = document.querySelector<HTMLDivElement>('.js-library');
const buttonPrevious = document.querySelector<HTMLButtonElement>('.js-previous');
const buttonNext = document.querySelector<HTMLButtonElement>('.js-next');
const footerEl = document.querySelector<HTMLDivElement>('.js-footer');
const inputEl = document.querySelector<HTMLInputElement>('.js-input');
const emailButtonEl = document.querySelector<HTMLButtonElement>('.js-footerbtn');
const emailBox = document.querySelector<HTMLDivElement>('.js-email');
const errorMsg = document.querySelector<HTMLParagraphElement>('.js-validation');

const menu = ['Home', 'Events', 'About', 'Blog', 'Contact'];

const images = [
  ['assets/images/Bejing.png', 'Beijing'],
  ['assets/images/Turkey.png', 'Turkey'],
  ['assets/images/Pakistan.png', 'Pakistan'],
];

const footerBackground = ['Pink', 'Purple', 'Green', 'Orange', 'Red'];

const inputMemory: string[] = [];

menu.forEach((item) => {
  const link = document.createElement('a');
  const text = document.createTextNode(item);
  link.classList.add('nav__menu--item');
  link.href = '#';
  link.appendChild(text);
  menuEl.appendChild(link);
});

buttonEl.addEventListener('click', () => {
  toastEl.style.display = 'block';
  setTimeout(() => {
    toastEl.style.display = 'none';
  }, 5000);
});

images.forEach((item) => {
  const link = document.createElement('a');
  const image = document.createElement('img');
  const box = document.createElement('div');
  box.classList.add('content-library__box');
  // eslint-disable-next-line prefer-destructuring
  image.src = item[0];
  // eslint-disable-next-line prefer-destructuring
  image.alt = item[1];
  image.classList.add('content-library__image');
  // eslint-disable-next-line prefer-destructuring
  link.innerText = item[1];
  link.classList.add('content-library__atag');
  box.appendChild(image);
  box.appendChild(link);
  libraryEL.appendChild(box);
});

buttonPrevious.addEventListener('click', () => {
  const divs = document.getElementsByClassName('content-library__box');
  const save = divs[0];
  const array = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < divs.length; i++) {
    array[i - 1] = divs[i];
  }
  array[array.length] = save;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    libraryEL.append(array[i]);
  }
});

buttonNext.addEventListener('click', () => {
  const divs = document.getElementsByClassName('content-library__box');
  const array = [divs[-1]];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < divs.length; i++) {
    if (i !== divs.length - 1) {
      array[i] = divs[i];
    }
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    libraryEL.append(array[i]);
  }
});

inputEl.addEventListener('input', () => {
  footerEl.style.background = footerBackground[Math.floor(Math.random() * (4 + 1))];
});

const validateInput = (value: string) => {
  const errorsMemory: string[] = [];
  if (value.length < 3 || value.length > 20) {
    errorsMemory.push('Min length = 3, Max length = 20');
  }
  if (!value.includes('@')) {
    errorsMemory.push('@ is required');
  }
  if (value.split('').slice(-3).join('') !== '.lv') {
    errorsMemory.push('.lv is required');
  }
  return errorsMemory;
};

emailButtonEl.addEventListener('click', () => {
  errorMsg.innerText = '';
  if (inputMemory.includes(inputEl.value)) {
    emailButtonEl.disabled = true;
    emailButtonEl.disabled = false;
  } else {
    const errors: string[] = validateInput(inputEl.value);
    if (errors.length !== 0) {
      emailButtonEl.disabled = true;
      emailButtonEl.disabled = false;
      errors.forEach((x) => {
        errorMsg.innerText += `${x}\n`;
      });
    } else {
      const link = document.createElement('p');
      link.textContent = (inputEl).value;
      emailBox.appendChild(link);
      inputMemory.push(inputEl.value);
      (inputEl).value = '';
    }
  }
});
