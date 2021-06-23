import React, { Component } from 'react'

export default class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myClass: "classComponent",
    };
    console.log("class-constructor", props);
  }
  componentDidMount() {
    //immediately after initial rendering
    console.log("In class: didMount");
  }
  componentDidUpdate(prevProps, prevState) {
    //after component's updates or re-render are flushed to DOM(api call)
    console.log("In class: didUpdate", prevProps, prevState);
  }
  componentWillUnmount() {
    //immediately before removing component from DOM.
    console.log("In class: WillUnmount");
  }

  render() {
    console.log('my class render:', this.state.myClass)
    return (
    <div>
      <h1>This is {this.state.myClass}</h1>
      <SubClass />
    </div>);
  }
}

class SubClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mySubClass: "subClassComponent",
    };
    console.log("sub-constructor", props);
  }
  componentDidMount() {
    //immediately after initial rendering
    console.log("In subclass: didMount");
  }
  componentDidUpdate(prevProps, prevState) {
    //after component's updates or re-render are flushed to DOM(api call)
    console.log("In subclass: didUpdate", prevProps, prevState);
  }
  componentWillUnmount() {
    //immediately before removing component from DOM.
    console.log("In subclass: WillUnmount");
  }

  render() {
    console.log("sub class, render:", this.state.mySubClass);
    return (
      <div>
        <h2>This is {this.state.mySubClass}</h2>
      </div>
    );
  }
}
