import React from "react";
import ReactDom from "react-dom";
import "./Todolist.css";

import Todoitem from "./todoitem/Todoitem.js";
import eventHelper from "../../utils/eventHelper.js";
class Todolist extends React.Component {
  constructor(props) {
    super(props);
    let todolist = [
      {
        id: 0,
        uid: 0,
        content: "test",
        isFinish: false,
      },
      {
        id: 1,
        uid: 0,
        content: "test2",
        isFinish: true,
      },
    ];

    this.state = { todolist: todolist };
    this.addBtn = React.createRef();
    this.addInput = React.createRef();
  }

  removeChild = (id) => {
    this.state.todolist[id].removed = true;
    this.setState({
      ...this.state,
    });
  };

  finishChild = (id) => {
    this.state.todolist[id].isFinish = true;
    this.setState({
      ...this.state,
    });
  };

  addChild = (event) => {
    this.state.todolist.push({
      id: this.state.todolist.length,
      uid: 0,
      content: this.addInput.current.value,
      isFinish: false,
      removed: false,
    });

    this.addInput.current.value = "";

    this.setState({
      ...this.state,
    });
  };

  componentDidMount() {
    eventHelper.on(this.addBtn.current, "click", this.addChild);
  }

  componentWillUnmount() {
    eventHelper.remove(this.addBtn.current, "click", this.addChild);
  }

  render() {
    const childHelper = {
      removeChild: this.removeChild,
      finishChild: this.finishChild,
    };

    return (
      <>
        <div className="input_div">
          <input
            ref={this.addInput}
            className="input"
            type="text"
            placeholder="What do you want to do..."
          ></input>
          <button className="addButton" ref={this.addBtn}>
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="container">
          {this.state.todolist.map((item) => {
            if (item.removed) {
              return;
            } else
              return (
                <Todoitem
                  key={item.id}
                  todo={item}
                  childHelper={childHelper}
                ></Todoitem>
              );
          })}
        </div>
      </>
    );
  }
}

export default Todolist;
