let todoIdFlag = 4;
let todos = [
  { id: 1, title: 'buy a book', completed: false },
  { id: 2, title: 'buy a car', completed: false },
  { id: 3, title: 'buy a bike', completed: false },
];

const getTodosFromDB = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 1000);
  });

const addTodoFromDB = (newTodo) => {
  return new Promise((resolve, reject) => {
    newTodo.id = todoIdFlag++;
    // newTodo.id = todoIdFlag;
    // todoIdFlag = todoIdFlag +1;

    todos = [newTodo, ...todos];
    setTimeout(() => {
      resolve(newTodo);
    }, 1000);
  });
};

const removeTodoFromDB = (id) => {
  return new Promise((resolve, reject) => {
    let removeTodo;
    todos = todos.filter((todo) => {
      if (todo.id === id) {
        removeTodo = todo;
      }
      return todo.id !== id;
    });
    setTimeout(() => {
      resolve(removeTodo);
    }, 1000);
  });
};

module.exports = { getTodosFromDB, addTodoFromDB, removeTodoFromDB };