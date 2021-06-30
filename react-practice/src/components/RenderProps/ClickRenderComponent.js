import React, { Component } from 'react'

class ClickRenderComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.handleIncrement}>
          Click me to increase count
        </button>
      </div>
    )
  }
}

export default ClickRenderComponent
