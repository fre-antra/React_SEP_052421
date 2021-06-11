// MVC design pattern
// model view controller


const todoAPI = (() => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const todoPath = 'todos';
    // cannot have {}
    const getAllTodos = () =>
        fetch([baseUrl, todoPath].join('/'))
            .then((response) => response.json());

    const deleteTodo = () =>
        fetch([baseUrl, todoPath].join('/'), {
            method: 'DELETE',
        });

    const addTodo = (newTodo) =>
        fetch([baseUrl, todoPath].join('/'), {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())

    return {
        getAllTodos,
        deleteTodo,
        addTodo
    }
})();


// View: Present data to the user or handles user interaction.
const View = (() => {
    const domString = {
        todolist: 'todo__tasks',
        removebtn: 'btn-remove',
        input: 'todo__input'
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


// Model: It includes all the data and its related logic.
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
            this.#input = input;
        }

        get todolist() {
            return this.#todolist;
        }

        set todolist(newList) {
            this.#todolist = newList;
            const todoElement = document.querySelector('.' + view.domString.todolist);
            const todoTmp = view.createTodoTmp(this.#todolist);
            view.render(todoElement, todoTmp);

            // adding eventlisteners to all buttons
            // const removeButtons = document.querySelectorAll('.' + view.domString.removebtn);
            // removeButtons.forEach((btn) => {
            //     btn.addEventListener('click', (event) => {
            //         // console.log(event.target.id);
            //         // remove the "#" to rerender?
            //         this.todolist = this.todolist.filter((todo) => Number(todo.id) !== Number(event.target.id));
            //     })
            // });


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


// Controller: An interface between Model and View components.
const AppController = ((model, view) => {

    const state = new model.State();

    const addTaskToList = () => {
        const input = document.querySelector('.' + view.domString.input);
        input.addEventListener('keyup', (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                state.input = event.target.value;
                const newTodo = new model.Todo(state.input);
                model.addTodo(newTodo).then((data) => {
                    state.todolist = [data, ...state.todolist];
                });
            }

        })
    }

    const removeTodoFromList = () => {
        const todolist = document.querySelector('.' + view.domString.todolist);
        todolist.addEventListener('click', (event) => {
            state.todolist = state.todolist.filter((todo) => Number(todo.id) !== Number(event.target.id));
            console.log(event.target.id);
            model.deleteTodo(Number(event.target.id)); // delete data from backend db
        });
        // removeButtons.forEach((btn) => {
        //     btn.addEventListener('click', (event) => {
        //         // console.log(event.target.id);
        //         // remove the "#" to rerender?
        //         this.todolist = this.todolist.filter((todo) => Number(todo.id) !== Number(event.target.id));
        //     })
        // });
    }

    const init = () => {
        model.getAllTodos().then(data => {
            // only need to call the setter
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
