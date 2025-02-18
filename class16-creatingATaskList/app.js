const taskForm = document.getElementById('task-form');

const taskList = document.getElementById('task-list');

loadTasksInLocalStorage()

function createTask(task) {
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
}

function saveTasksInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasksInLocalStorage(){ 
  const taskList = JSON.parse(localStorage.getItem('tasks'))
  taskList.forEach((task) => {
    createTask(task)
  })
}

function deleteTask(task){
  task.remove()
}

function editTask(task) {
  const newTask = prompt('Edit task', task.firstChild.textContent)
  if(newTask) {
    task.firstChild.textContent = newTask
  }
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value
  createTask(task)
  saveTasksInLocalStorage(task)
})

taskList.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')) {
    deleteTask(event.target.parentElement)
  } else if (event.target.classList.contains('edit-btn')) {
    editTask(event.target.parentElement)
  }
})
