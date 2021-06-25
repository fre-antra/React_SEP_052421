import React from "react";
import ReactDom from "react-dom";
import "./Posts.css";

import Postitem from "./Postitem/Postitem.js";
//import eventHelper from "../../utils/eventHelper.js";

//import getAllTodo from "../../apis/todo.js";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    let posts = [
      {
        id: 0,
        title: "Example Blog Post",
        author: "Tom",
        color: "red",
        content:
          "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque.",
      },
      {
        id: 1,
        title: "Example Blog Post",
        author: "Tom",
        color: "orange",
        content:
          "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque.",
      },
      {
        id: 2,
        title: "Example Blog Post",
        author: "Tom",
        color: "blue",
        content:
          "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque.",
      },
      {
        id: 3,
        title: "Example Blog Post",
        author: "Tom",
        color: "green",
        content:
          "Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque.",
      },
    ];

    this.state = {
      active: props.active,
      posts: posts,
      setColorCallback: props.setColorCallback,
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.active !== prevProps.active) {
      this.setState({ active: this.props.active });
    }
  }
  componentWillUnmount() {}

  render() {
    const childHelper = {};

    return (
      <>
        <div class="mainContent-container flex-row-wrap">
          {this.state.posts.map((item) => {
            let border = false;
            if (item.id === this.state.active) border = true;

            return (
              <Postitem
                key={item.id}
                border={border}
                item={item}
                setColorCallback={this.state.setColorCallback}
              ></Postitem>
            );
          })}
        </div>
      </>
    );
  }
}

export default Posts;
