import React, { Component } from 'react'
import HocComponent from './HocComponent'

export class HoverComponent extends Component {
  render() {
    return (
      <div>
        <h3>===================</h3>
        <h1>{this.props.count}</h1>
        <h2 onMouseOver={this.props.handleIncrement}>
          Hover me to increase count
        </h2>
      </div>
    )
  }
}

export default HocComponent(HoverComponent)
