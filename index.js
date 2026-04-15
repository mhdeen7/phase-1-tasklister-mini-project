document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("form submitted");

    const taskValue = e.target["new-task-description"].value;
    console.log(taskValue);

    const newTask = {
      description: taskValue
    };

    buildToDo(newTask);
  });

  function buildToDo(task) {
    console.log("buildToDo running");

    const li = document.createElement("li");
    li.textContent = task.description;

    taskList.appendChild(li);
  }

});


