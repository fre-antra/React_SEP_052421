import React from "react";
import ReactDom from "react-dom";

import "../../../assets/css/article.css";
import "./Postitem.css";
//import eventHelper from "../../../utils/eventHelper.js";

class Postitem extends React.Component {
  constructor(props) {
    super(props);

    this.borderdiv = React.createRef(null);
    this.colorBtn = React.createRef(null);
    this.state = {
      border: props.border,
      item: props.item,
      setColorCallback: props.setColorCallback,
      borderCls: "item-border" + " article-container flex-item-wrap-2",
    };
  }

  componentDidMount() {
    this.colorBtn.current.style.backgroundColor = this.state.item.color;

    this.colorBtn.current.addEventListener("click", (e) => {
      this.state.setColorCallback(this.state.item.color, this.state.item.id);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.border !== prevProps.border) {
      this.setState({
        border: this.props.border,
        borderCls:
          (this.props.border ? "item-border-selected" : "item-border") +
          " article-container flex-item-wrap-2",
      });
    }

    if (this.state.border) {
      this.borderdiv.current.style.borderStyle = "solid";
      this.borderdiv.current.style.borderColor = this.state.item.color;
      this.borderdiv.current.style.boxShadow =
        "1rem 1rem 10px 1px " + this.state.item.color;
    } else {
      this.borderdiv.current.style.borderStyle = "none";
      this.borderdiv.current.style.boxShadow = "none";
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div className={this.state.borderCls} ref={this.borderdiv}>
          <div className="article-title">
            <p>{this.state.item.title}</p>
          </div>
          <div className="article-date article-author">
            <p>{this.state.item.author}</p>
          </div>
          <div className="article-preview">
            <p>{this.state.item.content}</p>
          </div>
          <div className="article-link">
            <button className="color-Btn" ref={this.colorBtn}>
              set {this.state.item.color}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Postitem;
