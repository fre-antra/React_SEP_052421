import React, { Component } from 'react'

class RenderComponent extends Component {
  state = {
    count: 0,
  }
  handleIncrement = () => {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }

  render() {
    console.log(this.props)
    return this.props.render(this.state.count, this.handleIncrement)
  }
}

export default RenderComponent
