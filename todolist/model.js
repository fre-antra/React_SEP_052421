import { View } from './view.js';
import { todoAPI } from './api.js';

export const Model = ((api, view) => {
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