document.addEventListener("DOMContentLoaded", function() {
  loadTasks();

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask(taskText, save = true) {
    taskText = taskInput.value.trim();

    if (taskText == "") {
      alert("Enter a task.");
    }
    else {
      const listTask = document.createElement('li');
      listTask.textContent = taskText;

      const buttonTask = document.createElement('button');
      buttonTask.textContent = "Remove";
      buttonTask.classList.add('remove-btn');

      // buttonTask.onclick = function() {
      //   listTask.remove();

      listTask.appendChild(buttonTask);
      taskList.appendChild(listTask);

      buttonTask.onclick = function() {
        taskList.removeChild(listTask);
      taskInput.value = "";
      };

      // listTask.appendChild(buttonTask);
      // taskList.appendChild(listTask);

      // taskInput.value = "";
    }

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

  }

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask(taskText);
    }
  })

  document.addEventListener("DOMContentLoaded", function (addTask) {});

});