const taskForm = document.getElementById('task-form');

const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value
  const liItem = document.createElement('li');
  const deleteBtn = document.createElement('span')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = '❌'
  const editBtn = document.createElement('span')
  editBtn.classList.add('edit-btn')
  editBtn.textContent = '✏️'
  liItem.textContent = task;
  liItem.append(deleteBtn, editBtn)
  taskList.append(liItem)
})