import React from "react";
import ReactDom from "react-dom";

import "../../../assets/css/article.css"
import "./Postitem.css";
//import eventHelper from "../../../utils/eventHelper.js";

class Postitem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

 
  componentDidMount() {
   
  }

  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <>
        <div class="article-container flex-item-wrap-2 text-border-inverse">
            <div class="article-title">
              <p>Example Blog Post</p>
            </div>
            <div class="article-date">
              <p>Nov 12</p>
            </div>
            <div class="article-preview">
              <p>
                Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
                sem at dolor.
              </p>
            </div>
            <div class="article-link">
              <a href="post.html">Continue Reading</a>
            </div>
          </div>
      </>
    );
  }
}

export default Postitem;
