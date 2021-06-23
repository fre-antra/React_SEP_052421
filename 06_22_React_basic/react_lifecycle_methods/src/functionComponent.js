import React from 'react';
import './index.css';

// let counterRef = 0;
// const FcCounter = () => {
//   const [counter, setCounter] = React.useState(0);
//   counterRef = counter;

//   const handleShowCounter = () => {
//     setTimeout(() => {
//       alert(counterRef);
//     }, 3000);
//   };
//   return (
//     <>
//       <h1>Counter:{counter}</h1>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         +
//       </button>
//       <button onClick={handleShowCounter}>Show Counter After 3s</button>
//     </>
//   );
// };

//let firstCall = true;
const FunctionComponentCounter = () => {
  const [count, setCount] = React.useState(0);
  const firstCalRef = React.useRef(true);
  React.useEffect(() => {
    console.log('componentDidMount');
  }, []);

  React.useEffect(() => {
    if (firstCalRef.current !== true) {
      console.log('componentDidUpdate');
    } else {
      firstCalRef.current = false;
    }
    return () => {
      console.log('componentWillUnmount');
    };
  }, [count]);

  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => { setCount(count + 1); }}> + 1 </button>
    </>
  );
};

class SiblingComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log('Sibling-constructor');
  }
  shouldComponentUpdate() {
    console.log('Sibling-ShouldComponentUpdate');
    return true;
  }
  componentDidMount() {
    console.log('Sibling-componentDidMount');
  }
  componentDidUpdate() {
    console.log('Sibling-componentDidUpdate');
  }
  render() {
    return <h1>SiblingComponent</h1>;
  }
}

class MyApp extends React.Component {
  state = {
    showApp: true,
  };
  render() {
    return (
      <>
        {this.state.showApp ? <FunctionComponentCounter /> : null}
        <SiblingComponent></SiblingComponent>
        <button
          onClick={() => {
            this.setState({ showApp: !this.state.showApp });
          }}
        >
          Taggle App
        </button>
      </>
    );
  }
}

export default MyApp;


