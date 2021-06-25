import React from "react";
import "./App.css";
// import PropTypes from "prop-types";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    console.log("clock Mounted");
  }

  componentDidMount() {
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("Component did Mount");
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidUpdate(nextPros, nextState) {
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    console.log("component has changed");
  }

  componentWillUnmount() {
    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    console.log("Component did Unmount");

    // you have to stop the setState in order to avoid keep changing state after component unmount
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <div>
          <h1>Current time:</h1>
          <h2>{this.state.time.toLocaleTimeString()}</h2>
        </div>
      </>
    );
  }
}

const FnClock = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(() => {
    const updatingTime = setInterval(() => {
      console.log("Fn Component Updated");
      setTime(new Date().toLocaleTimeString());
    },1000);
    
    // 如果下面是(情况3)，这个return就是会更新下面的参数([time])， 就不是willUnMount了.且只有time要更新的时候才更新
    // 不给[]作为参数的话(情况1)，这个useEffect会在每一个props或者state更新之后 reredner一遍，很不效率
    return () => {
      // need clear the interval to stop continousely change  time
      clearInterval(updatingTime);
      console.log("WillUnmount");
    };
    // 下面有三种情况： 1:  2:,[] 3:,[time]
  }, []);

  return (
    <>
      <div>
        <h1>This is Fn component time</h1>
        <h2>{time}</h2>
      </div>
    </>
  );
};

class ClockSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  hideOrNot = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.hideOrNot();
          }}
        >
          {this.state.hidden ? "show" : "hide"} the clock
        </button>
        {!this.state.hidden ? <FnClock /> : null}
      </>
    );
  }
}
export default ClockSample;
