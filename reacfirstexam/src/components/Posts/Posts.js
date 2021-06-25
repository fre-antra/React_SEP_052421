import React from "react";
import ReactDom from "react-dom";
import "./Posts.css";

import Postitem from "./Postitem/Postitem.js";
//import eventHelper from "../../utils/eventHelper.js";

//import getAllTodo from "../../apis/todo.js";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: props.color };
  }

 
  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    const childHelper = {
      
    };

    return (
      <>
        <div class="mainContent-container flex-row-wrap">
          <Postitem></Postitem>
          <Postitem></Postitem>
          <Postitem></Postitem>
          <Postitem></Postitem>
        </div>
      </>
    );
  }
}

export default Posts;
