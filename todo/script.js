let addTaskButton = document.getElementById("add-task-button");
let addTaskInput = document.getElementById("add-task-input");
let tasksContainer = document.querySelector(".tasks");
addTaskButton.addEventListener("click", () => {
  const taskText = addTaskInput.value.trim();
  if (taskText === "") {
    alert("Task must not be empty");
    return;
  }
  const task = document.createElement("div");
  task.classList.add("task");
  task.innerHTML = `
  <p class="task-text">${taskText}</p>
  <div class="delete-task">
    <i class="fa fa-lg fa-square-minus delete-task-button"></i>
  </div>`;
  tasksContainer.appendChild(task);
  addTaskInput.value = "";
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-task-button")) {
    event.target.closest(".task").remove();
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("task-text")) {
    event.target.closest(".task").classList.toggle("task-completed");
  }
});
