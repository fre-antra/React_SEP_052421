// Model View Controller

const todoAPI = (() => {

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

const View = (() => {

    const domString = {
        todolist: 'todolist__content',
        removebtn: 'btn-remove',
        input: 'todolist__input'
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
                    <button 
                        class="btn-remove" 
                        id="${ele.id}"
                    >
                        X
                    </button>
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

const Model = ((api, view) => {
    class Todo {
        constructor(title) {
            this.userId = 8;
            this.title = title;
            this.completed = false;
        }
    }

    class State {
        #todolist = [];
        #input = '';

        get input() {
            return this.#input;
        }

        set input(input) {
            const inputelement = document.querySelector('.' + view.domString.input);
            inputelement.value = input;
            this.#input = input;
        }

        get todolist() {
            return this.#todolist;
        }

        set todolist(newlist) {
            this.#todolist = newlist;

            const todoElement = document.querySelector('.' + view.domString.todolist);
            const todoTmp = view.createTodoTmp(this.#todolist);
            view.render(todoElement, todoTmp);
        }
    }

    const getAllTodos = api.getAllTodos;
    const deleteTodo = api.deleteTodo;
    const addTodo = api.addTodo;

    return {
        Todo,
        State,
        getAllTodos,
        deleteTodo,
        addTodo
    }
})(todoAPI, View);

const AppController = ((model, view) => {
    const state = new model.State();

    const addTaskToList = () => {
        const input = document.querySelector('.' + view.domString.input);

        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                
                state.input = event.target.value;
                const newTodo = new model.Todo(state.input);
        
                model.addTodo(newTodo).then(data => {
                    state.todolist = [data, ...state.todolist];
                });

                state.input = '';

                // event.target.value = '';
            }
        })
    }

    const removeTodoFromList = () => {
        const todolist = document.querySelector('.' + view.domString.todolist);
        todolist.addEventListener('click', (event) => {
            state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);
            model.deleteTodo(+event.target.id);
        });
    }

    const init = () => {
        model.getAllTodos().then(data => {
            state.todolist = data;
            removeTodoFromList();
            addTaskToList();
        });
    }

    return {
        init
    }
})(Model, View);

AppController.init();
