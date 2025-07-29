const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.onclick = () => taskList.removeChild(li);

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
