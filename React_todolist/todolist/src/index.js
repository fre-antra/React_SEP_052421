import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { myStore } from './Redux/Redux';
import { MyProvider, myConnect } from './ReactRedux/ReactRedux';

function mapStateToProps(state) {
  return { counter: state.value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }),
    handleSub: () => dispatch({ type: 'counter/decremented' }),
  };
}

function Counter(props) {
  function handleAdd() {
    return props.handleAdd();
  }

  function handleSub() {
    return props.handleSub();
  }

  return (
    <>
      <h1>Counter:{props.counter}</h1>
      <h2>Name:{props.name}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
}

const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter);

const MyReactReduxTest = () => {
  return (
    <MyProvider store={myStore}>
      <MyCounter name='patrick'></MyCounter>
      <MyCounter name='sam'></MyCounter>
    </MyProvider>
  );
};

ReactDOM.render(<MyReactReduxTest />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const useForceUpdate = () => {
//   const [update, setUpdate] = useState(0);

//   console.log('2. render useForceUpdate!!! --- ' + update);

//   return [
//     update,
//     () => {
//       console.log('5. Listener run....');
//       setUpdate((preState) => {
//         console.log('6. In Listener: ' + preState);
//         return preState + 1;
//       });
//     },
//   ];
// };

// function FCounter() {
//   console.log('1. Render Main Page - before!');
//   const [update, forceUpdate] = useForceUpdate();
//   console.log('3. Render Main Page! - after!');

//   useEffect(() => {
//     console.log('CDM. Subscribe store...');
//     myStore.subscribe(() => {
//       forceUpdate();
//     });
//   }, []);

//   const handleAdd = () => {
//     console.log('4. add: ' + myStore.getState().value);
//     myStore.dispatch({ type: 'counter/incremented' });
//   };

//   const handleSub = () => {
//     console.log('4. sub: ' + myStore.getState().value);
//     myStore.dispatch({ type: 'counter/decremented' });
//   };

//   return (
//     <>
//       <h1>FC Counter:{myStore.getState().value}</h1>
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleSub}>Sub</button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <FCounter />
//       <FCounter />
//     </>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
