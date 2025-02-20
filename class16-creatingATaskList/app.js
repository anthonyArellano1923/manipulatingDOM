const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const toggleThemeBtn = document.getElementById('toggle-theme-btn')




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

function deleteElementFromLocalStorage(task) {
  const listOfTasks = JSON.parse(localStorage.getItem("tasks"))
  const newList = listOfTasks.filter( (taskElement => taskElement != task.firstChild.textContent.trim()))
  localStorage.setItem("tasks", JSON.stringify(newList))
}

function saveDeletedTasksInLocalStorage(task) {
  const tasksDeleted = JSON.parse(localStorage.getItem('tasksDeleted')) || []
  tasksDeleted.push(task.firstChild.textContent.trim())
  localStorage.setItem('tasksDeleted', JSON.stringify(tasksDeleted))
}

function saveTasksInLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasksInLocalStorage(){ 
  taskList.textContent = ""
  const taskListUpdated = JSON.parse(localStorage.getItem('tasks')) || []
  taskListUpdated.forEach((task) => {
    createTask(task)
  })
}

function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll('li'))
  const listUpdated = tasks.map((task) => task.firstChild.textContent.trim())
  localStorage.setItem('tasks', JSON.stringify(listUpdated))
}

function deleteTask(task){
  task.remove()
}

function editTask(task) {
  const oldTask = task.firstChild.textContent.trim()
  const newTask = prompt('Edit task', oldTask)
  if(newTask) {
    task.firstChild.textContent = newTask
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const index = tasks.indexOf(oldTask)
    if (index !== -1) {
      tasks[index] = newTask
    }
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}


document.addEventListener('DOMContentLoaded', () => {
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value
    createTask(task)
    saveTasksInLocalStorage(task)
  })
  
  taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-btn')) {
      saveDeletedTasksInLocalStorage(event.target.parentElement)
      deleteElementFromLocalStorage(event.target.parentElement)
      deleteTask(event.target.parentElement)
    } else if (event.target.classList.contains('edit-btn')) {
      editTask(event.target.parentElement)
      updateLocalStorage()
    }
  })

  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    const theme = document.body.classList.contains('dark-theme') ? "dark" : "light"
    localStorage.setItem("theme", theme)
  })
  if(localStorage.theme == 'dark'){
    document.body.classList.add('dark-theme')
  }
  loadTasksInLocalStorage();
});


