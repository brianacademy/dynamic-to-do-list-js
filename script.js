document.addEventListener("DOMContentLoaded", function() {
  let addButton = document.getElementById("add-task-btn");
  let taskInput = document.getElementById("task-input");
  let taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText == "") {
      alert("Enter a task.");
    }
    else {
      const listTask = document.createElement('li');
      listTask.textContent = taskText;

      const buttonTask = document.createElement('button');
      buttonTask.textContent = "Remove";
      buttonTask.setAttribute("class", "remove-btn");

      buttonTask.onclick = function() {
        listTask.remove();
      };

      listTask.appendChild(buttonTask);
      taskList.appendChild(listTask);

      taskInput.value = "";
    }
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      addTask();
    }
  })

  document.addEventListener("DOMContentLoaded", function (addTask) {});

});