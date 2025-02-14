const container = document.querySelector('.container');
const button = document.querySelector('#btn');

function alertClick() {
  alert('Button clicked');
}

container.addEventListener('mouseover', function() {
  container.style.backgroundColor = 'blue';
})

container.addEventListener('mouseout', function() {
  container.style.backgroundColor = 'red';
})

button.addEventListener('click', alertClick)

setTimeout(() => {
  button.removeEventListener('click', alertClick)}, 2000)