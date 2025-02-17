// const liItems = document.querySelectorAll('li');

// liItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     item.classList.toggle('highlight');
//   })
// })

const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  const item = event.target.closest('li');
  item.classList.toggle('highlight');
})