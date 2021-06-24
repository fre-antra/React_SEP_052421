import React, { useState, useEffect } from "react";
import "./TodoListStyle.css";
import ListItem from "./ListItem/ListItem";

const TodoList = () => {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("component Did Mount");
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const todoPath = "todos";
    fetch([baseUrl, todoPath].join("/"))
      .then((res) => res.json())
      .then((data) => setTodolist(data));
  }, [todolist]);

  const addItem = (event) => {
    const newTodo = event.target.value;
    const newTodoItem = {
      id: Math.random() * 10000,
      userId: 222,
      title: newTodo,
      completed: false,
    };
    // console.log(event.key, newTodo);
    if (event.keyCode === 13 && newTodo !== "") {
      console.log("add new TODO confirm");
      setInput({todolist: [newTodoItem, ...this.state.todolist]})
    }
  };

  const removeItme = (event) => {
    const id = event.target.id;
    setTodolist({todolist: todolist.filter((todoItem) => {
      // convert them to number
      return +todoItem.id !== +id;
    })})
  };

  return (
    <section className="todolist">
      <header className="todolist__header">
        <h1>this is Todo List</h1>
      </header>

      <input
        type="text"
        className="todolist__input"
        placeholder="Add new todo event"
        onKeyDown={addItem}
      />

      <ul className="todolist__list">
        {todolist.map((ele) => {
          return (
            <ListItem key={ele.id} todo={ele} removeItem={removeItme} />
          );
        })}
      </ul>
    </section>
  );
};


// export class TodoList extends Component {
//   state = {
//     todolist: [],
//     input: "",
//   };

//   componentDidMount() {
//     const baseURL = "https://jsonplaceholder.typicode.com";
//     const path = "todos";
//     fetch([baseURL, path].join("/"))
//       .then((res) => res.json())
//       .then((data) => this.setState({ todolist: data }));
//     console.log("Component did Mount");
//   }

//   componentDidUpdate(nextProps, nextState) {
//     console.log("component has changed");
//   }

//   componentWillUnmount() {
//     console.log("Component did Unmount");
//   }

//   removeItme = (event) => {
//     const id = event.target.id;
//     //   console.log(event.target);
//     this.setState({
//       todolist: this.state.todolist.filter((todoItem) => {
//         // convert them to number
//         return +todoItem.id !== +id;
//       }),
//     });
//   };

//   addItem = (event) => {
//     const newTodo = event.target.value;
//     const newTodoItem = {
//       id: Math.random() * 10000,
//       userId: 222,
//       title: newTodo,
//       completed: false,
//     };
//     // console.log(event.key, newTodo);
//     if (event.keyCode === 13 && newTodo !== "") {
//       console.log("add new TODO confirm");
//       this.setState({
//         todolist: [newTodoItem, ...this.state.todolist],
//       });
//     }
//   };

//   render() {
//     return (
//       <section className="todolist">
//         <header className="todolist__header">
//           <h1>this is Todo List</h1>
//         </header>

//         <input
//           type="text"
//           className="todolist__input"
//           placeholder="Add new todo event"
//           onKeyDown={this.addItem}
//         />

//         <ul className="todolist__list">
//           {this.state.todolist.map((ele) => {
//             return (
//               <ListItem key={ele.id} todo={ele} removeItem={this.removeItme} />
//             );
//           })}
//         </ul>
//       </section>
//     );
//   }
// }

export default TodoList;
