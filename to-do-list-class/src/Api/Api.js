
const url = "https://jsonplaceholder.typicode.com/todos";

function fetchList() {
  return fetch(url).then((response) => response.json());
}

const addTodo = (newTodo) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());

const deleteTodo = (id) =>{
  console.log(id)
  return fetch([url, id].join("/"), {
    method: "DELETE",
  }).then((res) => res.json());
}

export { fetchList, addTodo, deleteTodo };