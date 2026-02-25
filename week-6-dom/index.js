const INPUT_ID = "input-box";
const PARENT_ID = "parent-div";

let counter = 1;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveTodos = (todo) => {
  localStorage.setItem("todos", JSON.stringify(todo));
};

const getInputData = () => {
  const rawData = document.getElementById(INPUT_ID);
  let todo = rawData.value;
  if (todo == "") {
    return;
  }
  rawData.value = "";
  return todo;
};

const deleteTodo = (element, removetodo) => {
  element.remove();
  todos = todos.filter((t) => t !== removetodo);
  saveTodos(todos);
};

const addDivElement = (todo) => {
  const addDiv = document.createElement("div");
  const span = document.createElement("span");
  span.innerHTML = `${counter++}. ${todo}`;
  span.style.marginRight = "10px";
  addDiv.style.marginBottom = "10px";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete todo";
  deleteButton.onclick = () => {
    deleteTodo(addDiv, todo);
  };

  addDiv.appendChild(span);
  addDiv.appendChild(deleteButton);

  document.getElementById(PARENT_ID).appendChild(addDiv);
};

const loadTodos = () => {
  todos.forEach((todo) => {
    addDivElement(todo);
  });
};

const addTodo = () => {
  const todo = getInputData();
  if (!todo) return;
  todos.push(todo);
  saveTodos(todos);
  addDivElement(todo);
};

loadTodos();
