import React, { Component } from 'react';

class Tab extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
    };
  }

  render() {
    const active = this.props.color === this.props.currentColor ? 'active' : '';
    return (
      <div className={`tab ${active} ${this.props.color}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
        <button
          className={`${this.props.color}`}
          onClick={() => this.props.setColor(this.props.color)}
        >
          Set {this.props.color}
        </button>
      </div>
    );
  }
}

export default Tab;
