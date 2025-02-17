const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const name = form.elements["name"].value;
  const email = form.elements["mail"].value;
  console.log({
    name : name,
    email : email
  })
})