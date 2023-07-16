const icon = document.getElementById("inputIcon");
const input = document.getElementById("inputField");
const wrapper = document.querySelector(".todoBoard");
const message = document.querySelector(".message");
const button = document.querySelector(".btn");
const checkbox = document.querySelector(".myCheckboxClass");
let todoItem = document.querySelector(".emptyTodo");
const epmtyTodoIcon = document.querySelector(".board_img");

// function to toggle input field
icon.addEventListener("click", () => {
  if (input.style.display === "none") {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
});

// Load todos from local storage when the page loads
// window.addEventListener("load", loadTodos);

// function to add todo
let todos = [];

const addTodo = (e) => {
  e.preventDefault();
  const todo = input.value;
  const today = new Date();

  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = `${date} @${time}`;

  const todoId = today.getTime();

  todos.push({ todo, isCompleted: false, posted: dateTime, id: todoId });

  localStorage.setItem("todos", JSON.stringify(todos));

  // todoData = JSON.parse(localStorage.getItem("todos")) || [];

  const todoContainer = document.createElement("label");
  todoContainer.classList.add("todo-container");

  // const todos = JSON.parse(localStorage.getItem("todos"));

  // if (todos) {
  //   todos.forEach((todo) => {
  //     const todoContent = `
  //   <div class="todoContent">
  //   <div class="todo">
  //     <input type="checkbox" class="myCheckboxClass" />
  //     <p>${todo}</p>
  //   </div>
  //   <div class="edit">
  //     <i class="fa fa-pencil-square-o" aria-hidden="true" data-todo-id=${todoId}></i>
  //     <i class="fa fa-trash-o" aria-hidden="true"></i>
  //   </div>
  // </div>
  // <span>Posted: ${dateTime}</span>
  //   `;

  //     todoContainer.innerHTML = todoContent;
  //     todoItem.appendChild(todoContainer);
  //     // todoList.appendChild(listItem);
  //   });
  // }

  const todoContent = `
    <div class="todoContent">
    <div class="todo">
      <input type="checkbox" class="myCheckboxClass" />
      <p>${todo}</p>
    </div>
    <div class="edit">
      <i class="fa fa-pencil-square-o" aria-hidden="true" data-todo-id=${todoId}></i>
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    </div>
  </div>
  <span>Posted: ${dateTime}</span>
    `;

  todoContainer.innerHTML = todoContent;

  // condition to clear input field, remove display message and show todos
  if (todo.trim() !== "") {
    todoItem.appendChild(todoContainer);

    input.value = "";
    message.style.display = "none";
    icon.style.display = "none";
    epmtyTodoIcon.style.display = "none";
  } else {
    message.style.display = "block";
  }
};

// function for handle submit with enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo(e);
  }
});


// function loadTodos() {
//   const todos = JSON.parse(localStorage.getItem("todos"));

//   if (todos) {
//     todos.forEach((todo) => {
//       const todoContent = `
//     <div class="todoContent">
//     <div class="todo">
//       <input type="checkbox" class="myCheckboxClass" />
//       <p>${todo}</p>
//     </div>
//     <div class="edit">
//       <i class="fa fa-pencil-square-o" aria-hidden="true" data-todo-id=${todoId}></i>
//       <i class="fa fa-trash-o" aria-hidden="true"></i>
//     </div>
//   </div>
//   <span>Posted: ${dateTime}</span>
//     `;

//       todoContainer.innerHTML = todoContent;
//       todoItem.appendChild(todoContainer);
//       // todoList.appendChild(listItem);
//     });
//   }
// }
button.addEventListener("click", addTodo);
