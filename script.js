let addTaskButton = document.getElementById("add-task-button");
let addTaskInput = document.getElementById("add-task-input");
let tasksContainer = document.querySelector(".tasks");
addTaskButton.addEventListener("click", () => {
  const taskText = addTaskInput.value.trim();
  if (taskText === "") {
    alert("Task must not be empty");
    // return;
  }
  tasksContainer.innerHTML += `<div class="task"><p>${taskText}</p></div>`;
  addTaskInput.value = "";
});
