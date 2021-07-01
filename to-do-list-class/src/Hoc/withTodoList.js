import React, {Component} from 'react'
import { fetchList, deleteTodo } from "../Api/Api";

export default function updateComponent(OriginComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        toDoLists: [],
      };
      // console.log("constructor", this.state);
    }

    handleDelete(id) {
      deleteTodo(id)
        .then((data) => {
          let updateList = this.state.toDoLists.filter(
            (todo) => todo.id !== id
          );
          this.setState({ toDoLists: updateList });
        })
        .catch((err) => {
          console.warn(err);
        });
    }

    getTodo() {
      fetchList().then((data) => this.setState({ toDoLists: data }));
    }
    componentDidMount() {
      this.getTodo();
    }
    render() {
      // console.log("api", this.state.toDoLists);
      return (
        <OriginComponent
          toDoLists={this.state.toDoLists}
          handleDelete={this.handleDelete.bind(this)}
        />
      );
    }
  };
}
