const baseURL = 'https://jsonplaceholder.typicode.com/todos/'

export const getTodoListAPI = () => {
  let todoList = fetch(baseURL).then(response => response.json())
  return todoList
}

export const deleteTodoAPI = id => {
  fetch([baseURL, id].join('/'), {
    method: 'DELETE',
  }).then(response => response.json())
}

export const addTodoAPI = todo => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(res => res.json())
}
