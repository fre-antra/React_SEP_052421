const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

export function getTodos() {
  console.log('Fetch Data....');
  return fetch(baseURL).then((res) => res.json());
}

export function addTodo(newTodo) {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((data) => data.json());
}

export function deleteTodo(id) {
  return fetch([baseURL, id].join('/'), {
    method: 'DELETE',
  }).then((res) => res.json());
}
