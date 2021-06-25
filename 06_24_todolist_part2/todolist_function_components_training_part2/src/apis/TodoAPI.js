const baseUrl = 'https://jsonplaceholder.typicode.com';
const todoPath = 'todos';

export const getAllTodos = () =>
  fetch([baseUrl, todoPath].join('/'))
    .then((response) => response.json());

export const addTodo = (newtodo) =>
  fetch([baseUrl, todoPath].join('/'), {
    method: 'POST',
    body: JSON.stringify(newtodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());

export const deleteTodo = (id) =>
  fetch([baseUrl, todoPath, id].join('/'), {
    method: 'DELETE',
  }).then(res => res.json());
