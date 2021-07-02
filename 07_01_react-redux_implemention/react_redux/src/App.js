import React, { Fragment } from 'react';
import './App.css';
import { myConnect } from './react-redux/react-redux';

class App extends React.Component {

  render() {
    const { handleAdd, handleSub, counter, name } = this.props;

    return (
      <Fragment>
        <h1>Counter: {counter}</h1>
        <h2>Name: {name}</h2>
        <button onClick={() => handleAdd()}> + 1</button>
        <button onClick={() => handleSub()}> - 1 </button>
      </Fragment>
    );
  }
};

function mapStateToProps(state) {
  console.log(state);
  return { counter: state.value };
};

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }), // handleAdd is a function, so we should assign a function as its value
    handleSub: () => dispatch({ type: 'counter/decremented' })
  };
};

export default myConnect(mapStateToProps, mapDispatchToProps)(App);



// Functional Component with customized hook

// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   console.log('stateCountValue', value);
//   return [value, () => setValue(value => value + 1)]; // update the state to force render
// }

// function FuncApp() {
//   const [counter, forceUpdate] = useForceUpdate();

//   useEffect(() => {
//     console.log('useEffect');
//     myStore.subscribe(() => {
//       forceUpdate();
//     });
//   }, []);

//   const handleAdd = () => {
//     myStore.dispatch({ type: 'counter/incremented' });
//     console.log(myStore.getState());
//   };
//   const handleSub = () => {
//     myStore.dispatch({ type: 'counter/decremented' });
//     console.log(myStore.getState());
//   };

//   return (
//     <Fragment>
//       <h1>Func Counter:{myStore.getState().value}</h1>
//       <button onClick={handleAdd}> + 1 </button>
//       <button onClick={handleSub}> - 1 </button>
//     </Fragment>
//   );

// }

// export default FuncApp;


