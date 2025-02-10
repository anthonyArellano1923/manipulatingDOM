const button = document.querySelector('button');
const menu = document.querySelector('menu');
menu.className = 'main-menu';

console.log(menu.classList);

button.addEventListener('click', () => {
  if(menu.classList.contains('invisible')) {
    menu.classList.toggle('invisible');
  } else {
    menu.classList.add('invisible');
  }
})