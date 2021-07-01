import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { myStore, store } from './Redux/Redux';
import { Provider, connect } from 'react-redux';
import { MyProvider, myConnect } from './ReactRedux/ReactRedux';

import WithTodosData from './components/WithTodosData/WithTodosData';

function Title(props) {
  return <h1>{props.title}</h1>;
}

function Title2(props) {
  return <h4>{props.title}</h4>;
}
// class RenderPropsTest extends React.Component {
//   render() {
//     return (
//       <WithTodosData
//         render={(title) => <Title2 title={title}></Title2>}
//       ></WithTodosData>
//     );
//   }
// }
// class Counter extends React.Component {
//   handleAdd = () => {
//     myStore.dispatch({ type: 'counter/incremented' });
//     console.log(myStore.getState());
//   };
//   handleSub = () => {
//     myStore.dispatch({ type: 'counter/decremented' });
//     console.log(myStore.getState());
//   };
//   componentDidMount() {
//     myStore.subscribe(() => this.forceUpdate());
//   }
//   render() {
//     return (
//       <>
//         <h1>Counter:{myStore.getState().value}</h1>
//         <button onClick={this.handleAdd}>Add</button>
//         <button onClick={this.handleSub}>Sub</button>
//       </>
//     );
//   }
// }

// const useForceUpdate = () => {
//   const [updateRef, setUpdate] = React.useState(0);
//   const ref = React.useRef(updateRef);
//   return [
//     updateRef,
//     () => {
//       //ref.current = ref.current + 1;
//       setUpdate(new Date());
//     },
//   ];
// };

// function FCounter() {
//   const [updateRef, forceUpdate] = useForceUpdate();

//   React.useEffect(() => {
//     // // C D M
//     myStore.subscribe(() => {
//       forceUpdate();
//       //console.log(updateRef);
//     });
//   }, []);

//   const handleAdd = () => {
//     myStore.dispatch({ type: 'counter/incremented' });
//     // console.log(myStore.getState());
//     // forceUpdate();
//     // console.log(updateRef);
//   };
//   const handleSub = () => {
//     myStore.dispatch({ type: 'counter/decremented' });
//     // console.log(myStore.getState());
//   };
//   return (
//     <>
//       <h1>FC Counter:{myStore.getState().value}</h1>
//       <button onClick={handleAdd}>Add</button>
//       <button onClick={handleSub}>Sub</button>
//     </>
//   );
// }

class Counter extends React.Component {
  handleAdd = () => {
    this.props.handleAdd();
  };
  handleSub = () => {
    this.props.handleSub();
  };
  render() {
    return (
      <>
        <h1>Counter:{this.props.counter}</h1>
        <h2>Name:{this.props.name}</h2>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Sub</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { counter: state.value };
}

function mapDispatchToProps(dispatch) {
  return {
    handleAdd: () => dispatch({ type: 'counter/incremented' }),
    handleSub: () => dispatch({ type: 'counter/decremented' }),
  };
}

//const MyCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
const MyCounter = myConnect(mapStateToProps, mapDispatchToProps)(Counter);

//console.log(store, myStore);
// const ReactReduxTest = () => {
//   return (
//     <Provider store={store}>
//       <MyCounter></MyCounter>
//       <MyCounter></MyCounter>
//     </Provider>
//   );
// };
const MyReactReduxTest = () => {
  return (
    <MyProvider store={store}>
      <MyCounter name="patrick"></MyCounter>
      <MyCounter name="sam"></MyCounter>
    </MyProvider>
  );
};

ReactDOM.render(<MyReactReduxTest />, document.getElementById('root'));
