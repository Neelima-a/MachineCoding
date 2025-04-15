//Create UI for adding the to do task
// add edit and delete buttons
//show the list of task on click of add button
let todoForm = document.querySelector("form");
let todoAddBtn = document.querySelector("#add-button");
let taskInput = document.querySelector("#todo-input");
let todoList = document.querySelector(".todo-list");
let todoItem = document.querySelector(".todo");
let deleteBtn = document.querySelector(".deletebtn");

let allTodos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

const addTodo = () => {
  const todoText = taskInput.value.trim();
  if (!todoText) {
    alert("Enter the task");
    return;
  }
  allTodos.push(todoText);
  console.log(allTodos);
};
