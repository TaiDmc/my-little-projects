// console.log("Hello world");

const d = document;

d.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!e.target.matches("#todo-form")) return false;

  let $todoList = d.getElementById("todo-list"),
    $item = d.getElementById("todo-item");
  if (!$todoList) return false;
  if (!$item || $item.value.length < 1) return false;

  $todoList.innerHTML += `<li>${$item.value}</li>`;

  //Limpiar item
  $item.value = "";
  $item.focus();
});
