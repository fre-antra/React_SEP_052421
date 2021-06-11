// Model View Controller

const todoAPI = (() => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  const todoPath = 'todos'

  const getAllTodos = () =>
    fetch([baseUrl, todoPath].join('/')).then(response => response.json())

  const deleteTodo = id =>
    fetch([baseUrl, todoPath, id].join('/'), {
      method: 'DELETE',
    })

  return {
    getAllTodos,
    deleteTodo,
  }
})()

const View = (() => {
  const domString = {
    todolist: 'todolist__content',
    removebtn: 'btn-remove',
  }

  const render = (element, htmlString) => {
    element.innerHTML = htmlString
  }

  const createTodoTmp = todoArray => {
    let htmlString = ''
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
          `
    })
    return htmlString
  }

  return {
    domString,
    render,
    createTodoTmp,
  }
})()

const Model = ((api, view) => {
  class Todo {
    constructor(userId, id, title, completed) {
      this.userId = userId
      this.id = id
      this.title = title
      this.completed = completed
    }
  }

  class State {
    #todolist = []

    get todolist() {
      return this.#todolist
    }

    set todolist(newlist) {
      this.#todolist = newlist

      const todoElement = document.querySelector('.' + view.domString.todolist)
      const todoTmp = view.createTodoTmp(this.#todolist)
      view.render(todoElement, todoTmp)

      const removebuttons = document.querySelectorAll(
        '.' + view.domString.removebtn
      )
      removebuttons.forEach(btn => {
        btn.addEventListener('click', event => {
          this.todolist = this.todolist.filter(
            todo => +todo.id !== +event.target.id
          )
        })
      })
    }
  }

  const getAllTodos = api.getAllTodos
  const deleteTodo = api.deleteTodo

  return {
    Todo,
    State,
    getAllTodos,
    deleteTodo,
  }
})(todoAPI, View)

const AppController = ((model, view) => {
  const state = new model.State()

  const removeTodoFromList = () => {}

  const init = () => {
    model.getAllTodos().then(data => {
      state.todolist = data
    })
  }

  return {
    init,
  }
})(Model, View)

AppController.init()
