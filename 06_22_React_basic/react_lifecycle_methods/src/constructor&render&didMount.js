import React, { Fragment } from 'react';
import './App.css';

class ChildComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log('ChildComponent-contructor');
  }

  componentDidMount() {
    console.log('ChildComponent-didMount');
  }
  componentDidUpdate() {
    console.log('ChildComponent-didUpdate');
  }
  componentWillUnmount() {
    console.log('ChildComponent-willUnmount');
  }
  render() {
    console.log('ChildComponent-render');
    return (
      <Fragment>
        <h1 id="childComponent"> ChildComponent </h1>
      </Fragment>
    );
  }
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('ParentComponent-contructor');
  }

  shouldComponentUpdate() {
    console.log('ParentComponent-shouldComponentUpdate');
    return true;
  }

  componentDidMount() {
    console.log('ParentComponent-didMount');
  }
  componentDidUpdate() {
    console.log('ParentComponent-didUpdate');
  }
  componentWillUnmount() {
    console.log('ParentComponent-willUnmount');
  }
  render() {
    console.log('ParentComponent-render');
    return (
      <Fragment>
        <h1 id="parentComponent">ParentComponent</h1>
        <ChildComponent />
      </Fragment>
    );
  }
}

export default ParentComponent;
