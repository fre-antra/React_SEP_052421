// Model View Controller

const todoAPI = (() => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';

    const getAllTodos = () =>
        fetch([baseUrl, todoPath].join('/'))
            .then((response) => response.json());

    return {
        getAllTodos
    }
})();

const View = (() => {

    const domString = {
        todolist: 'todolist__content'
    }
    
    const render = (element, htmlString) => {
        element.innerHTML = htmlString;
    }

    const createTodoTmp = (todoArray) => {
        let htmlString = '';
        todoArray.forEach(ele => {
            htmlString += `
                <li>
                    <span>
                        ${ele.title}
                    </span>
                </li>
            `;
        });
        return htmlString;
    }

    return {
        domString,
        render,
        createTodoTmp
    }
})();

const Model = ((api) => {
    class Todo {
        constructor(userId, id, title, completed) {
            this.userId = userId;
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
    }

    const getAllTodos = api.getAllTodos;

    return {
        getAllTodos,
        Todo
    }
})(todoAPI);

const AppController = ((model, view) => {

    const todoElement = document.querySelector('.' + view.domString.todolist);

    const init = () => {
        model.getAllTodos().then( data => {
            const todoTmp = view.createTodoTmp(data);
            view.render(todoElement, todoTmp);
        });
    }

    return {
        init
    }
})(Model, View);

AppController.init();
