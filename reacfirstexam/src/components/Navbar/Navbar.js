import React from "react";
import ReactDom from "react-dom";

import './Navbar.css';

class Navbar extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      color:props.color,
    }
  }

render(){
  return (
      <div class="navbar-container">
      <nav class="navbar flex-row-space">
        <div class="navbar-left-container flex-item-space">
        </div>
        <div class="navbar-mid-container flex-item-space">
            <span color={this.state.color}>Pellentesque nibh. Aenean quam. In scelerisque</span>
        </div>
        <div class="navbar-right-container flex-item-space">
        </div>
      </nav>
    </div>
  );
}
  
}

export default Navbar;

