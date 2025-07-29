const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;
  listItem.classList.add('task-item');

  taskList.appendChild(listItem);
  taskInput.value = '';
}

// Add click event to button
addButton.addEventListener('click', addTask);

// Add Enter key support
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
