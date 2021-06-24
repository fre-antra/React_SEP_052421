import React from "react";
import ReactDom from "react-dom";
import eventHelper from "../../../utils/eventHelper.js";

import "./Todoitem.css";

const Todoitem = function (props) {
  let [state, setState] = React.useState({
    id: props.todo.id,
    uid: props.todo.uid,
    content: props.todo.content,
    isFinish: props.todo.isFinish,
    editting: false,
    removed: props.todo.removed,
  });
  const mountRef = React.useRef(false);
  const textInput = React.useRef(null);
  const removeBtn = React.useRef(null);
  const doneBtn = React.useRef(null);

  const editCallback = (event) => {
    setState({ ...state, editting: true });
  };

  const submitCallback = (event) => {
    if (event.keyCode === 13) {
      setState({
        ...state,
        editting: false,
        content: event.target.value,
      });
    }
  };

  const removeCallback = (event) => {
    eventHelper.remove(removeBtn.current, "click", removeCallback);
    props.childHelper.removeChild(state.id);
  };

  const doneCallback = (event) => {
    eventHelper.remove(doneBtn.current, "click", doneCallback);
    state.isFinish = true;
    setState({
      ...state,
    });
    props.childHelper.finishChild(state.id);
  };

  React.useLayoutEffect(() => {
    if (!state.editting) {
      eventHelper.on(textInput.current, "click", editCallback);

      return () => {
        eventHelper.remove(textInput.current, "click", editCallback);
      };
    }
  });

  React.useLayoutEffect(() => {
    eventHelper.on(removeBtn.current, "click", removeCallback);

    return () => {
      eventHelper.remove(removeBtn.current, "click", removeCallback);
    };
  });

  React.useLayoutEffect(() => {
    if (state.isFinish === false) {
      eventHelper.on(doneBtn.current, "click", doneCallback);

      return () => {
        // render before cleanup!!!!
        // event still but the button is missing
        // eventHelper.remove(doneBtn.current, "click", doneCallback);
      };
    }
  }, [state.isFinish]);

  React.useLayoutEffect(() => {
    if (mountRef.current === false) {
      return () => {
        mountRef.current = true;
      };
    } else {
      if (state.editting) {
        eventHelper.on(textInput.current, "enter", submitCallback);

        return () => {
          eventHelper.remove(textInput.current, "keyup", submitCallback);
        };
      }
    }
  }, [state.editting]);

  return (
    <>
      <div className="item">
        <div className="item_body">
          <span className="item_id"> {state.id} </span>
          {((edit) => {
            if (edit) {
              return (
                <input
                  ref={textInput}
                  type="text"
                  className="item_content editting"
                  defaultValue={state.content}
                />
              );
            } else {
              return (
                <span ref={textInput} className="item_content">
                  {state.content}
                </span>
              );
            }
          })(state.editting)}
        </div>

        {((isFinish) => {
          if (isFinish) {
            return <div className="crossline"></div>;
          } else {
            return (
              <button ref={doneBtn} className="doneButton">
                Done
              </button>
            );
          }
        })(state.isFinish)}
        <button ref={removeBtn} className="removeButton">
          Remove
        </button>
      </div>
    </>
  );
};

export default Todoitem;
