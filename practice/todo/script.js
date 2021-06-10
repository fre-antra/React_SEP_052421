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
  const domString = {
    todolist: "todo__content",
  };

  const render = (element, htmlString) => {
    element.innerHTML = htmlString;
  };

  const createTodoTmp = (todoArr) => {
    let htmlString = "";
    todoArr.forEach((item) => {
      htmlString += `<li>${item.title} <i class="fas fa-times close"></i></li>`;
    });
    return htmlString;
  };

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

  return {
    domString,
    render,
    createTodoTmp,
    addTodo,
  };
})();

//Model
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
    Todo,
  };
})(todoAPI);

//Controller

const AppController = ((model, view) => {
  const todoElement = document.querySelector("." + view.domString.todolist);
  const todoBtn = document.querySelector(".btn");
  const input = document.querySelector(".todo__input");
  const liCLose = document.getElementsByClassName("close");

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
      const curLiElement = event.target;
      if (curLiElement.tagName == "LI") {
        if (curLiElement.style.textDecoration == "line-through") {
          curLiElement.style.textDecoration = "none";
        } else {
          curLiElement.style.textDecoration = "line-through";
        }
      }
    });
  };

  //Removing Li on close lick funciton
  const removeLi = () => {
    for (let i = 0; i < liCLose.length; i++) {
      liCLose[i].onclick = function () {
        let parent = this.parentElement;
        parent.style.display = "none";
      };
    }
  };

  return {
    init,
    btnClick,
    liClick,
  };
})(Model, View);

AppController.init();
