const uL = document.getElementById('parent')

const ulChild = uL.children
const firstChild = uL.firstElementChild
const lastChild = uL.lastElementChild
const previousSibling = uL.previousElementSibling
const nextSibling = uL.nextElementSibling

console.log({
  hijoDirecto: ulChild,
  primerHijo: firstChild,
  ultimoHijo: lastChild,
  hermanoAnterior: previousSibling,
  hermanoSiguiente: nextSibling
})

const liItem = document.querySelector('li')

const parentElement = liItem.parentElement
const grandParentElement = liItem.parentElement.parentElement
const grandGrandParentElement = liItem.closest('ul')
const parentNodes = liItem.parentNode

console.log({
  padre: parentElement,
  abuelo: grandParentElement,
  bisabuelo: grandGrandParentElement,
  nodosPadre: parentNodes
})