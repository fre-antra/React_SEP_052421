import React from "react";
import ReactDom from "react-dom";

import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textcolor: props.textcolor,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.textcolor !== this.state.textcolor) {
      this.setState({ textcolor: this.props.textcolor });
    }
  }

  render() {
    return (
      <div class="navbar-container">
        <nav class="navbar flex-row-space">
          <div class="navbar-left-container flex-item-space"></div>
          <div class="navbar-mid-container flex-item-space">
            <span style={{ color: this.state.textcolor }}>
              Pellentesque nibh. Aenean quam. In scelerisque
            </span>
          </div>
          <div class="navbar-right-container flex-item-space"></div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
