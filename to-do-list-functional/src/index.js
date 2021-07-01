import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { myStore } from "./Redux/Redux";

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// function Title(props) {
//   return <h1>{props.title}</h1>;
// }

// function Title2(props) {
//   return <h4>{props.title}</h4>;
// }
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
//     myStore.dispatch({ type: "counter/incremented" });
//     console.log(myStore.getState());
//   };
//   handleSub = () => {
//     myStore.dispatch({ type: "counter/decremented" });
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

const useForceUpdate = () => {
  const [update, setUpdate] = React.useState(0);
  // console.log('update', update)
  return [update, () => {console.log('renderUpdate', update); setUpdate(preState=>{console.log('inSetUpdate',preState,update); return update+1})}];
  // return [update, () => setUpdate([])];
};

function FCounter() {
  const [update, forceUpdate] = useForceUpdate();
  console.log('render', update, )
  React.useEffect(() => {
    myStore.subscribe(() => {
      forceUpdate();
    });
  }, []);
  React.useEffect(() => {
    console.log('didMount')
  });

  const handleAdd = () => {
    myStore.dispatch({ type: "counter/incremented" });
    console.log(myStore.getState());
    // forceUpdate();
    // console.log("add", update, 'forceUpdate');
  };
  const handleSub = () => {
    myStore.dispatch({ type: "counter/decremented" });
    console.log(myStore.getState());
    forceUpdate();
  };
  // console.log('lasrRender')
  return (
    <>
      <h1>FC Counter:{myStore.getState().value}</h1>
      <h2>State:{update}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
}
ReactDOM.render(<FCounter />, document.getElementById("root"));