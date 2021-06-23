import React, { Fragment } from 'react';
import DemoOne from './Components/demo1/DemoOne';
import DemoTwo from './Components/demo2/DemoTwo';
import DemoThree from './Components/demo3/DemoThree';
import DemoFour from './Components/demo4/DemoFour';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <DemoOne />
        <DemoTwo />
        <DemoThree />
        <DemoFour />
      </Fragment>
    );
  }
}

export default App;
