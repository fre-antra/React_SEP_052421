// Model View Controller

const todoAPI = (() => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const todoPath = "todos";

  const getAllTodos = () =>
    fetch([baseURL, todoPath].join("/")).then((response) => response.json());

  return {
    getAllTodos,
  };
})();

//todoAPI.getAllTodos();

//View
const View = (() => {
  //DOM String to add html contnent using template string
  const domString = {
    todolist: "todo__content",
  };

  //render element with inner html
  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  //Creating a template for LI from API array
  const createTodoTmp = (todoArr) => {
    let htmlString = "";
    todoArr.forEach((item) => {
      htmlString += `<li>${item.title} <i class="fas fa-times close"></i></li>`;
    });
    return htmlString;
  };

  //Adding a new todo task from input.
  const addTodo = (element, todoTitle) => {
    var li = document.createElement("li");
    var text = document.createTextNode(todoTitle);
    var iTag = document.createElement("i");
    iTag.classList.add("fas");
    iTag.classList.add("fa-times");
    iTag.classList.add("close");
    li.appendChild(text);
    li.appendChild(iTag);
    element.appendChild(li);
  };

  //Checking (cross through) the li element on click
  const checkLiElement = (element) => {
    if (element.tagName == "LI") {
      if (element.style.textDecoration == "line-through") {
        element.style.textDecoration = "none";
      } else {
        element.style.textDecoration = "line-through";
      }
    }
  };

  //Deleting the todo li task
  const removeTodo = (element) => {
    element.style.display = "none";
  };
  return {
    domString,
    render,
    createTodoTmp,
    addTodo,
    checkLiElement,
    removeTodo,
  };
})();

//Model
const Model = ((api) => {
  //Todo class
  class Todo {
    constructor(userId, id, title, completed) {
      this.userId = userId;
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }

  //getting todos from api.
  const getAllTodos = api.getAllTodos;

  return {
    getAllTodos,
    Todo,
  };
})(todoAPI);

//Controller

const AppController = ((model, view) => {
  const todoElement = document.querySelector("." + view.domString.todolist);
  const todoBtn = document.querySelector(".btn");
  const input = document.querySelector(".todo__input");
  const liCLose = document.getElementsByClassName("close");

  //Initializing by bridging between the model and view
  const init = () => {
    model.getAllTodos().then((data) => {
      const todoTmpHtmlString = view.createTodoTmp(data);
      view.render(todoElement, todoTmpHtmlString);

      // Initialize event listner after rendering
      btnClick();
      liClick();
      removeLi();
    });
  };

  //Adding btnClick function
  const btnClick = () => {
    todoBtn.addEventListener("click", (event) => {
      let title = input.value;
      if (title == null || title.trim() === "") {
        alert("Type some task");
        input.value = "";
      } else {
        view.addTodo(todoElement, title);
        input.value = "";
      }
      //Adding new listener to listen to added item as well
      removeLi();
    });
  };

  //Adding Li click function
  const liClick = () => {
    todoElement.addEventListener("click", (event) => {
      view.checkLiElement(event.target);
    });
  };

  //Removing Li on close lick funciton
  const removeLi = () => {
    for (let i = 0; i < liCLose.length; i++) {
      liCLose[i].onclick = function () {
        view.removeTodo(this.parentElement);
      };
    }
  };

  return {
    init,
    btnClick,
    liClick,
    removeLi,
  };
})(Model, View);

AppController.init();
