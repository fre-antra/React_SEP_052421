export const todoAPI = (() => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([baseUrl, todoPath].join('/'))
            .then((response) => response.json());

    const addTodo = (newtodo) =>
        fetch([baseUrl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newtodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json());

    const deleteTodo = (id) =>
        fetch([baseUrl, todoPath, id].join('/'), {
            method: 'DELETE',
        });

    return {
        getAllTodos,
        deleteTodo,
        addTodo
    }
})();