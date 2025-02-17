const container = document.querySelector('.container');
const button = document.querySelector('#btn');

button.addEventListener('click', function(event) {
  console.log(event.target)
  console.log(event.type)
  console.log(event.target.id)
})

container.addEventListener('click', function(event) {
  console.log(event.target)
  console.log(event.type)
  console.log(event.target.id)
})