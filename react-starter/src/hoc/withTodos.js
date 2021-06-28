import React from "react";
import {getAllTodos, deleteTodo, addTodo} from "../apis/Api";

export const withTodos = WrappedComponent => {
  return class extends React.Component {
    state = {
      todolist: []
    }

    handleAddTodo = newTodo => {
      addTodo(newTodo).then(data => {
        this.setState({
          todolist: [data, ...this.state.todolist]
        })
      })
    }

    handleRemoveTodo = id => {
      deleteTodo(id).then(data => {
        this.setState({
          todolist: this.state.todolist.filter(todo => todo.id !== id)
        })
      }).catch(e => {
        console.log(e)
      })
    }

    componentDidMount() {
      getAllTodos().then(data => {
        this.setState({
          todolist: data
        })
      })
    }

    render() {
      return (
          <WrappedComponent todolist={this.state.todolist} handleAddTodo={this.handleAddTodo}
                            handleRemoveTodo={this.handleRemoveTodo}/>
      )
    }

  }
}