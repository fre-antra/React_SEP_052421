import React, { Component } from 'react'

const HocComponent = OriginalComp => {
  class NewComp extends Component {
    state = {
      count: 0,
    }
    handleIncrement = () => {
      this.setState(state => ({
        count: state.count + 1,
      }))
    }

    render() {
      return (
        <OriginalComp
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      )
    }
  }

  return NewComp
}

export default HocComponent
