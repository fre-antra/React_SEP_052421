import React from "react";
import ReactDom from "react-dom";

import "./Todoitem.css";
import eventHelper from "../../../utils/eventHelper.js";

class Todoitem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.todo.id,
      uid: props.todo.uid,
      content: props.todo.content,
      isFinish: props.todo.isFinish,
      editting: false,
    };

    this.mountRef = React.createRef(false);
    this.textInput = React.createRef(null);
    this.removeBtn = React.createRef(null);
    this.doneBtn = React.createRef(null);

    this.childHelper = props.childHelper;
  }

  editCallback = (event) => {
    this.setState({ ...this.state, editting: true });
  };

  submitCallback = (event) => {
    if (event.keyCode === 13) {
      eventHelper.remove(this.textInput.current, "enter", this.submitCallback);
      this.setState({
        ...this.state,
        editting: false,
        content: event.target.value,
      });
    }
  };

  removeCallback = (event) => {
    eventHelper.remove(this.removeBtn.current, "click", this.removeCallback);
    this.childHelper.removeChild(this.state.id);
  };

  doneCallback = (event) => {
    eventHelper.remove(this.doneBtn.current, "click", this.doneCallback);
    this.state.isFinish = true;
    this.setState({
      ...this.state,
    });

    this.childHelper.finishChild(this.state.id);
  };

  componentDidMount() {
    eventHelper.on(this.removeBtn.current, "click", this.removeCallback);
    eventHelper.on(this.textInput.current, "click", this.editCallback);
    if (this.state.isFinish === false)
      eventHelper.on(this.doneBtn.current, "click", this.doneCallback);
  }

  componentDidUpdate() {
    if (this.state.editting) {
      eventHelper.on(this.textInput.current, "enter", this.submitCallback);
    }
  }

  componentWillUnmount() {
    eventHelper.remove(this.textInput.current, "click", this.editCallback);
  }

  render() {
    return (
      <>
        <div className="item">
          <div className="item_body">
            <span className="item_id"> {this.state.id} </span>
            {((edit) => {
              if (edit) {
                return (
                  <input
                    ref={this.textInput}
                    type="text"
                    className="item_content editting"
                    defaultValue={this.state.content}
                  />
                );
                // use react's onchange and event.target.value!!!!!!
                // more simple!!
              } else {
                return (
                  <span ref={this.textInput} className="item_content">
                    {this.state.content}
                  </span>
                );
              }
            })(this.state.editting)}
          </div>

          {((isFinish) => {
            if (isFinish) {
              return <div className="crossline"></div>;
            } else {
              return (
                <button ref={this.doneBtn} className="doneButton">
                  Done
                </button>
              );
            }
          })(this.state.isFinish)}
          <button ref={this.removeBtn} className="removeButton">
            Remove
          </button>
        </div>
      </>
    );
  }
}

export default Todoitem;
