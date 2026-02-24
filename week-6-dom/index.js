const INPUT_ID = "input-box";
const PARENT_ID = "parent-div";

let counter = 1;

const getInputData = () => {
  const rawData = document.getElementById(INPUT_ID);
  let todo = rawData.value;
  if (todo == "") {
    return;
  }
  rawData.value = "";
  return todo;
};

const deleteTodo = (element) => {
  element.remove();
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
    deleteTodo(addDiv);
  };

  addDiv.appendChild(span);
  addDiv.appendChild(deleteButton);

  document.getElementById(PARENT_ID).appendChild(addDiv);
};

const addTodo = () => {
  const todo = getInputData();
  if (!todo) return;
  addDivElement(todo);
};
