function addTodo() {
  const data = document.getElementById("add-todo");
  const todo = data.value;
  if (todo == "") {
    return;
  }
  data.value = "";

  const addDiv = document.createElement("div");

  const addSpan = document.createElement("span");
  addSpan.innerHTML = todo;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete todo";
  deleteButton.onclick = function () {
    deleteTodo(addDiv);
  };
  addDiv.appendChild(addSpan);
  addDiv.appendChild(deleteButton);

  document.getElementById("parent-div").appendChild(addDiv);
}

function deleteTodo(element) {
  element.remove();
}
