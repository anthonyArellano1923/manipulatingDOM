const contentArea = document.getElementById('listArea')
const buttons = {
  prepend: prependElement,
  append: appendElement,
  before: insertBeforeElement,
  after: insertAfterElement
}

const itemA = document.createElement('li')
itemA.textContent = 'Item A (preended)'
const itemB = document.createElement('li')
itemB.textContent = 'Item B (appended)'
const itemC = document.createElement('h3')
itemC.textContent = 'Tittle of list (inserted before)'
const itemD = document.createElement('p')
itemD.textContent = 'Text of list (inserted after)'

function prependElement() {
  contentArea.prepend(itemD)
}

function appendElement() {
  contentArea.append(itemD)
}

function insertBeforeElement() {
  contentArea.before(itemD)
} 

function insertAfterElement() {
  contentArea.after(itemD)
}

Object.entries(buttons).forEach( ([id, fnct]) => {
  document.getElementById(id).addEventListener('click', fnct)
})