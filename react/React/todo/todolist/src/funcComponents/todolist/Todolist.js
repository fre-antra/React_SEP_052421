import React from "react";
import ReactDom from "react-dom";
import "./Todolist.css";

import Todoitem from "./todoitem/Todoitem.js";
import eventHelper from "../../utils/eventHelper";

const Todolist = function () {
  const addBtn = React.useRef(null);
  const addInput = React.useRef(null);
  let todolist = [
    {
      id: 0,
      uid: 0,
      content: "test",
      isFinish: false,
      removed: false,
    },
    {
      id: 1,
      uid: 0,
      content: "test2",
      isFinish: true,
      removed: false,
    },
    {
      id: 2,
      uid: 0,
      content: "test2",
      isFinish: true,
      removed: false,
    },
  ];

  let [state, setState] = React.useState({ todolist: todolist });

  const removeChild = (id) => {
    state.todolist[id].removed = true;
    setState({
      ...state,
    });
  };

  const finishChild = (id) => {
    state.todolist[id].isFinish = true;
    setState({
      ...state,
    });
  };

  const addChild = (event) => {
    state.todolist.push({
      id: state.todolist.length,
      uid: 0,
      content: addInput.current.value,
      isFinish: false,
      removed: false,
    });

    addInput.current.value = "";

    setState({
      ...state,
    });
  };

  const childHelper = {
    removeChild: removeChild,
    finishChild: finishChild,
  };

  React.useEffect(() => {
    eventHelper.on(addBtn.current, "click", addChild);
  }, []);

  console.log(state.todolist, "done");
  return (
    <>
      <div className="input_div">
        <input
          ref={addInput}
          className="input"
          type="text"
          placeholder="What do you want to do..."
        ></input>
        <button className="addButton" ref={addBtn}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="container">
        {state.todolist.map((item) => {
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
};

export default Todolist;
