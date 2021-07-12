// Model View Controller
import { View } from "./view.js";
import { Model } from "./model.js";

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
