import React, { Component } from 'react'
import ToDoItem from './todoitem/ToDoItem'
import './toDoItems.css'
import updateComponent from "../../Hoc/withTodoList";
class ToDoItems extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     toDoLists: [],
  //   };
  //   // console.log("constructor", this.state);
  // }

  // handleDelete(id) {
  //   deleteTodo(id)
  //     .then((data) => {
  //       let updateList = this.state.toDoLists.filter((todo) => todo.id !== id);
  //       this.setState({ toDoLists: updateList });
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // }

  // getTodo(){
  //   fetchList().then((data) => this.setState({ toDoLists : data}));
  // }
  // componentDidMount(){
  //   this.getTodo();
  //   // console.log("api", this.state.toDoLists);

  // }

  render() {
    // console.log('todo',this.props)
    return (
      <ul className="to-do-list-ul">
        {this.props.toDoLists.map((item, index) => (
          <ToDoItem key={item.id} item={item} deleteItem={this.props.handleDelete} />
        ))}
      </ul>
    );
  }
}


export default updateComponent(ToDoItems);